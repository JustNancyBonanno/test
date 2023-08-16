function validarContraseña() {
    var password = document.getElementById("password").value;
    var repeatpassword = document.getElementById("repeatpassword").value;
    var inputa = document.getElementById("inputa").value;
    var inputb = document.getElementById("inputb").value;
    var inputc = document.getElementById("inputc").value;
    var inputd = document.getElementById("inputd").value;
    var inpute = document.getElementById("inpute").value;

  
    if (password !== repeatpassword) {
      alert("Las contraseñas ingresadas no coinciden.");
    } else if (password === '' || repeatpassword === '' || inputa === '' || inputb === '' || inputc === '' || inputd === '' || inpute === '') {
      alert("Por favor, complete todos los campos.");
    } else {
      alert("Cuenta creada con éxito! :)");
    }
  }

  function goBack() {
    window.location.href = "file:///C:/Users/nancy/OneDrive/Documentos/GitHub/test/tp%20prog%202/index.html";
  }
  