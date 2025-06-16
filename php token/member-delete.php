<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

include_once './base/member.class.php';
$_memberClass = new MemberClass();

$ID = @$_GET['_id'];
echo $ID;

$memberList = $_memberClass->deleteMenber($ID);


if (!empty($memberList)) {
    echo json_encode($memberList);
}

