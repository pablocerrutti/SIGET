// ======================================
// SIGET
// Reportes Institucionales
// ======================================



const usuario = JSON.parse(

localStorage.getItem("usuario")

);






if(

!usuario ||

(usuario.rol!=="Administrador"

&&

usuario.rol!=="Auditor")

){


alert(

"Acceso restringido"

);


window.location="dashboard.html";


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









function obtenerDatos(){



let actuaciones = JSON.parse(

localStorage.getItem("actuaciones")

)

|| [];





let evidencias = JSON.parse(

localStorage.getItem("evidencias")

)

|| [];





let bodycams = JSON.parse(

localStorage.getItem("bodycams")

)

|| [];





let incidencias = JSON.parse(

localStorage.getItem("incidencias")

)

|| [];





let usuarios = JSON.parse(

localStorage.getItem("usuarios")

)

|| [];





let actas = JSON.parse(

localStorage.getItem("actas")

)

|| [];









document.getElementById(

"totalActuaciones"

).innerHTML=

actuaciones.length;







document.getElementById(

"totalEvidencias"

).innerHTML=

evidencias.length;







document.getElementById(

"totalBodycam"

).innerHTML=

bodycams.length;







document.getElementById(

"totalIncidencias"

).innerHTML=

incidencias.length;







document.getElementById(

"usuarios"

).innerHTML=

usuarios.length;







document.getElementById(

"actas"

).innerHTML=

actas.length;







document.getElementById(

"custodia"

).innerHTML=

evidencias.filter(

e=>

e.estado==="En custodia"

).length;



}









function cerrarSesion(){


localStorage.removeItem(

"usuario"

);



window.location="../login.html";


}








obtenerDatos();