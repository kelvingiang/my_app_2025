<?php

include_once 'connect.class.php';

class MemberClass extends Connect {

    private $tableName = 'member';

    public function __construct() {
        $this->connection();
    }

    function getMemberByID($id) {
        $sql = "SELECT * FROM `$this->tableName` WHERE ID = '$id'";
        $this->setQuery($sql);
        return $this->getRow();
    }

    function getAllMember() {
        $sql = "select * from $this->tableName";
        $this->setQuery($sql);
        return $this->getAllData();
    }

    function getLimitMember($offset, $row) {
        $sql = "select * from $this->tableName limit $offset, $row";
        $this->setQuery($sql);
        return $this->getAllData();
    }

    function insertMember($post) {
        $sql = "insert into $this->tableName (name, phone, email) values( '" . $post["txtname"] . "','" . $post['txtphone'] . "','" . $post['txtemail'] . "')";
        $this->setQuery($sql);
        $result = $this->query();
        if ($result) {
            echo 'new add id' . mysql_insert_id();
        } else {
            echo $sql;
        }
    }

    function updateMember($post) {
        $sql = "UPDATE $this->tableName  SET name = '" . $post['txtname'] . "', phone ='" . $post['txtphone'] . "', email ='" . $post['txtemail'] . "' WHERE ID = '" . $post['txtid'] . "'";
        $this->setQuery($sql);
        $result = $this->query();
        if ($result) {
            echo 'done';
        } else {
            echo 'update item' . $sql;
        }
    }

    function deleteMenber($id) {
        $sql = "DELETE FROM `$this->tableName` WHERE `ID` = $id";
        $this->setQuery($sql);
        $result = $this->query();
        if ($result) {
            echo 'delete item' . $result;
        } else {
            echo 'delete item' . $sql;
        }
    }

}
