function sendMail(){
    

    
  //Lee contenido de los difrenetes campos del formulario y los asigna a variables
  
  var name = document.getElementById("contactform-name").value; 
  var email = document.getElementById("contactform-email").value;
  var web = document.getElementById("contactform-web").value;
  var comment = document.getElementById("contactform-message").value;
  
  //Validación de los campos requeridos (Nombre, Email)
  
  if (name == ''){
      $("#contactform-name").addClass( "required" );
  }else if (email == ''){
      $("#contactform-email").addClass( "required" );
  }else {
    
  
        $.ajax({
          type: 'POST',
          //Endpoint de la función de Lambda
          url: 'https://ozgnmbcnef.execute-api.us-east-1.amazonaws.com/default/btc_email_sender', 
          timeout: 0,
          headers: {
            'X-API-Key':'ySSv6Qwedq6zl1cBaEJL7eokByMoKW6YoCGXre00', //API Key
            'Content-Type': 'application/json'
          },
          data:JSON.stringify({
            //Nombre del remitente
            'name': 'Contacto ITA Website', 
            //Subject del correo
            'title': 'Contacto vía Website ITA',
            //Contenido HTML del correo
            'html': '<h3>Nuevo contacto ita-sa.com</h3><p>Nombre: ' + name + '</p><p>Email: ' + email + '</p><p>Sitio Web: ' + web + '</p><p>Comentario: ' + comment +'</p><p><h5>Datos de contacto recibidos desde el formulario de contacto de ita-sa.com</h5></p>',
            //Email de respuesta - debe ser el de la persona que llenó el formulario.
            'replyto': email,
            //API Key
            'key': 'ySSv6Qwedq6zl1cBaEJL7eokByMoKW6YoCGXre00' 
          }),
          dataType: 'json',
        });
      
      //Se ejecuta cuando el correo ya ha sido enviado
      
      $("#form-submit").css("display", "none");
      $("#contactform-email").removeClass( "required" );
      $("#contactform-name").removeClass( "required" );
      $("#contactform-email").prop("disabled", true);
      $("#contactform-name").prop("disabled", true);
      $("#contactform-web").prop("disabled", true);
      $("#contactform-message").prop("disabled", true);
      $("#contactform :input").prop("disabled", true);
      $("#form-result").css("display", "block");
      
      }
  
  }
  
  
  