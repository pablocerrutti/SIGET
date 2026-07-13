// ======================================
// SIGET
// Gestión BodyCam
// Solo Administrador
// ======================================



const usuario = JSON.parse(
localStorage.getItem("usuario")
);





// Protección de acceso


if(
!usuario ||
usuario.rol !== "Administrador"
){


alert(
"Acceso restringido. Solo Administradores."
);


window.location="dashboard.html";


}








// Mostrar usuario


document.getElementById(
"usuarioActual"
).innerHTML=`

<strong>

${usuario.nombre}

</strong>

<br>

${usuario.rol}

`;









// Cargar datos existentes


let equipos =

JSON.parse(
localStorage.getItem("bodycams")
)

|| [];









function guardarBodycam(){



let equipo={


numero:

document.getElementById(
"numero"
).value,



idInspector:

document.getElementById(
"idInspector"
).value,



inspector:

document.getElementById(
"nombreInspector"
).value,



estado:

document.getElementById(
"estado"
).value



};






if(
!equipo.numero ||
!equipo.idInspector ||
!equipo.inspector
){


alert(
"Complete todos los campos"
);


return;


}






equipos.push(equipo);





localStorage.setItem(

"bodycams",

JSON.stringify(equipos)

);






alert(

"BodyCam asignada correctamente"

);





mostrarEquipos();

}









function mostrarEquipos(){



let tabla =

document.getElementById(
"tablaBodycam"
);




tabla.innerHTML="";





equipos.forEach(e=>{



tabla.innerHTML += `


<tr>

<td>

${e.numero}

</td>


<td>

${e.inspector}

</td>


<td>

${e.idInspector}

</td>


<td>

${e.estado}

</td>


</tr>



`;




});



}










function cerrarSesion(){


localStorage.removeItem(
"usuario"
);


window.location="../login.html";


}






mostrarEquipos();