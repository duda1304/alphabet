<?php
// 'user' object
class User{
 
    // database connection and table name
    private $conn;
    private $table_name = "users";
 
    // object properties
    public $id;
    public $username;
    public $password;
    public $admin;
    public $token;
    public $code;
    public $online;
    public $tempPassword;
 
    // constructor
    public function __construct($db){
        $this->conn = $db;
    }
 
// create new user record
function create(){
 
    $query = "INSERT INTO " . $this->table_name . "
            SET
                username = :username,
                email = :email,
                code = :code,
                password = :password";
 
    $stmt = $this->conn->prepare($query);
 
    $this->password=htmlspecialchars(strip_tags($this->password));

    $stmt->bindParam(':username', $this->username);
    $stmt->bindParam(':email', $this->email);
    $stmt->bindParam(':code', $this->code);
 
    // hash the password before saving to database
    $password_hash = password_hash($this->password, PASSWORD_BCRYPT);
    $stmt->bindParam(':password', $password_hash);
 
    if($stmt->execute()){
        return true;
    }
    return false;
}

// check if given username exist in the database
function usernameExists(){
 
    $query = "SELECT id,  password, admin, online, tempPassword
            FROM " . $this->table_name . "
            WHERE username = ?
            LIMIT 0,1";
 
    $stmt = $this->conn->prepare( $query );
    
    $stmt->bindParam(1, $this->username);
 
    $stmt->execute();
 
    $num = $stmt->rowCount();
 
    if($num>0){
 
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
        $this->id = $row['id'];
        $this->password = $row['password'];
        $this->admin = $row['admin'];
        $this->online = $row['online'];
        $this->tempPassword = $row['tempPassword'];
       
        return true;
    }
    return false;
}

// check if given email exist in the database
function emailExists(){
 
    $query = "SELECT id,  username, password, admin, online
            FROM " . $this->table_name . "
            WHERE email = ?
            LIMIT 0,1";
 
    $stmt = $this->conn->prepare( $query );
    
    $stmt->bindParam(1, $this->email);
 
    $stmt->execute();
 
    $num = $stmt->rowCount();
 
    if($num>0){
        return true;
    }
    return false;
}

// save temporary password
function saveTempPassword(){
 
    $query = "UPDATE " . $this->table_name . "
            SET
                password = :password,
                tempPassword = 1
            WHERE email = :email";
 
    $stmt = $this->conn->prepare($query);
 
    $this->password=htmlspecialchars(strip_tags($this->password));
 
    // hash the password before saving to database
    $password_hash = password_hash($this->password, PASSWORD_BCRYPT);
    $stmt->bindParam(':password', $password_hash);
 
    $stmt->bindParam(':email', $this->email);

    if($stmt->execute()){
        return true;
    }
    return false;
}

// new password
function newPassword(){
 
    $query = "UPDATE " . $this->table_name . "
            SET
                password = :password,
                tempPassword = 0
            WHERE token = :token";
 
    $stmt = $this->conn->prepare($query);
 
    $this->password=htmlspecialchars(strip_tags($this->password));
 
    // hash the password before saving to database
    $password_hash = password_hash($this->password, PASSWORD_BCRYPT);
    $stmt->bindParam(':password', $password_hash);
 
    $stmt->bindParam(':token', $this->token);

    if($stmt->execute()){
        return true;
    }
    return false;
}

// set user offline
function setUserOffline() {
    $query = "UPDATE " . $this->table_name . "
    SET
        online = 0
    WHERE token = :token";

      $stmt = $this->conn->prepare($query);
 
      // unique ID of record to be edited
      $stmt->bindParam(':token', $this->token);
   
      if($stmt->execute()){
          return true;
      }
      return false;
}

// set user online
function setUserOnline() {
    $query = "UPDATE " . $this->table_name . "
    SET
        online = 1
    WHERE token = :token";

      $stmt = $this->conn->prepare($query);
 
      // unique ID of record to be edited
      $stmt->bindParam(':token', $this->token);
   
      if($stmt->execute()){
          return true;
      }
      return false;
}

// check if given code is already in use
function codeInUse(){
 
    $query = "SELECT id
            FROM " . $this->table_name . "
            WHERE code = ?
            LIMIT 0,1";
 
    $stmt = $this->conn->prepare( $query );
    
    $stmt->bindParam(1, $this->code);
 
    $stmt->execute();
 
    $num = $stmt->rowCount();
 
    if($num>0){
        return true;
    }
    return false;
}



//save token
function saveToken() {
    $query = "UPDATE " . $this->table_name . "
    SET
        token = :token
    WHERE id = :id";

      $stmt = $this->conn->prepare($query);
 
      $stmt->bindParam(':token', $this->token);
   
      // unique ID of record to be edited
      $stmt->bindParam(':id', $this->id);
   
      if($stmt->execute()){
          return true;
      }
      return false;
}

// check if there is registered user with given user token from Local storage
function checkToken() {
     $query = "SELECT id, online, admin, tempPassword
     FROM " . $this->table_name . "
     WHERE token = ?
     LIMIT 0,1";

    $stmt = $this->conn->prepare( $query );

    $stmt->bindParam(1, $this->token);

    $stmt->execute();

    $num = $stmt->rowCount();

    if($num>0){
        // check if user already loggedin on other device
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $this->id = $row['id'];
        $this->online = $row['online'];
        $this->admin = $row['admin'];
        $this->tempPassword = $row['tempPassword'];
    return true;
    }
    return false;
}

}