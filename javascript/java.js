function validarCamposObligatorios() {
    var bandera = true
  
    for (var i = 0; i < document.forms[0].elements.length; i++) {
      var elemento = document.forms[0].elements[i]
      if (elemento.value == '' && elemento.type == 'text') {
        if (elemento.id == 'cedula') {
          document.getElementById('mensajeCedula').innerHTML = '<br>La cedula esta vacia'
        }
  
        elemento.style.border = '1px red solid'
        elemento.className = 'error'
        bandera = false
      }
    }
  
    if (!bandera) {
      alert('Error: revisar los q todos los campos esten llenos')
    }
  
    /*validar que la cedula sea valida*/
    var cad = document.getElementById("cedula").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;
  
    if (cad !== "" && longitud === 10) {
      for (i = 0; i < longcheck; i++) {
        if (i % 2 === 0) {
          var aux = cad.charAt(i) * 2;
          if (aux > 9) aux -= 9;
          total += aux;
        } else {
          total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
        }
      }
  
      total = total % 10 ? 10 - total % 10 : 0;
  
      if (cad.charAt(longitud - 1) == total) {
        alert("Error: La cedula" + " es valida");
  
      } else {
        alert("Error: La cedula" + " es invalida");
  
      }
    }
  
  /*validar la contrasena sea 8 1 numero*/
    let contra = document.getElementById('contrasena').value;
    console.log(contra);
    var patt = new RegExp("^(?=^.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])");
    var res = patt.test(contra);
    if (patt.test(contra) == false) {
      alert("Error: La contrasena " + " es incorrecta.");
    }
  
    /*validar formato fecha de fechaNacimiento*/
  
    let input = document.getElementById('fechaNacimiento').value;
    var reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    if (input.match(reg)) {
      alert("Input matched");
    } else {
      alert("Please enter dd/mm/yyyy");
    }
    
  
  
    return bandera
  
  }

  /*validar ingreso solo letras*/

function validarLetras(elemento) {
    if (elemento.value.length > 0) {
      var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
      console.log(miAscii)
  
      if (miAscii >= 97 && miAscii <= 122) {
        return true
      } else {
        elemento.value = elemento.value.substring(0, elemento.value.length - 1)
        return false
      }
    } else {
      return true
    }
  
  }
  
  /*validar solo numeros*/
  
  function soloNumeros(e) {
    var key = window.Event ? e.which : e.keyCode
    return (key >= 48 && key <= 57)
  }
  
  
  /*validar 10 numeros de telenono*/
  
  function validartelefono(elemento) {
    if (elemento.value.length < 11) {
      return false;
    } else {
      elemento.value = elemento.value.substring(0, elemento.value.length - 1)
    }
  }
  
  
  function validarFEC() {
    let input = document.getElementById('fechaNacimiento').value;
    var reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    if (input.match(reg)) {
      alert("Input matched");
    } else {
      alert("Please enter dd/mm/yyyy");
    }
  }
  
  function validarEmail() {
    let email = document.getElementById('correo').value;
    console.log();
    /*me@example.com*/
    expr = /^([a-zA-Z0-9_\.\-]{3,})+\@(((est)+\.)+((ups)+\.)+((edu)+\.)+((ec)))+$/;
    if (!expr.test(email))
      alert("Error: La dirección de correo " + email + " es incorrecta.");
  }
  
  function validarcontra() {
    let contra = document.getElementById('contrasena').value;
    console.log(contra);
    var patt = new RegExp("^(?=^.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])");
    var res = patt.test(contra);
    if (patt.test(contra) == false)
      alert("Error: La contrasena " + " es incorrecta.");
  }
  
  function validarCedula() {
    console.log();
    var cad = document.getElementById("cedula").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;
  
    if (cad !== "" && longitud === 10) {
      for (i = 0; i < longcheck; i++) {
        if (i % 2 === 0) {
          var aux = cad.charAt(i) * 2;
          if (aux > 9) aux -= 9;
          total += aux;
        } else {
          total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
        }
      }
  
      total = total % 10 ? 10 - total % 10 : 0;
  
      if (cad.charAt(longitud - 1) == total) {
        alert("Error: La cedula" + " es valida");
  
      } else {
        alert("Error: La cedula" + " es invalida");
  
      }
    }
  }
  
  function validarCorreo() {
  
    var x = document.getElementById('correo').value;
    let spliteado = x.split('@');
    if (spliteado.length === 2 && spliteado[0] !== '' && spliteado[1] !== '') {
      if (spliteado[0].length >= 3) {
        if (spliteado[0].match(/^[A-Za-z]+[0-9][A-Za-z]*$/)) {
          if (spliteado[1] === 'est.ups.edu.ec' || spliteado[1] === 'ups.edu.ec')
            return true;
  
          else {
            document.getElementById('correo').style.border = '1px red solid';
            document.getElementById('mensajeCorreo').innerHTML = '<br>el correo debe ser est.ups.edu.ec o est.ups.edu.ec'
            return false;
          }
  
        } else {
          document.getElementById('correo').style.border = '1px red solid';
          document.getElementById('mensajeCorreo').innerHTML = '<br>el correo debe tener letra mayuscula,minuscula,alfanumerico '
          return false;
        }
  
      } else {
        document.getElementById('correo').style.border = '1px red solid';
        document.getElementById('mensajeCorreo').innerHTML = '<br>el correo debe tener al menos 3 caracteres antes @'
        return false;
      }
  
    } else {
      document.getElementById('correo').style.border = '1px red solid';
      return false;
    }
  
  }