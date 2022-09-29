<?php
class usuarios_model{
    private $db;
    private $usuarios;
 
    public function __construct(){
        $this->db=Conectar::conexion();
        $this->usuarios=array();
    }
    public function get_usuarios($correo,$password){
        $consulta=$this->db->query("SELECT * FROM usuarios WHERE correo='".$correo."';");
        while($filas=$consulta->fetch_assoc()){
            $this->usuarios[]=$filas;
        }
        return $this->usuarios;
    }
    public function get_info_session(){
        session_start();
        $session_idusario = $_SESSION["session_idusario"];
        $session_nombre = $_SESSION["session_nombre"];
        $session_apellido = $_SESSION["session_apellido"];
        $session_correo = $_SESSION["session_correo"];
    }
}
?>
