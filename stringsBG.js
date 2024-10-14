"use strict";

let nodes = 20;
let links = 8;
let spd = 1;
let freq = 69;

for(let i = 0; i < nodes; i++){
    let nod = document.createElement('img');
    nod.classList.add('node');
    nod.id = 'node'+i;
    nod.style.top = `${Math.round(Math.random() * parseInt(document.body.offsetHeight))}px`;
    nod.style.left = `${Math.round(Math.random() * parseInt(document.body.offsetWidth))}px`;
    document.body.appendChild(nod);
    //console.log(`${i}: ${nod.style.top}, ${nod.style.left}`);

    let xDir = genDir();
    let yDir = genDir();

    window.setInterval(()=>{
        if(document.body.classList.contains('dark')){
            nod.classList.add('dark');
        }
        else{
            nod.classList.remove('dark');
        }
        if(parseInt(nod.style.top) <= 0 || parseInt(nod.style.top) >= parseInt(document.body.offsetHeight)){
            yDir = -yDir;
        }
        if(parseInt(nod.style.left) <= 0 || parseInt(nod.style.left) + parseInt(nod.offsetWidth) >= parseInt(document.body.offsetWidth)){
            xDir = -xDir;
        }
        nod.style.top = parseInt(nod.style.top) + yDir*spd + 'px';
        nod.style.left = parseInt(nod.style.left) + xDir*spd + 'px';
    },freq);
}

window.setInterval(()=>{
    let strings = document.querySelectorAll('.string');
    for(let s = 0; s < strings.length; s++){
        strings[s].remove();
    }
    for(let j = 0; j < nodes/2; j++){
        let beg = document.getElementById('node'+j);

        let end = document.getElementById('node'+(nodes-j-1));

        let begX = parseInt(beg.style.left);
        let begY = parseInt(beg.style.top);
        let endX = parseInt(end.style.left);
        let endY = parseInt(end.style.top);

        let stepX = (endX - begX) / links;
        let stepY = (endY - begY) / links;

        for(let k = 1; k < links; k++){
            let link = document.createElement('img');
            link.classList.add('string');
            link.style.left = k*stepX + begX + "px";
            link.style.top = k*stepY + begY + "px";
            if(document.body.classList.contains('dark')){
                link.classList.add('dark');
            }
            document.body.appendChild(link);
        }
    }
},freq);

function genDir(){
    let dir = Math.round(Math.random());
    if(dir == 0){
        return -1;
    }
    else{
        return 1;
    }
}