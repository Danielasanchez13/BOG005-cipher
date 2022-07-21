const abecedario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const inputCifrador = document.getElementById('inputCifrador');
const cifrador = document.getElementById('cifrador');
const mensajeResultado = document.getElementById('mensajeResultado');
const rango = document.getElementById('rango');

const shifMessage = () => {
	const wordArray = [...inputCifrador.value.toUpperCase()];
	alert(wordArray);

}

const submit = e => {
	e.preventDeafult();
	mensajeResultado.innerHTML ='';
	shifMessage()

}

cifrador.onsubmit = submit;