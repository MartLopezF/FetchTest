const formulario= document.getElementById("formulario")

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    enviarDatos(); //Llama la funcion del fecth al enviar el form
})

function enviarDatos() {  
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fecha = document.getElementById("fecha").value;
    const formData= { //Objeto para guardar los valores obtenidos del formulario 
        Nombre:nombre,
        Apellido:apellido,
        Fecha:fecha
    };

    fetch ("https://jsonplaceholder.typicode.com/users", { //Abro con "fetch". Indico el método y el lugar donde se enviaran los datos (URL)
    method:'POST',
    headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(formData) //Conviertes el objeto "formData" en una cadena JSON 
})
.then (res => res.json()) //Convierte la respuesta en un JSON
.then (data =>{ //Toma el objeto JSON y lo muestra en "console.log(data)"
    console.log(data) 
})
}