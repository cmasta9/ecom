"use strict";

const homePath = 'index.html';
const abtPath = 'about.html';
const prodPath = 'products.html';

const homeButt = document.getElementById('home');
const abtButt = document.getElementById('abt');
const prodButt = document.getElementById('prod');
const darkMod = document.getElementById('darkMd');

window.onload = () => {
    console.log(`loadeded ${sessionStorage.getItem('mode')}`);
    if(sessionStorage.getItem('mode') == 'dark'){
        toggleDM();
    }
}

homeButt.onclick = () =>{
    window.location = homePath;
}

abtButt.onclick = () =>{
    window.location = abtPath;
}

prodButt.onclick = () =>{
    window.location = prodPath;
}

darkMod.onclick = () => {
    toggleDM();
}

function toggleDM(){
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
        sessionStorage.setItem('mode','light');
    }
    else{
        document.body.classList.add('dark');
        sessionStorage.setItem('mode','dark');
        //iCont.contentWindow.postMessage('dark', '*');
    }
}
