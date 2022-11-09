"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d')

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 50;

drawLines();

function drawLines() {

    context.beginPath();

    context.moveTo(margin, 20);
    context.lineTo(width - margin, 20);
    context.lineTo(margin, 60);
    context.lineTo(width - margin, 60);
    context.lineTo(margin, 100);
    context.lineTo(width - margin, 110);
    context.lineTo(margin, 140);
    context.lineTo(width - margin, 140);
    context.lineTo(margin, 180);
    context.lineTo(width - margin, 180);
    context.lineTo(margin, 220);
    context.lineTo(width - margin, 220);
    context.lineTo(margin, 20);

    context.stroke();
}
