// ======================================
// SIGET
// Sistema de Login
// Dirección de Tránsito y Transporte
// ======================================



const formulario = 
document.getElementById("loginForm");



const mensaje =
document.getElementById("mensaje");







formulario.addEventListener(
"submit",
function(e){



e.preventDefault();





const usuarioIngresado =

document.getElementById(
"usuario"
).value;





const passwordIngresada =

document.getElementById(
"password"
).value;









// Usuarios almacenados por administrador


let usuarios = JSON.parse(

localStorage.getItem("usuarios")

)

|| [];









// Usuarios iniciales del sistema


if(usuarios.length===0){


usuarios=[



{


id:"ADM-001",


nombre:"Administrador SIGET",


usuario:"admin",


password:"admin",


rol:"Administrador"


},





{


id:"INS-001",


nombre:"Inspector Demo",


usuario:"inspector",


password:"inspector",


rol:"Inspector"


},





{


id:"AUD-001",


nombre:"Auditor Demo",


usuario:"auditor",


password:"auditor",


rol:"Auditor"


}



];





localStorage.setItem(

"usuarios",

JSON.stringify(usuarios)

);



}









// Buscar usuario



const encontrado = usuarios.find(

u =>

u.usuario === usuarioIngresado

&&

u.password === passwordIngresada


);









if(encontrado){



localStorage.setItem(

"usuario",

JSON.stringify(encontrado)

);






mensaje.style.color="#22c55e";



mensaje.innerHTML=

"Acceso correcto. Ingresando...";





setTimeout(()=>{


window.location="pages/dashboard.html";


},1000);





}

else{



mensaje.style.color="#ef4444";


mensaje.innerHTML=

"Usuario o contraseña incorrectos";



}



}

);