<?php

include_once './base/member.class.php';
include_once './jwt.php';

// thong tin dang nhap duoc chuyen qua tu app
$json = file_get_contents("php://input");
$id =$_GET['id'];
//$p = md5($_GET['password']);
$_memberClass = new MemberClass();
// kiem tra data trong database
$memberRow = $_memberClass->getMemberByID($id);

// data khac null
if (!empty($memberRow)) {
   // tao them array expire de kiem tra luu lai thoi han tao cua token
    $arrExprice = array('expire' => date('Ymd'));
    // ket hop 2 array $oginRow va $arrExpire de tao token
    $arrToken = array_merge($arrExprice, $memberRow);
    $jsonToken = JWT::encode($arrToken, "MA_BAO_MAT"); // tao token phai nho MA_BAO_MAT dung de giai ma token sau nay
    // $mahoa = JsonHelper::getJson("token", $jsonToken);
    // json tra ve co 2  phan 1 la token duoc ma hoa, 2 la user thong tin co ban ko ma hoa
    $returnValue = array('token' => $jsonToken, 'detail' => $memberRow);
    $mahoa = json_encode($returnValue);
    echo $mahoa;
} else {
    echo '{"token":"Error"}';
}












    