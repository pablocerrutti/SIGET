// ======================================
// SIGET
// Nueva Actuación
// Generación automática de evidencias
// ======================================



const usuario = JSON.parse(

localStorage.getItem("usuario")

);





if(!usuario){

window.location="../login.html";

}








let archivos=[];









// Referencias

const fotos = document.getElementById("fotos");

const videos = document.getElementById("videos");









if(fotos){

fotos.addEventListener(

"change",

capturarArchivos

);

}



if(videos){

videos.addEventListener(

"change",

capturarArchivos

);

}









function agregarFotos(){


fotos.click();


}







function agregarVideos(){


videos.click();


}









function capturarArchivos(e){



Array.from(

e.target.files

).forEach(archivo=>{



archivos.push(archivo);



});




mostrarArchivos();


}









function mostrarArchivos(){



let lista =

document.getElementById(

"listaArchivos"

);



lista.innerHTML="";






archivos.forEach(a=>{


lista.innerHTML+=`

<p>

📎 ${a.name}

</p>

`;


});


}









// ======================================
// GENERAR ID EVIDENCIA
// ======================================


function generarIDEvidencia(){



let numero =

Math.floor(

Math.random()*900000

)+100000;



return "EV-"+numero;



}









// ======================================
// GUARDAR ACTUACIÓN
// ======================================


function guardarActuacion(){





let evidencias = JSON.parse(

localStorage.getItem("evidencias")

)

|| [];





let idActuacion =

"ACT-"+

Math.floor(

Math.random()*900000

);








let nuevasEvidencias=[];









archivos.forEach(archivo=>{



let tipo="archivo";




if(

archivo.type.includes("image")

){

tipo="foto";

}





if(

archivo.type.includes("video")

){

tipo="video";

}





if(

archivo.type.includes("pdf")

){

tipo="acta";

}







let evidencia={



id:

generarIDEvidencia(),




tipo:

tipo,



archivo:

archivo.name,



url:

URL.createObjectURL(

archivo

),




origen:

usuario.nombre,





inspector:

usuario.id,





actuacion:

idActuacion,





fecha:

new Date()

.toLocaleString(),





estado:

"En custodia",





historial:[



{


accion:

"CREACIÓN DE EVIDENCIA",


usuario:

usuario.nombre,


fecha:

new Date()

.toLocaleString()



}



]





};





nuevasEvidencias.push(evidencia);




});









// Guardar evidencias


evidencias =

evidencias.concat(

nuevasEvidencias

);





localStorage.setItem(

"evidencias",

JSON.stringify(evidencias)

);









// Guardar actuación


let actuaciones = JSON.parse(

localStorage.getItem("actuaciones")

)

|| [];







actuaciones.push({


id:

idActuacion,



fecha:

new Date()

.toLocaleString(),




matricula:

document.getElementById(

"matricula"

).value,





vehiculo:

document.getElementById(

"vehiculo"

).value,





motivo:

document.getElementById(

"motivo"

).value,





observaciones:

document.getElementById(

"obs"

).value,





evidencias:

nuevasEvidencias.map(

e=>e.id

)





});








localStorage.setItem(

"actuaciones",

JSON.stringify(actuaciones)

);







alert(

"Actuación registrada correctamente\nEvidencias enviadas a Cadena de Custodia"

);







window.location="dashboard.html";



}