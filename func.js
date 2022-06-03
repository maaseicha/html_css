
function mostrar(id){
	let nume = document.getElementById(`'${id}'`).value;
	alert(nume);
}

function repetir(){
	let numero = document.getElementById('numer').value;

	if (numero>=1) {
	
		var c = document.querySelector(".contenido");
	  	for (let i = 1; i <= numero; i++) {
	  		var clon = c.cloneNode(true);

	  		document.querySelector('.container').appendChild(clon);
	  	}

	  	var elements = document.querySelectorAll('.elementos');
	  	for (var i = 0; i < elements.length; i++) {
	  		elements[i].innerHTML = `<input class="input" type="text" name="num" id="'inp${i}'" placeholder="Ingrese un algo">
	  								 <button class="btn-button" onclick="mostrar('inp${i}')">Button</button>`;
	  	}
  	}else{
  		alert("Ingrese números positivos")
  	}
}