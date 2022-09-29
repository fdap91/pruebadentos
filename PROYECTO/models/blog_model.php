<?php
class blog_model{
    private $db;
    private $blog;
 
    public function __construct(){
        $this->db=Conectar::conexion();
        $this->blog=array();
    }
    public function get_blog(){
        $consulta=$this->db->query("SELECT * FROM blog WHERE status = 1 ORDER BY createdate DESC;");
        while($filas=$consulta->fetch_assoc()){
            $this->blog[]=$filas;
        }
        return $this->blog;
    }

    public function get_blogdate($fechadesde,$fechahasta){
        $filtroextra = '';
        if($fechadesde !=''){
            $filtroextra .=' AND createdate >= "'.$fechadesde.' 00:01"';
        }


        if($fechahasta !=''){
             $filtroextra .=' AND createdate <= "'.$fechahasta.' 23:59"';
        }

        $consulta=$this->db->query("SELECT * FROM blog WHERE status = 1 ".$filtroextra." ORDER BY createdate DESC;");
        while($filas=$consulta->fetch_assoc()){
            $this->blog[]=$filas;
        }
        return $this->blog;
    }
}
?>
