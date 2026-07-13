// ======================================
// SIGET
// Gestión de usuarios
// Solo Administrador
// ======================================



const usuarioActivo = JSON.parse(

localStorage.getItem("usuario")

);






if(

!usuarioActivo ||

usuarioActivo.rol !== "Administrador"

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

${usuarioActivo.nombre}

</strong>

<br>

${usuarioActivo.rol}

`;









let usuarios = JSON.parse(

localStorage.getItem("usuarios")

)

|| [];









function generarID(){


let numero =

Math.floor(

Math.random()*9000

)+1000;



return "INS-"+numero;


}









function crearUsuario(){



let nuevo={



id:

generarID(),



nombre:

document.getElementById(
"nombre"
).value,



documento:

document.getElementById(
"documento"
).value,



usuario:

document.getElementById(
"usuario"
).value,



password:

document.getElementById(
"password"
).value,



rol:

document.getElementById(
"rol"
).value



};







if(

!nuevo.nombre ||

!nuevo.usuario

){


alert(

"Complete los datos obligatorios"

);


return;


}






usuarios.push(nuevo);





localStorage.setItem(

"usuarios",

JSON.stringify(usuarios)

);






alert(

"Usuario creado correctamente\nID: "

+nuevo.id

);






mostrarUsuarios();

}









function mostrarUsuarios(){



let tabla=

document.getElementById(
"tablaUsuarios"
);



tabla.innerHTML="";





usuarios.forEach(u=>{



tabla.innerHTML += `


<tr>


<td>

${u.id}

</td>



<td>

${u.nombre}

</td>



<td>

${u.usuario}

</td>



<td>

${u.rol}

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








mostrarUsuarios();