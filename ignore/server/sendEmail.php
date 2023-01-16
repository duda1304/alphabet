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
$user->email = $data->email;
$email_exists = $user->emailExists();



if ($email_exists) {
    $tempPassword = getRandomString(8);
    $user->password = $tempPassword;
    $saveTempPassword = $user->saveTempPassword();

    if ($saveTempPassword) {

        // the message
        // $msg = "
        // <html>
        //     <head>
        //     </head>
        //     <body>
        //     <p>Bonjour,</p><br>
        //     <p>Suite	à	votre	demande	de	changement	de	mot	de	passe,	nous	vous	invitons	à	vous	
        //     connecter	avec	le	mot	de	passe	ci-dessous:</p><br>
        //     <p style='text-align: center; font-weight: bold;'>$tempPassword</p><br>
        //     <p>Si	vous	n'êtes	pas	à	l'origine	de	cette	demande,	nous	vous	prions	de	contacter	le	Service	Clients	à <a href='email'>support@stepforward-education.fr</a></p><br><br>
        //     <p style='text-align: center;'>Nous	vous remercions	pour votre confiance</p>
        //     <p style='text-align: center;'>Jeu en famille</p>
        //     <table>
        //     <tr>
        //     <th>Firstname</th>
        //     <th>Lastname</th>
        //     </tr>
        //     <tr>
        //     <td>John</td>
        //     <td>Doe</td>
        //     </tr>
        //     </table>
        //     </body>
        // </html>
        // ";

        $msg = "Bonjour,
            
Suite à votre demande de changement de mot de passe, nous vous invitons à vous connecter avec le mot de passe temporaire ci-dessous:

    $tempPassword

Si vous n'êtes pas à l'origine de cette demande, nous vous prions de contacter le Service Clients à support@stepforward-education.fr

Nous vous remercions pour votre confiance

Jeu en famille";
        

        // subject
        $subject = "Réinitialisation de	votre mot de passe";

        // header
        $header = "From:support@stepforward-education.fr \r\n";
        $headers .= "Return-Path:support@stepforward-education.fr\r\n"; 
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text;charset=UTF-8" . "\r\n";
        $headers .= "X-Priority: 3\r\n";
        $headers .= "X-Mailer: PHP". phpversion() ."\r\n" ;

        // $name = "Dennis";

        // Starting output buffer.
        // ob_start();
        // include("mail-template.php");
        // $msg = ob_get_contents();
        // ob_end_clean();

        // send email
        $retval = mail($data->email, $subject, $msg, $header);
                
        if($retval) {
            echo json_encode(
                array(
                    "code" => 200,
                    "message" => "Un email pour réinitialiser votre	mot	de passe a été envoyé à	l'adresse email	renseignée.",
                )
            );
        }else {
            echo json_encode(
                array(
                    "code" => 500,
                    "message" => "Quelque chose s’est mal passé. Réessayez s'il vous plaît."
                )
            );
        }    
    } else {
        echo json_encode(
            array(
                "code" => 500,
                "message" => "Quelque chose s’est mal passé. Réessayez s'il vous plaît."
            )
        );
    }
} else {
    echo json_encode(
        array(
            "code" => 401,
            "message" => "Ce compte n'existe pas."
        )
    );
}

function getRandomString($n) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
 
    for ($i = 0; $i < $n; $i++) {
        $index = rand(0, strlen($characters) - 1);
        $randomString .= $characters[$index];
    }
 
    return $randomString;
}

?>