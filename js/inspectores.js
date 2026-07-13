let inspectores =
JSON.parse(localStorage.getItem("inspectores")) || [];




function crearInspector(){


const nombre =
document.getElementById("nombre").value.trim();


const id =
document.getElementById("idInspector").value.trim();


const password =
document.getElementById("password").value.trim();



if(!nombre || !id || !password){


alert("Complete todos los campos");

return;


}




const existe =
inspectores.find(i=>i.id===id);



if(existe){


alert("El ID ya existe");

return;


}





const inspector = {


id:id,


nombre:nombre,


usuario:id,


password:password,


rol:"Inspector",


estado:"Activo",


primerIngreso:true


};




inspectores.push(inspector);



localStorage.setItem(

"inspectores",

JSON.stringify(inspectores)

);




alert(

"Inspector creado correctamente\n\nUsuario: "

+id+

"\nClave provisoria: "

+password

);




mostrarInspectores();





document.getElementById("nombre").value="";

document.getElementById("idInspector").value="";

}




function mostrarInspectores(){



const tabla =
document.getElementById("listaInspectores");



if(!tabla) return;



tabla.innerHTML="";




inspectores.forEach(i=>{



tabla.innerHTML += `


<tr>

<td>${i.id}</td>

<td>${i.nombre}</td>

<td>${i.usuario}</td>

<td>🟢 ${i.estado}</td>

</tr>


`;



});



}




mostrarInspectores();