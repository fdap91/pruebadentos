<?php
class blog_model{
    private $db;
    private $blog;
 
    public function __construct(){
        $this->db=Conectar::conexion();
        $this->blog=array();
    }
    public function get_blog(){
        $consulta=$this->db->query("select * from blog;");
        while($filas=$consulta->fetch_assoc()){
            $this->blog[]=$filas;
        }
        return $this->blog;
    }
}
?>
