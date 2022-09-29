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


  $('#Buscador_fechaDesde,#Buscador_fechaHasta').datepicker({
    changeYear: true,
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



$('#Buscador_btnbuscar').click(function(){
let fechaDesde = $('#Buscador_fechaDesde').val();
let fechaHasta = $('#Buscador_fechaHasta').val();
 
$('#Buscador_btnbuscar').addClass('m-progress');
      var url = "controllers/blog_search_controller.php?op=search";
      $.post(url, {
        fechaDesde:fechaDesde,
        fechaHasta:fechaHasta
      },
        function(responseText) { 
          console.log(responseText);
          var abc = jQuery.parseJSON(responseText); 

          if(abc.error == 1){ 
            $('#loadblogs').html('');

            for (var i = 0; i < abc.data.length; i++) {
              console.log(abc.data[i])

              $('#loadblogs').append('<div class="col-sm-4 mb-3">'+
                                '<div class="card">'+
                                    '<img src="https://picsum.photos/200/200?random='+abc.data[i]['idblog']+'" width="100%" height="250px">'+
                                    '<div class="card-body">'+
                                        '<h5 class="card-title">'+abc.data[i]['titulo']+'</h5>'+
                                        '<p class="card-text fw-light fs-6 " style="text-align: justify;">'+abc.data[i]['descripcion']+'</p>'+
                                        '<p class="card-text text-end"><small class="text-muted">'+abc.data[i]['createdate']+'</small></p>'+
                                    '</div>'+
                                '</div>'+
                            '</div>')
            }
          }else{
              $('#loadblogs').html('<div class="col-sm-12 mb-3 text-center"><h3 class="text-warning">No se encontraron publicaciones para mostrar</h3></div>');

          }

          $('#Buscador_btnbuscar').removeClass('m-progress'); 
      });


});

