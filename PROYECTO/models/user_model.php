<?php
class usuarios_model{
    private $db;
    private $usuarios;
 
    public function __construct(){
        $this->db=Conectar::conexion();
        $this->usuarios=array();
    }
    public function login_usuarios($correo,$password){

        $consulta=$this->db->query("SELECT * FROM usuarios WHERE correo='".$correo."';");
        while($filas=$consulta->fetch_assoc()){
            if(password_verify($password, $filas['password'])) { 
                $this->usuarios['idusuario']=$filas['idusuario'];
                $this->usuarios['nombre']=$filas['nombre'];
                $this->usuarios['apellido']=$filas['apellido'];
                $this->usuarios['correo']=$filas['correo'];
            }             
        }
        return $this->usuarios;
    }
    public function get_usuarios($correo){

        $consulta=$this->db->query("SELECT * FROM usuarios WHERE correo='".$correo."';");
        while($filas=$consulta->fetch_assoc()){
             $this->usuarios[]=$filas;       
        }
        return $this->usuarios;
    }
    public function get_info_session(){
        $datos = array();
        session_start();
        $datos['session_idusario'] = $_SESSION["session_idusario"];
        $datos['session_nombre'] = $_SESSION["session_nombre"];
        $datos['session_apellido'] = $_SESSION["session_apellido"];
        $datos['session_correo'] = $_SESSION["session_correo"];
        return $datos;
    }    
    public function register_usuario($Nombre,$Apellido,$FechaNacimiento,$Correo,$contrasena,$datetime){

        $consulta=$this->db->query("INSERT INTO `usuarios` (nombre,apellido,correo,fechanacimiento,password,tipousuario,createdate,status) 
    VALUES ('$Nombre', '$Apellido', '$Correo', '$FechaNacimiento', '$contrasena', 'U','$datetime',1)"); 
        return $consulta;
    }
}
?>
