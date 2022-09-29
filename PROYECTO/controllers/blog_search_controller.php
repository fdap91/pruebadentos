<?php
require_once("../db/db.php");
$option = $_GET['op'];


if($option == 'search'){

	$result = array('error' => 0);
	if(isset($_POST) && !empty($_POST)){

		require_once("../models/blog_model.php");
		$fechaDesde =  $_POST['fechaDesde'];
		$fechaHasta =  $_POST['fechaHasta'];

		$sepdate = explode('/', $fechaDesde);
		$formatfeachadesde = $sepdate[2].'-'.$sepdate[1].'-'.$sepdate[0];
		$sepdate2 = explode('/', $fechaHasta);
		$formatfeachahasta = $sepdate2[2].'-'.$sepdate2[1].'-'.$sepdate2[0];
 


		if(strtotime($formatfeachahasta) >= strtotime($formatfeachadesde))
		{
			$blog=new blog_model();
			$datos=$blog->get_blogdate($formatfeachadesde,$formatfeachahasta);

			if(count($datos) > 0){
				$result['data'] = $datos;
				$result['error'] = 1; 
			}
		}else
		{
			$result['error'] = 3; 
		}

		

		echo json_encode($result);

	}
	

} 
