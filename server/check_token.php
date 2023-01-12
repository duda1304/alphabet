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
$token_exists = $user->checkToken();

// if user is admin he can be logged in on more than one device at same time
if ($token_exists && $user->admin == 1) {
    http_response_code(200);
    echo json_encode(
        array(
            "message" => "Connexion réussie.",
            "code" => 200,
            "tempPassword" => $user->tempPassword,
            "id" => $user->id
        )
    );
} else {
// check if there is registered user with given token
    if($token_exists && $user->online == 0){
        // set user online
        if ($user->setUserOnline()) {
            http_response_code(200);
            echo json_encode(
                array(
                    "message" => "Connexion réussie.",
                    "code" => 200,
                    "tempPassword" => $user->tempPassword,
                    "id" => $user->id
                )
            );
        } else {
            // set response code
                http_response_code(404);
                echo json_encode(
                    array(
                        "message" => "Quelque chose s’est mal passé. Réessayez s'il vous plaît.",
                        "code" => 404
                    )
                );
        }
    } 
    else if ($token_exists && $user->online == 1) {
        http_response_code(404);
        echo json_encode(
            array(
                "message" => "Cet utilisateur est déjà connecté sur un autre appareil.",
                "code" => 401
            )
        );
    }
    
    // login failed
    else{
        // set response code
        http_response_code(401);
                echo json_encode(
                array(
                    "message" => "Données de connexion erronées.",
                    "code" => 401
                )
            );
    }
}

?>