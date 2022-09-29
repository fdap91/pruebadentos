<?php
//Llamada al modelo
require_once("models/blog_model.php");
$blog=new blog_model();
$datos=$blog->get_blog();
 
//Llamada a la vista
require_once("views/blog_view.phtml");
?>
