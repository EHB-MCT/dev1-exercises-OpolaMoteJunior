"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d')

drawSquare();

function drawSquare() {
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(400,50);
    context.moveTo(50,50);
    context.lineTo(50,400);
    context.lineTo(225,400);

    context.lineTo(225,225);
    context.lineTo(575,225);
    context.lineTo(575,575);
    context.lineTo(225,575);
    context.lineTo(225,400);
    context.moveTo(50,400);
    context.moveTo(50,50);
    context.moveTo(400,50);
    context.lineTo(400,225);
    context.stroke();
    
}


