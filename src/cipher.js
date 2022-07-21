window.addEventListener("load",inicio,true);
function inicio(){
	document.getElementById("mensaje").addEventListener("keyup",function(){
		this.value = this.value.toUpperCase();
	})
}