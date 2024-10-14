"use strict";

const imgPath = './images/products/';
const fillStar = '&#9733;';
const emptyStar = '&#9734;';

let feat = 3;
let products = [];
let elems = [];

class Product{
    constructor(name='product',img=0,price=10,rating=5,desc='great product, generic description'){
        this.name = name;
        this.img = img;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
    }
}

products.push(new Product('"Self Care" Kit','1.jpg',10,5));
products.push(new Product('Cow Cream', '2.jpg',6,4));
products.push(new Product('Coffee Mayo', '3.jpg',7,5));
products.push(new Product('Lady Stuff', '4.jpg', 5,3));
products.push(new Product('"Burger"','5.jpg',4,4));

const feats = document.getElementById('feat');
fillElems(products);
fillFeatsRand(elems);

function fillElems(p){
    for(let k = 0; k < p.length; k++){
        elems.push(createEl(p[k]));
    }
}

function fillFeatsBasic(el){
    if(feat < el.length){
        for(let i = 0; i < feat; i++){
            feats.appendChild(el[i]);
        }
    }
    else{
        for(let i = 0; i < el.length; i++){
            feats.appendChild(el[i]);
        }
    }
}

function fillFeatsRand(el){
    let cops = el;
    if(feat < el.length){
        for(let i = 0; i < feat; i++){
            let rand = Math.floor(Math.random()*cops.length);
            //console.log(`${rand}: ${cops[rand]}`);
            feats.appendChild(cops[rand]);
            cops.splice(rand,1);
        }
    }
    else{
        for(let i = 0; i < el.length; i++){
            let rand = Math.floor(Math.random()*cops.length);
            //console.log(`${rand}: ${cops[rand]}`);
            feats.appendChild(cops[rand]);
            cops.splice(rand,1);
        }
    }
}

function createEl(p){
    let d = document.createElement('div');
    d.classList.add('featem');
    let img = document.createElement('img');
    img.src = imgPath + p.img;
    let name = document.createElement('p');
    name.innerText = `${p.name}\n$${p.price}`;
    let stars = document.createElement('p');
        
    //console.log(p.name,p.rating);
    for(let i = 0; i < 5; i++){
        if(i < p.rating){
            stars.innerHTML = stars.innerHTML + fillStar;
        }
        else{
            stars.innerHTML = stars.innerHTML + emptyStar;
        }
    }
        
    d.appendChild(img);
    d.appendChild(name);
    d.appendChild(stars);

    return d;
}