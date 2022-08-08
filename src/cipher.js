const cipher={ 
	encode:function (texto, desplazamiento) {
		let resultado = "";
		let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		desplazamiento = (desplazamiento % 26 + 26) % 26;
		if (texto) {
			for (let i = 0; i < texto.length; i++) {
				if (letras.indexOf(texto[i]) != -1) {
					let posicion = ((letras.indexOf(texto[i]) + desplazamiento) % 26);
					resultado += letras[posicion];
				}
				else
					resultado += texto[i];
			}
	
		}
		return resultado;
	},
	decode:function (texto, desplazamiento) {
		if (!texto)
			return "";
		const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		desplazamiento = (desplazamiento % 26 - 26) % 26;
		return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - desplazamiento) % 26]);
	}
 }
export default cipher;


