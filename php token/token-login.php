<?php
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

include_once './base/login.class.php';
include_once './jwt.php';

// Set the new timezone
date_default_timezone_set('Asia/Ho_Chi_Minh');

// thong tin dang nhap duoc chuyen qua tu app
$json = file_get_contents("php://input");
$obj  = json_decode($json, true);
$u    = $obj['username'];
$p    = md5($obj['password']);

$_loginClass = new LoginClass();

// kiem tra data trong database
$loginRow = $_loginClass->getUser($u, $p);

// data khac null
if (!empty($loginRow)) {

    // thiết lập thời gian có hạn hiệu lực 10-07-2023?
    // tao them array expire de kiem tra luu lai thoi han tao cua token
    $arrExpire = array('create' => date('YmdHi'), 'expire' => time() + 360);

    // ket hop 2 array $oginRow va $arrExpire de tao token
    $arrToken = array_merge($arrExpire, $loginRow);

    // tao token phai nho MA_BAO_MAT dung de giai ma token sau nay
    $jsonToken = JWT::encode($arrToken, "MA_BAO_MAT");

    // json tra ve co 2  phan 1 la token duoc ma hoa, 2 la user thong tin co ban ko ma hoa
    $returnValue = array('token' => $jsonToken, 'info' => $loginRow);
    $maHoa = json_encode($returnValue);
    echo $maHoa;
} else {
    $error_login = array('error' => "Error login loi nay tra ve tu server");
    echo $error_login ;
}
