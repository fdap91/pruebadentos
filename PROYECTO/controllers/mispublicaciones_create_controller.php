<?php
require_once("../db/db.php");
$option = $_GET['op'];


if($option == 'register'){

	$result = array('error' => 0);
	if(isset($_POST) && !empty($_POST)){

		require_once("../models/user_model.php");
		require_once("../models/mispublicaciones_model.php");
		$titulo = $_POST['titulo'];
		$descripcion = $_POST['descripcion']; 
		$fechaToday = date('Y-m-d H:i:s');
 

		$usuarios=new usuarios_model();
		$buscarsessionuser = $usuarios->get_info_session(); 

		$mispublicaicones_model=new mispublicaicones_model();
 
		if($buscarsessionuser['session_idusario'] |= ''){
			
			$datos=$mispublicaicones_model->register_blog($buscarsessionuser['session_idusario'],$titulo,$descripcion,$fechaToday);

			if($datos){
				$result['error'] = 1;
			}
		}else{
			$result['error'] = 3;
		}
		 

		echo json_encode($result);

	}

}

