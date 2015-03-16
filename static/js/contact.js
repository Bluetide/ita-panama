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
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'ZtHev8dFRA87VHhbfwZImA', //API Key asiganada
          'message': {
            'from_email': email, 
            "from_name": name,
            'to': [
              {
                'email': 'gregesf@bluetideconsulting.com', //Destinatario del correo
                'name': 'Contacto ITA Website', //Nombre del Remitente
                'type': 'to'
              }
            ],
            'subject': 'Contacto vía Website ITA', //Titulo del correo
            'html': '<h3>Nuevo contacto ita-sa.com</h3><p>Nombre: ' + name + '</p><p>Email: ' + email + '</p><p>Sitio Web: ' + web + '</p><p>Comentario: ' + comment +'</p><p><h5>Datos de contacto recibidos desde el formulario de contacto de ita-sa.com</h5></p>'
          }
        }
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


