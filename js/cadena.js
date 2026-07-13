let movimientos =

JSON.parse(localStorage.getItem("custodia")) || [];





function guardarMovimiento(){



const usuario =

JSON.parse(localStorage.getItem("usuario"));





const movimiento={



id:

"CAD-"+Date.now(),



evidencia:

document.getElementById("idEvidencia").value,



accion:

document.getElementById("accion").value,



responsable:

document.getElementById("responsable").value 
|| usuario.nombre,



observaciones:

document.getElementById("observaciones").value,



fecha:

new Date().toLocaleString()



};






movimientos.push(movimiento);






localStorage.setItem(

"custodia",

JSON.stringify(movimientos)

);






alert(
"Movimiento registrado correctamente"
);





mostrarCustodia();



}





function mostrarCustodia(){



const tabla =

document.getElementById("listaCustodia");



if(!tabla)return;





tabla.innerHTML="";





movimientos.forEach(m=>{



tabla.innerHTML += `


<tr>


<td>
${m.evidencia}
</td>


<td>
${m.accion}
</td>


<td>
${m.responsable}
</td>


<td>
${m.fecha}
</td>


</tr>


`;



});



}





mostrarCustodia();