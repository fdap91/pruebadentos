<?php
error_reporting(0);
require_once("db/db.php");
$view = $_GET['view'];

if($view != ''){

}else{
	require_once("controllers/blog_controller.php");	
}

 
?>
