function escribir(datos){
const divPersonas = document.getElementById('personas');

const personaHTML = `<div class="personas">
<span>${datos.documento}</span>
<span>${datos.apellidos}, ${datos.nombres}</span>
<span>${datos.localidad} - ${datos.fecNac}</span>
</div>`

divPersonas.innerHTML = personaHTML;

}
function alerta(){
	const documento = document.getElementById('documento').value;
	const apellidos = document.getElementById('apellidos').value;
	const nombres = document.getElementById('nombres').value;
	const fecNac = document.getElementById('fecNac').value;
	const localidad = document.getElementById('localidad').value;

	const persona = {
		documento,
		apellidos,
		nombres,
		localidad,
		fecNac
	}

 	escribir(persona);


}