const usuarioActual =

JSON.parse(localStorage.getItem("usuario"));



if(!usuarioActual){

window.location="../login.html";

}




function cambiarPassword(){


const nueva =

document.getElementById("nuevaPassword").value.trim();



const confirmar =

document.getElementById("confirmarPassword").value.trim();



const mensaje =

document.getElementById("mensaje");




if(!nueva || !confirmar){


mensaje.innerHTML=
"Complete ambos campos";


return;


}




if(nueva !== confirmar){


mensaje.innerHTML=
"Las contraseñas no coinciden";


return;


}




let inspectores =

JSON.parse(localStorage.getItem("inspectores")) || [];





let indice =

inspectores.findIndex(i=>

i.id===usuarioActual.id

);





if(indice !== -1){



inspectores[indice].password=nueva;


inspectores[indice].primerIngreso=false;



localStorage.setItem(

"inspectores",

JSON.stringify(inspectores)

);




usuarioActual.password=nueva;


usuarioActual.primerIngreso=false;



localStorage.setItem(

"usuario",

JSON.stringify(usuarioActual)

);



}



alert(
"Contraseña actualizada correctamente"
);



window.location="dashboard.html";


}