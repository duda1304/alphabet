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
 
// check if username exists and if password is correct and is user admin
if($username_exists && password_verify($password, $user->password) && $user->admin == 1){
 
    // set response code
    http_response_code(200);
 
     echo json_encode(
            array(
                "message" => "Connexion réussie.",
                "code" => 200
            )
        );
}
 
// login failed
else{
     // set response code
     http_response_code(401);

    if (!$username_exists) {
        echo json_encode(
            array(
                "message" => "Nom d’utilisateur incorrect.",
                "code" => 401
            )
        );
    } else if ($user->admin == 0) {
        echo json_encode(
            array(
                "message" => "Il ne s’agit pas d’un compte administrateur.",
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