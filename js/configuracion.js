let configuracion =

JSON.parse(localStorage.getItem("configuracion")) || {};





function guardarConfiguracion(){



configuracion={



institucion:

document.getElementById("institucion").value,



unidad:

document.getElementById("unidad").value,



ciudad:

document.getElementById("ciudad").value



};






localStorage.setItem(

"configuracion",

JSON.stringify(configuracion)

);






alert(
"Configuración guardada correctamente"
);



}





function cargarConfiguracion(){



if(configuracion.institucion){


document.getElementById("institucion").value =
configuracion.institucion;


document.getElementById("unidad").value =
configuracion.unidad;


document.getElementById("ciudad").value =
configuracion.ciudad;



}


}





cargarConfiguracion();