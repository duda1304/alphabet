<?php

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// files needed to connect to database
include_once 'config/database.php';
include_once 'objects/rate.php';
include_once 'objects/user.php';

// get database connection
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$rate = new Rate($db);
$user = new User($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// set property values
$user->token = $data->token;
$token_exists = $user->checkToken();

$rate->challengeNo = $data->challengeNo;
$rate->correct = $data->correct;
$rate->count = $data->count;

if ($token_exists) {
    $rate->userID = $user->id;
    $entry_exists = $rate->checkEntry();

    if ($entry_exists) {
        $rate->attempts = $rate->attempts + 1;
        $update_entry = $rate->update();
        if ($update_entry) {
            http_response_code(200);
            echo json_encode(
                array(
                    "message" => "Enregistrées.",
                    "code" => 200
                )
            );
        } else {
            http_response_code(404);
                echo json_encode(
                    array(
                        "message" => "Quelque chose s’est mal passé. Réessayez s'il vous plaît.",
                        "code" => 404
                    )
                );
        }
    } else {
        $new_entry = $rate->create();
        if ($new_entry) {
            http_response_code(200);
            echo json_encode(
                array(
                    "message" => "Enregistrées.",
                    "code" => 200
                )
            );
        } else {
            http_response_code(404);
                echo json_encode(
                    array(
                        "message" => "Quelque chose s’est mal passé. Réessayez s'il vous plaît.",
                        "code" => 404
                    )
                );
        }
    }
    
} else {
    http_response_code(404);
    echo json_encode(
        array(
            "message" => "Quelque chose s’est mal passé. Réessayez s'il vous plaît.",
            "code" => 404
        )
    );
}

?>