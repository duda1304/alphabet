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
include_once 'objects/code.php';

// get database connection
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$user = new User($db);
$code = new Code($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// set property values
$user->username = $data->username;
$user->password = $data->password;
$user->email = $data->email;
$user->code = $data->code;
$code->code = $data->code;

$code_valid = $code->checkCode();
$code_inuse = $user->codeInUse();
$username_exists = $user->usernameExists();
$email_exists = $user->emailExists();

// generate json web token
include_once 'config/core.php';

// if code is already in use
if(!$code_valid || $code_inuse) {
    // set response code
    http_response_code(401);
    echo json_encode(
        array(
            "message" => "Code non valide",
            "code" => 401
        )
    );
// if that username already exists
} else if ($username_exists) {
     // set response code
     http_response_code(401);
     echo json_encode(
         array(
             "message" => "Ce nom d’utilisateur est déjà utilisé.",
             "code" => 401
         )
    );
} else if ($email_exists) {
    // set response code
    http_response_code(401);
    echo json_encode(
        array(
            "message" => "Ce email est déjà utilisé.",
            "code" => 401
        )
   );
} else {
    if ($user->create()) {
        // set response code
        http_response_code(200);
        echo json_encode(
            array(
                "message" => "Compte créé.",
                "code" => 200
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


?>