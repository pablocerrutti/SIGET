// firebase-config.js
// Conexion Firebase SIGET

import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getDatabase } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


const firebaseConfig = {

    apiKey: "AIzaSyAIMMzBpN1I2DcyaXX-a01vVfWiIjyZKMc",

    authDomain: "siget-f6b52.firebaseapp.com",

    databaseURL: "https://siget-f6b52-default-rtdb.firebaseio.com",

    projectId: "siget-f6b52",

    storageBucket: "siget-f6b52.firebasestorage.app",

    messagingSenderId: "846129054307",

    appId: "1:846129054307:web:9c23f714681f28c3026e56"

};


const app = initializeApp(firebaseConfig);


export const db = getDatabase(app);
