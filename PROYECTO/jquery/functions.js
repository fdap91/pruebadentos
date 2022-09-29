function validemail(value){
  if(value.indexOf('@', 0) == -1 || value.indexOf('.', 0) == -1) {
    return false;
  }else{
    return true;
  }
}



function haserror(id){
  var informacion = $('#'+id).val(); 

  if(informacion == ''){ 
    $('#'+id).addClass('has_error');
  }else{
    $('#'+id).removeClass('has_error');
  }

}

function selected_error(id,type){

  if($('#'+id).hasClass("has_error")){

    if(type != 1){
      $('#'+id).removeClass('has_error');  
    }
    
  }else{

    if(type != 2){
      $('#'+id).addClass('has_error');
    }
    
  }
}



$('#ModalLogin_btniniciarsesion').click(function(){
let Correo = $('#ModalLogin_Correo').val();
let contrasena = $('#ModalLogin_contrasena').val();

if(Correo == '' || contrasena == ''){

  haserror("ModalLogin_Correo");
  haserror("ModalLogin_contrasena");

  Swal.fire({
    icon: 'warning',
    title: 'Advertencia',
    text: 'Algunos Campos estan vacios'
  })

}else{

  if(validemail(Correo) ){
    $('#ModalLogin_btniniciarsesion').addClass('m-progress');
    var url = "controllers/usuarios_controller.php?op=login";
    $.post(url, {
      Correo:Correo,
      contrasena:contrasena,
    },
      function(responseText) { 
        var abc = jQuery.parseJSON(responseText); 

        if(abc.error == 1){
           
           Swal.fire({
            icon: 'success',
            title: 'Credenciales correctas',
            text: 'Iniciando sesion'
          })


           setTimeout(function(){
            window.location.reload();
          },2000);

        }else{
           
           Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El usuario o la Contraseña no son Correctos'
          })

        }

        $('#ModalLogin_btniniciarsesion').removeClass('m-progress'); 
    });
  }else{

    if(!validemail(Correo)){
      selected_error("ModalLogin_Correo",1); 

      Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: 'El Correo no es valido'
      })
    }

  }
  

}
});


$(document).ready(function(){
  $('#ModalRegistro_FechaNacimiento').datepicker({
    changeYear: true,
    yearRange: "1950:2003",
    defaultDate: "-40y",
    dateFormat: "dd/mm/yy"
  });
});

$('#ModalRegistro_btnregistrar').click(function(){
let Nombre = $('#ModalRegistro_Nombre').val();
let Apellido = $('#ModalRegistro_Apellido').val();
let FechaNacimiento = $('#ModalRegistro_FechaNacimiento').val();
let Correo = $('#ModalRegistro_Correo').val();
let contrasena = $('#ModalRegistro_contrasena').val();
let repetircontrasena = $('#ModalRegistro_repetircontrasena').val();

if(Nombre == '' || Apellido == '' || FechaNacimiento == '' || Correo == '' || contrasena == '' || repetircontrasena == ''){

  haserror("ModalRegistro_Nombre");
  haserror("ModalRegistro_Apellido");
  haserror("ModalRegistro_FechaNacimiento");
  haserror("ModalRegistro_Correo");
  haserror("ModalRegistro_contrasena");
  haserror("ModalRegistro_repetircontrasena");

  Swal.fire({
    icon: 'warning',
    title: 'Advertencia',
    text: 'Algunos Campos estan vacios'
  })

}else{

  if(validemail(Correo) ){

    if(contrasena == repetircontrasena){

      $('#ModalRegistro_btnregistrar').addClass('m-progress');
      var url = "controllers/usuarios_controller.php?op=register";
      $.post(url, {
        Nombre:Nombre,
        Apellido:Apellido,
        FechaNacimiento:FechaNacimiento,
        Correo:Correo,
        contrasena:contrasena,
      },
        function(responseText) { 
          console.log(responseText);
          var abc = jQuery.parseJSON(responseText); 

          if(abc.error == 1){
             
             Swal.fire({
              icon: 'success',
              title: 'Exito',
              text: 'El usuario se creo con exito'
            })

            haserror("ModalRegistro_Nombre");
            haserror("ModalRegistro_Apellido");
            haserror("ModalRegistro_FechaNacimiento");
            haserror("ModalRegistro_Correo");
            haserror("ModalRegistro_contrasena");
            haserror("ModalRegistro_repetircontrasena");
            
            $('#ModalRegistro_Nombre').val('');
            $('#ModalRegistro_Apellido').val('');
            $('#ModalRegistro_FechaNacimiento').val('');
            $('#ModalRegistro_Correo').val('');
            $('#ModalRegistro_contrasena').val('');
            $('#ModalRegistro_repetircontrasena').val('');

          }else{
             
             Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Se produjo un error al registrar el usuario'
            })

          }

          $('#ModalRegistro_btnregistrar').removeClass('m-progress'); 
      });


    }else if(abc.error == 3){

      Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: 'El Correo ya se encuentra registrado'
      })

    }else{
 

      Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: 'Las Contraseñas no son iguales'
      })

    }


  }else{

    if(!validemail(Correo)){
      selected_error("ModalRegistro_Correo",1); 

      Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: 'El Correo no es valido'
      })
    }

  
  }

}
});