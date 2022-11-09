"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

console.log("width", width);
console.log("height", height);

drawBars();

function drawBars() {
    context.fillstyle = "GoldenRod"
    context.fillRect(0,0,width,height/4);
    context.fillstyle = "orange"
    context.fillRect(0,1*height/4, width, height/4);
    context.fillstyle = "red"
    context.fillRect(0,2*height/4, width, height/4);
    context.fill();

    //draw sun behind the sea
    drawSun();

    context.fillstyle = "darkblue"
    context.fillRect(0,3*height/4, width, height/4);   
    context.fill();
}

function drawSun() {
    context.fillstyle = "yellow"
    context.ellipse(width/2, 3*height/4, width/4, width/4,0,0, Math.PI*2);
    context.fill();
}
window.onresize = drawBars;
