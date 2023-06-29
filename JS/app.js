
 let form = document.getElementById("byform");
 let submitbutton = document.getElementById("submitbutton");

   submitbutton.addEventListener("click",function(e){
    e.preventDefault()

  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let tel = document.getElementById("tel").value;
  let comentario = document.getElementById("comentario").value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre.length > 3){
        alert("nombre valido")
     }else{
        alert("nombre es my corto")
     }
    if (emailRegex.test(email)) {
      alert("El correo electrónico es válido.");
    } else {
      alert("El correo electrónico no es válido.");
     }
     function validarNumeroTelefono(tel) {
        let patron = /^\d{2}-\d{4}-\d{6}$/;
        
        if (patron.test(tel)) {
          return true;
        } else {
          return false;
        }
      }
      
      let numeroTel = "54-4564-789099";
      if (validarNumeroTelefono(numeroTel)) {
        console.log("El número de teléfono es válido.");
      } else {
        console.log("El número de teléfono no es válido.");
      }
    
 
          

})
  
