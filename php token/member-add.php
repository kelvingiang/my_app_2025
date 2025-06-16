
<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');


include_once './base/member.class.php';
$_memberClass = new MemberClass();

$_POST = json_decode(file_get_contents("php://input"), true);


if (!empty($_POST)) {
    if (!empty($_POST['txtid'])) {
        $back = $_memberClass->updateMember($_POST);
    } else {
        $back = $_memberClass->insertMember($_POST);
    }
}

if (!empty($back)) {
    echo json_encode($back);
}

