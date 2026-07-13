let actas =

JSON.parse(localStorage.getItem("actas")) || [];





function guardarActa(){



const usuario =

JSON.parse(localStorage.getItem("usuario"));






const acta={



numero:

"ACTA-"+Date.now(),



actuacion:

document.getElementById("idActuacion").value,



matricula:

document.getElementById("matricula").value,



infraccion:

document.getElementById("infraccion").value,



descripcion:

document.getElementById("descripcion").value,



inspector:

usuario.nombre,



fecha:

new Date().toLocaleString()



};






actas.push(acta);






localStorage.setItem(

"actas",

JSON.stringify(actas)

);






alert(
"Acta creada correctamente"
);





mostrarActas();



}







function mostrarActas(){



const tabla =

document.getElementById("listaActas");



if(!tabla)return;




tabla.innerHTML="";





actas.forEach(a=>{



tabla.innerHTML += `


<tr>


<td>
${a.numero}
</td>


<td>
${a.actuacion}
</td>


<td>
${a.matricula}
</td>


<td>
${a.inspector}
</td>


</tr>


`;



});



}





mostrarActas();