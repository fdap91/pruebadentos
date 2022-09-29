<?php
//Llamada al modelo
require_once("models/blog_model.php");
require_once("models/user_model.php");
$usuarios=new usuarios_model();
$datosusuarios=$usuarios->get_info_session();

$blog=new blog_model();
$datos=$blog->get_blog();
 
//Llamada a la vista
require_once("views/blog_view.phtml");
?>
