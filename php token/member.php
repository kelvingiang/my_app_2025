<?php
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

include_once './base/member.class.php';
include_once './helper/define.php';

$_memberClass = new MemberClass();
$showItem = @$_GET['page'];
$pageNumber = @$_GET['pageSize'];

$offset = $showItem * $pageNumber;
$memberList = $_memberClass->getLimitMember($offset, $pageNumber);
$arr = array();
if (!empty($memberList)) {
    foreach ($memberList as $val) {
        $arrItem = array();
        $arrItem['key'] = $val['ID'];
        $arrItem['name'] = $val['name'];
        $arrItem['phone'] = $val['phone'];
        $arrItem['email'] = $val['email'];
        $arrItem['img'] =  URL_img . $val['img'];
        $arr[] = $arrItem;
    }
    $arrMode = TRUE;
} else {
    $arrMode = FALSE;
}
$arrResult = array('data' => $arr, 'hasMore' => $arrMode);

//$result = array_merge($arr, $arrMode);


echo json_encode($arrResult);
