import cipher from "./cipher.js"

document.getElementById("ingresarNombre").addEventListener("click", function () {
	let name = document.getElementById("nombreAgente").value;
	if (name == "") {
		alert("ingrese el nombre del agente");
	} else {
		document.getElementsByClassName("page2")[0].style.display = "block";
		let mensaje = "BIENVENID@ AGENTE " + name;
		document.getElementById("saludo").innerHTML = mensaje;
		document.getElementsByClassName("page1")[0].style.display = "none";
	}
});

document.getElementById("mensaje").addEventListener("keyup", function () {
	this.value = this.value.toUpperCase();
})

window.addEventListener("load", inicio, true);
function inicio() {
	document.getElementById("mensaje").addEventListener("keyup", function () {
		this.value = this.value.toUpperCase();
	}, true);

	document.getElementById("cifrar").addEventListener("click", function () {
		let texto = document.getElementById("mensaje").value;
		let desplazamiento = document.getElementById("desplazamiento").value;
		document.getElementById("mensaje2").value = cipher.encode(texto, desplazamiento);
	}, true);

	document.getElementById("descifrar").addEventListener("click", function () {
		let texto = document.getElementById("mensaje").value;
		let desplazamiento = document.getElementById("desplazamiento").value;
		document.getElementById("mensaje2").value = cipher.decode(texto, desplazamiento);
	}, true);
}