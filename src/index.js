
function ingresar(){
    var name = document.getElementById("nombreAgente").value;

    if (name ==""){
        alert("ingrese el nombre del agente");
    } else {
        document.getElementsByClassName("page2")[0].style.display="block";
        var mensaje= "BIENVENID@ AGENTE " + name;
        document.getElementById("saludo").innerHTML=mensaje; 
        document.getElementsByClassName("page1")[0].style.display="none";  
    }  
}




