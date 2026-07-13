// ======================================
// SIGET
// Gestión de Evidencias
// ======================================



const usuario = JSON.parse(

localStorage.getItem("usuario")

);





if(!usuario){


window.location="../login.html";


}







document.getElementById(

"usuarioActual"

).innerHTML=`

<strong>

${usuario.nombre}

</strong>

<br>

${usuario.rol}

`;









let evidencias = JSON.parse(

localStorage.getItem("evidencias")

)

|| [];






let evidenciaSeleccionada=null;









function cargarEvidencias(){



let tabla=

document.getElementById(

"tablaEvidencias"

);




tabla.innerHTML="";








let lista=evidencias;





// Inspector solo ve las propias


if(usuario.rol==="Inspector"){



lista=evidencias.filter(

e=>

e.inspector===usuario.id

);



}









lista.forEach(e=>{



tabla.innerHTML+=`


<tr>


<td>

${e.id}

</td>



<td>

${e.tipo}

</td>




<td>

${e.archivo}

</td>




<td>

${e.actuacion}

</td>




<td>

${e.inspector}

</td>



<td>

${e.estado}

</td>





<td>


<button onclick="verDetalle('${e.id}')">

👁 Ver

</button>


</td>



</tr>


`;



});





}









function verDetalle(id){



evidenciaSeleccionada=

evidencias.find(

e=>e.id===id

);







if(!evidenciaSeleccionada)

return;








document.getElementById(

"detalle"

).style.display="block";








document.getElementById(

"vista"

).innerHTML=`

<h3>

${evidenciaSeleccionada.id}

</h3>


<p>

Archivo:

${evidenciaSeleccionada.archivo}

</p>



<p>

Tipo:

${evidenciaSeleccionada.tipo}

</p>



<p>

Estado:

${evidenciaSeleccionada.estado}

</p>



<p>

Actuación:

${evidenciaSeleccionada.actuacion}

</p>


`;





}









function irCadena(){


window.location="cadena.html";


}








function cerrarSesion(){


localStorage.removeItem(

"usuario"

);



window.location="../login.html";


}









cargarEvidencias();