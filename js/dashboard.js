// dashboard.js
// Prueba conexion Firebase SIGET


import { db } from "./firebase-config.js";


import { 
    ref,
    set
} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";



// PRUEBA DE CONEXION

set(ref(db,"prueba"),{

    sistema: "SIGET",

    estado: "Firebase conectado",

    fecha: new Date().toISOString()

})


.then(()=>{

    console.log(
        "Firebase conectado correctamente"
    );

})


.catch((error)=>{

    console.error(
        "Error Firebase:",
        error
    );

});
