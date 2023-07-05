import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, set, push, ref, onValue, remove, get } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

initializeApp({
    apiKey: "AIzaSyAu8GXqdif0BoSX-yVgRp7LgWtPYGpQrHA",
    authDomain: "jp-mern-stack-course.firebaseapp.com",
    projectId: "jp-mern-stack-course",
    storageBucket: "jp-mern-stack-course.appspot.com",
    messagingSenderId: "215485518377",
    appId: "1:215485518377:web:f803a41063bbca840a0238"
});

const database = getDatabase();

async function getValue(param) {
    return new Promise((res, rej) => {
        onValue(ref(database, param), (data) => {
            res(Object.values(data.val()))
        }, (error) => { rej(error) })
    })
};

export { database, set, push, ref, getValue, remove, get };