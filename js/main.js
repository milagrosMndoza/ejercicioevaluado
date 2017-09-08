/*aquí va tu código*/
//función inicial
function init(){
	var botonGuardar = document.getElementById("boton-guardar");
	botonGuardar.addEventListener("click", obtenerDatos);
	guardarDatos();
}

//datos obtenidos de los input
function obtenerDatos(){
	var nombre = document.getElementById("nombre").value;
	var comentario = document.getElementById("comentario").value;

	localStorage.setItem(nombre, comentario);
	guardarDatos();
}

//función que guarda los datos
function guardarDatos(){
    
	//contenedor comentarios
	var contenedor = document.getElementById("mily");
	contenedor.innerHTML = "";

	//recorrer datos y crear elementos div, h3 y p

    for(var i = 0; i < localStorage.length; i++){
        var clave = localStorage.key(i);
        var valor = localStorage.getItem(clave);

        var div = document.createElement("div");
        div.classList.add("comentario");

        var h3 = document.createElement("h3");
        h3.classList.add("fucsia");

        var p = document.createElement("p");
        p.classList.add("blanco");

        var nombreText = document.createTextNode(clave);
        var comentarioText = document.createTextNode(valor);

        h3.appendChild(nombreText);
        p.appendChild(comentarioText);
        div.appendChild(h3);
        div.appendChild(p);
        contenedor.appendChild(div);
    }
    
	clearInput();
}

init();

//limpiar input del formulario
function clearInput(){
	document.getElementById("nombre").value = "";
	document.getElementById("comentario").value = "";
}

//Botón limpiar datos
var botonLimpiar = document.getElementById("boton-limpiar");
botonLimpiar.addEventListener("click", limpiarDatos);

function limpiarDatos(){
	var contenedor = document.getElementById("mily");
	contenedor.classList.remove("comentario");
	contenedor.innerHTML = "";

	window.localStorage.clear();
}