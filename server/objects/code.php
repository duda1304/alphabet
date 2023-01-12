<?php
// 'code' object
class Code{
 
    // database connection and table name
    private $conn;
    private $table_name = "codes";
 
    // object properties
    public $id;
    public $code;
 
    // constructor
    public function __construct($db){
        $this->conn = $db;
    }
 
// create new user record
function saveCode(){
 
    $query = "INSERT INTO " . $this->table_name . "
            SET
                code = :code";
 
    $stmt = $this->conn->prepare($query);
   
    $stmt->bindParam(':code', $this->code);
 
    if($stmt->execute()){
        return true;
    }
    return false;
}

// check if code exists in table of codes
function checkCode() {
     $query = "SELECT id
     FROM " . $this->table_name . "
     WHERE code = ?
     LIMIT 0,1";

    $stmt = $this->conn->prepare( $query );

    $stmt->bindParam(1, $this->code);

    $stmt->execute();

    $num = $stmt->rowCount();

    if($num>0){

    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    $this->id = $row['id'];

    return true;
    }

    return false;
}
}