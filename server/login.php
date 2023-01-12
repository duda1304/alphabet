<?php

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// files needed to connect to database
include_once 'config/database.php';
include_once 'objects/user.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$user = new User($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// set property values
$user->username = $data->username;
$username_exists = $user->usernameExists();
$password = $data->password;

// generate json web token
include_once 'config/core.php';
include_once 'libs/php-jwt-master/src/BeforeValidException.php';
include_once 'libs/php-jwt-master/src/ExpiredException.php';
include_once 'libs/php-jwt-master/src/SignatureInvalidException.php';
include_once 'libs/php-jwt-master/src/JWT.php';
use \Firebase\JWT\JWT;

// admin can be logged in in same time on more than one device
if($username_exists && password_verify($password, $user->password) && $user->admin == 1){
    $token = array(
        "iss" => $iss,
        "aud" => $aud,
        "iat" => $iat,
        "nbf" => $nbf,
        "data" => array(
            "id" => $user->id,
            "username" => $user->username
        )
     );
  
     // set response code
     http_response_code(200);
  
     // generate jwt
     $jwt = JWT::encode($token, $key);
 
     // save token in database
     $user->token = $jwt;
     // set user online
     if ($user->saveToken() && $user->setUserOnline()) {
         echo json_encode(
             array(
                 "message" => "Connexion réussie.",
                 "code" => 200,
                 "jwt" => $jwt,
                 "tempPassword" => $user->tempPassword,
                 "id" => $user->id
             )
         );
     } else {
           // set response code
             http_response_code(401);
             echo json_encode(
                 array(
                     "message" => "Quelque chose s’est mal passé. Réessayez s'il vous plaît.",
                     "code" => 404
                 )
             );
     }
}
// check if username exists and if password is correct
else if($username_exists && password_verify($password, $user->password) && $user->online == 0){
 
    $token = array(
       "iss" => $iss,
       "aud" => $aud,
       "iat" => $iat,
       "nbf" => $nbf,
       "data" => array(
           "id" => $user->id,
           "username" => $user->username
       )
    );
 
    // set response code
    http_response_code(200);
 
    // generate jwt
    $jwt = JWT::encode($token, $key);

    // save token in database
    $user->token = $jwt;
    // set user online
    if ($user->saveToken() && $user->setUserOnline()) {
        echo json_encode(
            array(
                "message" => "Connexion réussie.",
                "code" => 200,
                "jwt" => $jwt,
                "tempPassword" => $user->tempPassword,
                "id" => $user->id
            )
        );
    } else {
          // set response code
            http_response_code(401);
            echo json_encode(
                array(
                    "message" => "Quelque chose s’est mal passé. Réessayez s'il vous plaît.",
                    "code" => 404
                )
            );
    }
    
}
 
// login failed
else{
     // set response code
     http_response_code(401);

     // tell the user login failed
    if (!$username_exists) {
        echo json_encode(
            array(
                "message" => "Nom d’utilisateur incorrect.",
                "code" => 401
            )
        );
    } else if ($user->online == 1 && $user->admin == 0) {
        echo json_encode(
            array(
                "message" => "Cet utilisateur est déjà connecté sur un autre appareil.",
                "code" => 401
            )
        );
    } else {
        echo json_encode(
            array(
                "message" => "Mot de passe incorrect.",
                "code" => 401
            )
        );
    }
}

?>