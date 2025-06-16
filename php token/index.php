<?php
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

include_once './base/member.class.php';
include_once './helper/define.php';
$_memberClass = new MemberClass();
//$showItem = 5;
//$pageNumber = @$_GET['page'];
//$form = $showItem * $pageNumber;
$memberList = $_memberClass->getAllMember();

if (!empty($memberList)) {
    $arr = array();
    foreach ($memberList as $val) {
        $arrItem = array();
        $arrItem['key'] = $val['ID'];
        $arrItem['name'] = $val['name'];
        $arrItem['phone'] = $val['phone'];
        $arrItem['email'] = $val['email'];
        $arrItem['img'] = URL_img . $val['img'];
        $arr[] = $arrItem;
    }
    echo json_encode($arr);
}
