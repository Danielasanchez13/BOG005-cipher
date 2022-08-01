
document.getElementById("ingresarNombre").addEventListener("click", function(){
 let name = document.getElementById("nombreAgente").value;
 if (name ==""){
	alert("ingrese el nombre del agente");
} else {
        document.getElementsByClassName("page2")[0].style.display="block";
        let mensaje= "BIENVENID@ AGENTE " + name;
        document.getElementById("saludo").innerHTML=mensaje; 
        document.getElementsByClassName("page1")[0].style.display="none";  
    }  
} );

document.getElementById("mensaje").addEventListener("keyup",function(){
		this.value = this.value.toUpperCase();
	})



