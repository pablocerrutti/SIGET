// ======================================
// SIGET
// Dashboard
// Control de usuarios y permisos
// Dirección de Tránsito y Transporte
// ======================================



// Obtener usuario activo

const usuario = JSON.parse(
    localStorage.getItem("usuario")
);




// Si no existe sesión

if(!usuario){

    window.location="../login.html";

}






// Mostrar usuario conectado


const usuarioActual = 
document.getElementById("usuarioActual");



if(usuarioActual){


    usuarioActual.innerHTML = `

    <strong>
    ${usuario.nombre}
    </strong>

    <br>

    <span>
    ${usuario.rol}
    </span>

    `;


}







// ======================================
// CONTROL DE MENÚ POR ROLES
// ======================================


function controlarMenu(){



    const admin = 
    document.querySelectorAll(".soloAdmin");



    const inspector =
    document.querySelectorAll(".soloInspector");



    const auditor =
    document.querySelectorAll(".soloAuditor");





    // Ocultar todos


    admin.forEach(elemento=>{

        elemento.style.display="none";

    });



    inspector.forEach(elemento=>{

        elemento.style.display="none";

    });



    auditor.forEach(elemento=>{

        elemento.style.display="none";

    });








    // ==============================
    // ADMINISTRADOR
    // ==============================


    if(usuario.rol==="Administrador"){


        admin.forEach(elemento=>{

            elemento.style.display="flex";

        });



        inspector.forEach(elemento=>{

            elemento.style.display="flex";

        });



        auditor.forEach(elemento=>{

            elemento.style.display="flex";

        });



    }






    // ==============================
    // INSPECTOR
    // ==============================


    if(usuario.rol==="Inspector"){



        inspector.forEach(elemento=>{


            elemento.style.display="flex";


        });



    }







    // ==============================
    // AUDITOR
    // ==============================


    if(usuario.rol==="Auditor"){


        auditor.forEach(elemento=>{


            elemento.style.display="flex";


        });


    }




}









// ======================================
// CERRAR SESIÓN
// ======================================


function cerrarSesion(){



    let salir =
    confirm(
    "¿Desea cerrar sesión en SIGET?"
    );



    if(salir){


        localStorage.removeItem("usuario");


        window.location="../login.html";


    }


}









// ======================================
// CARGAR DATOS DASHBOARD
// ======================================


function cargarDatos(){



    let evidencias = 
    JSON.parse(
    localStorage.getItem("evidencias")
    ) || [];



    let actas = 
    JSON.parse(
    localStorage.getItem("actas")
    ) || [];



    let incidencias =
    JSON.parse(
    localStorage.getItem("incidencias")
    ) || [];





    let totalEvidencias =
    document.getElementById(
    "totalEvidencias"
    );



    let totalActas =
    document.getElementById(
    "totalActas"
    );



    let totalIncidencias =
    document.getElementById(
    "totalIncidencias"
    );







    if(totalEvidencias){

        totalEvidencias.innerHTML =
        evidencias.length;

    }





    if(totalActas){

        totalActas.innerHTML =
        actas.length;

    }






    if(totalIncidencias){

        totalIncidencias.innerHTML =
        incidencias.length;

    }



}







// Ejecutar


controlarMenu();


cargarDatos();