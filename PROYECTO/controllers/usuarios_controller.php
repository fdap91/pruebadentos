<?php
require_once("../db/db.php");
$option = $_GET['op'];


if($option == 'login'){

	$result = array('error' => 0);
	if(isset($_POST) && !empty($_POST)){

		require_once("../models/user_model.php");
		$Correo = $_POST['Correo'];
		$contrasena = $_POST['contrasena'];

		$usuarios=new usuarios_model();
		$datos=$usuarios->login_usuarios($Correo,$contrasena);

		if(count($datos) > 0){
			$result['data'] = $datos;
			$result['error'] = 1;

			session_start();
			$_SESSION["session_idusario"] = $datos['idusuario'];
			$_SESSION["session_nombre"] = $datos['nombre'];
			$_SESSION["session_apellido"] = $datos['apellido'];
			$_SESSION["session_correo"] = $datos['correo'];
		}

		echo json_encode($result);

	}
	

}else if($option == 'register'){

	$result = array('error' => 0);
	if(isset($_POST) && !empty($_POST)){

		require_once("../models/user_model.php");
		$Nombre = $_POST['Nombre'];
		$Apellido = $_POST['Apellido'];
		$FechaNacimiento = $_POST['FechaNacimiento'];
		$Correo = $_POST['Correo'];
		$contrasena = $_POST['contrasena'];
		$fechaToday = date('Y-m-d H:i:s');

		$hashed_password = password_hash($contrasena, PASSWORD_DEFAULT);
		$nacimientoformat = date("Y-m-d", strtotime($FechaNacimiento));  


		$usuarios=new usuarios_model();
		$buscarporcorreo = $usuarios->get_usuarios($Correo);



		if(count($buscarporcorreo) == 0){
			$datos=$usuarios->register_usuario($Nombre,$Apellido,$nacimientoformat,$Correo,$hashed_password,$fechaToday);

			if($datos){
				$result['error'] = 1;
			}
		}else{
			$result['error'] = 3;
		}
		 

		echo json_encode($result);

	}

}

