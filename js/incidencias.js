let incidencias =

JSON.parse(localStorage.getItem("incidencias")) || [];






function guardarIncidencia(){



const usuario =

JSON.parse(localStorage.getItem("usuario"));






const incidencia={



id:

"INC-"+Date.now(),



tipo:

document.getElementById("tipo").value,



prioridad:

document.getElementById("prioridad").value,



descripcion:

document.getElementById("descripcion").value,



ubicacion:

document.getElementById("ubicacion").value,



estado:

"Pendiente",



responsable:

usuario.nombre,



fecha:

new Date().toLocaleString()



};






incidencias.push(incidencia);






localStorage.setItem(

"incidencias",

JSON.stringify(incidencias)

);






alert(
"Incidencia registrada correctamente"
);






mostrarIncidencias();





}







function mostrarIncidencias(){



const tabla =

document.getElementById("listaIncidencias");



if(!tabla)return;





tabla.innerHTML="";





incidencias.forEach(i=>{



tabla.innerHTML += `


<tr>


<td>
${i.id}
</td>


<td>
${i.tipo}
</td>


<td>
${i.prioridad}
</td>


<td>
${i.estado}
</td>


<td>
${i.responsable}
</td>


</tr>


`;



});



}





mostrarIncidencias();