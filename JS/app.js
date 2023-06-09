
const datosPersonales = document.getElementById('miFormulario');


  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;
 

 
 function datosPersonales2(nombre,email,tel,){
    if (nombre ==="" || email ==="" || tel ===""){
        console.log ("Faltan datos personales")
    }

}
datosPersonales2(nombre,email,tel);
