<?php

include_once 'connect.class.php';

class LoginClass extends Connect {

    private $tableName = 'use';

    public function __construct() {
        $this->connection();
    }

    function getUser($u, $p) {
        $sql = "SELECT id, username, email, phone FROM `$this->tableName` WHERE username = '$u' AND password = '$p'";
        $this->setQuery($sql);
        return $this->getRow();
    }

    function getUserByID($id) {
        $sql = "SELECT id, username, email, phone FROM `$this->tableName` WHERE ID = '$id'";
        $this->setQuery($sql);
        return $this->getRow();
    }

    function insertUser($username, $password, $email, $phone) {
        $sql = "INSERT INTO `$this->tableName` (`username`, `password`, `email`, `phone`) VALUES('" . $username . "', '" . $password . "', '" . $email . "', '" . $phone . "')";
        $this->setQuery($sql);
        $result = $this->query();
        if ($result) {
            // $sql="insert into `profile`(`userId`, `fullname`, `email`) values('".mysql_insert_id()."', '".$arr["fullname"]."', '".$arr["email"]."')";
            // $this->setQuery($sql);
            //$this->query();
            //echo mysql_insert_id();
            // return  $this->query();
            // }else{
            return mysql_insert_id();
        }
        //return mysql_insert_id();
    }

    function delData($id) {
        $sql = 'delete from `users` where `id`=' . $id;
        $this->setQuery($sql);
        return $this->query();
    }

    function updateData($arr = array()) {
        $sql = "update `users` set`username` = '{$arr[1]}', `password` = '{$arr[2]}' where `id` = {$arr[0]}";
        $this->setQuery($sql);
        //  return $sql;
        return $this->query();
    }

}
