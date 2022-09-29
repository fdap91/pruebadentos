<?php
//Llamada al modelo
require_once("models/mispublicaciones_model.php");
require_once("models/user_model.php");
$usuarios=new usuarios_model();
$datosusuarios=$usuarios->get_info_session();

$blog=new mispublicaicones_model();
$datos=$blog->get_bloguser($datosusuarios["session_idusario"]);
 
//Llamada a la vista
require_once("views/mispublicaciones_view.phtml");
?>
