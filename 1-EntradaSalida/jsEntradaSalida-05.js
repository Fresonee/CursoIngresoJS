/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let suNombre;
	suNombre = document.getElementById("txtIdNombre").value;
	let suEdad;
	suEdad = document.getElementById("txtIdEdad").value;
	alert("Usted se llama "+ suNombre +" y tiene "+ suEdad +" años");

}

