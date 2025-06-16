<?php

include_once './base/member.class.php';
$_memberClass = new MemberClass();

$ID = @$_GET['_id'];

$memberList = $_memberClass->getMemberByID($ID);

if (!empty($memberList)) {
    echo json_encode($memberList);
}

