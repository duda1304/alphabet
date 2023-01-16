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
$user->password = $data->password;
$user->token = $data->token;

$newPassword = $user->newPassword();

// generate json web token
include_once 'config/core.php';

// if code is already in use
if($newPassword) {
    // set response code
    echo json_encode(
        array(
            "message" => "Enregistrées",
            "code" => 200
        )
    );
} else {
    // set response code
    echo json_encode(
        array(
            "message" => "Quelque chose s’est mal passé. Réessayez s'il vous plaît.",
            "code" => 500
        )
    );
}


?>