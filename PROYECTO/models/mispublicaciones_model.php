<?php
class mispublicaicones_model{
    private $db;
    private $blog;
 
    public function __construct(){
        $this->db=Conectar::conexion();
        $this->blog=array();
    }
    public function get_blog(){
        $consulta=$this->db->query("SELECT * FROM blog WHERE status = 1;");
        while($filas=$consulta->fetch_assoc()){
            $this->blog[]=$filas;
        }
        return $this->blog;
    }

    public function get_bloguser($idusuario){
        $filtroextra = ' AND idusuario = '.$idusuario;

        $consulta=$this->db->query("SELECT * FROM blog WHERE status = 1 ".$filtroextra.";");
        while($filas=$consulta->fetch_assoc()){
            $this->blog[]=$filas;
        }
        return $this->blog;
    }
    public function register_blog($idusuario,$titulo,$descripcion,$createdate){

        $consulta=$this->db->query("INSERT INTO `blog` (idusuario,titulo,descripcion,createdate,status) 
    VALUES ('$idusuario', '$titulo', '$descripcion', '$createdate',1)"); 
        return $consulta;
    }
}
?>
