<?php
// 'rate' object
class Rate{
 
    // database connection and table name
    private $conn;
    private $table_name = "rates";
 
    // object properties
    public $id;
    public $userID;
    public $challengeNo;
    public $correct;
    public $count;
    public $attempts;
   
    // constructor
    public function __construct($db){
        $this->conn = $db;
    }
 
// create new rate record
function create(){
 
    $query = "INSERT INTO " . $this->table_name . "
            SET
                userID = :userID,
                challengeNo = :challengeNo,
                correct = :correct,
                count = :count";
 
    $stmt = $this->conn->prepare($query);
 
    $stmt->bindParam(':userID', $this->userID);
    $stmt->bindParam(':challengeNo', $this->challengeNo);
    $stmt->bindParam(':correct', $this->correct);
    $stmt->bindParam(':count', $this->count);
 
    if($stmt->execute()){
        return true;
    }
    return false;
}


// update rate record
function update(){
    $query = "UPDATE " . $this->table_name . "
            SET
                correct = :correct,
                attempts = :attempts
            WHERE userID = :userID && challengeNo = :challengeNo";
 
    $stmt = $this->conn->prepare($query);
 
    $stmt->bindParam(':correct', $this->correct);
    $stmt->bindParam(':attempts', $this->attempts);
    $stmt->bindParam(':userID', $this->userID);
    $stmt->bindParam(':challengeNo', $this->challengeNo);

    if($stmt->execute()){
        return true;
    }
    return false;
}

// check if entry exists
function checkEntry() {
    $query = "SELECT attempts
    FROM " . $this->table_name . "
    WHERE userID = :userID && challengeNo = :challengeNo";

   $stmt = $this->conn->prepare( $query );

   $stmt->bindParam(':userID', $this->userID);
   $stmt->bindParam(':challengeNo', $this->challengeNo);

   $stmt->execute();

   $num = $stmt->rowCount();

   if($num>0){
       $row = $stmt->fetch(PDO::FETCH_ASSOC);
       $this->attempts = $row['attempts'];
   return true;
   }
   return false;
}

// get all success rates
function getAllData() {
    $query = "SELECT challengeNo, correct, count, attempts
    FROM " . $this->table_name . "
    WHERE userID = ?";

   $stmt = $this->conn->prepare( $query );

   $stmt->bindParam(1, $this->userID);

   $stmt->execute();

   $num = $stmt->rowCount();

   if($num>0){
       $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
       return $data;
   }
   return false;
}
}