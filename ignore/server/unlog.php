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
$user->token = $data->token;


// generate json web token
include_once 'config/core.php';
 
// check if username exists and if password is correct
if($user->setUserOffline()){
 
    // set response code
    http_response_code(200);
  
        echo json_encode(
            array(
                "message" => "Connexion réussie.",
                "code" => 200,
                "jwt" => $jwt
            )
        );
}
 
// login failed
else{
     // set response code
     http_response_code(401);

     // tell the user login failed
    
        echo json_encode(
            array(
                "message" => "Quelque chose s’est mal passé. Réessayez s'il vous plaît.",
                "code" => 401
            )
        );
}

?>