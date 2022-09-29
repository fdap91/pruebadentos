<?php
error_reporting(0);
require_once("db/db.php");
require_once("models/user_model.php");
$view = $_GET['view'];

if($view != ''){

}else{
	require_once("controllers/blog_controller.php");	
}


?>
