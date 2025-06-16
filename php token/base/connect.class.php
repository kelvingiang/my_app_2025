<?php



class Connect {



    var $conn = "";

    var $myQuery = null;

    var $sql = "";

    var $fieldsNum;

    var $rowsNum;

    var $fieldname = array();



    public function connection() {

        $this->conn = mysqli_connect('localhost', 'esgservi_uesr', 'P@ssw0rd2023');

        if (!$this->conn) {

            echo 'connect to server failed';

        }

        if (!mysqli_select_db($this->conn, 'esgservi_app')) {

            echo "can't open database";

        }



//        if (!mysql_select_db('app', $this->conn)) {

//            echo "can't open database";

//        }

    }



    public function setQuery($sql) {

        $this->sql = $sql;

    }



    public function query() {

        $this->myQuery = mysqli_query($this->conn, $this->sql);

        return $this->myQuery;

    }



    public function getRow() {

        if (!($result = $this->query())) {

            $er = mysql_errno() . "---" . mysql_error();

            return $er;

        } else {

            $row = mysqli_fetch_assoc($result);

            mysqli_free_result($result);

            return $row;

        }

    }



    public function getAllData() {



        if (!($result = $this->query())) {

            $rr = mysql_errno() . "__" . mysql_error() . "__" . $this->sql . "__" . $this->conn;

            return $rr;

        } else {

            $array = array();

            while ($row = mysqli_fetch_assoc($result)) {

                $array[] = $row;

            }





            $this->getFeildName($result);

            mysqli_free_result($result);



            return $array;

        }

    }



    public function getFeildName($result) {

        $this->fieldsNum = mysqli_num_fields($result);

        $this->rowsNum = mysqli_num_rows($result);



        for ($i = 0; $i < $this->fieldsNum; $i++) {

            $this->fieldname[] = mysqli_fetch_field_direct($result, $i);

        }

    }



    public function tbGetAllData() {

        if (!($result = $this->query())) {

            $arr = mysql_errno() . "--" . mysql_error();

            return $arr;

        } else {

            echo "<table>";

            echo"<tr>";

            for ($i = 0; $i < mysqli_num_fields($result); $i++) {

                echo"<td>" . mysqli_fetch_field_direct($result, $i) . "</td>";

            }

            echo"</tr>";





            while ($row = mysqli_fetch_row($result)) {

                echo"<tr>";

                for ($j = 0; $j < mysqli_num_fields($result); $j++) {

                    echo "<td>" . $row[$j] . "</td>";

                }

                echo"</tr>";

            }



            echo"</table>";

        }

    }



}

