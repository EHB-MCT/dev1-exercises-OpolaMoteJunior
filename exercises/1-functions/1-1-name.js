"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d')

drawName();

function drawName() {
context.beginPath();
context.moveTo(200,50);
context.lineTo(200,250);
context.lineTo(150,275);
context.lineTo(100,250);
context.stroke();

context.beginPath();
context.moveTo(250,50);
context.lineTo(250,250);
context.lineTo(275,275);
context.lineTo(300,250);
context.lineTo(300,50);
context.stroke();

context.beginPath();
context.moveTo(350,50);
context.lineTo(350,275);
context.moveTo(350,50);
context.lineTo(400,275);
context.lineTo(400,50);
context.stroke();

context.beginPath();
context.moveTo(450,50);
context.lineTo(450,275);
context.stroke();

context.beginPath();
context.moveTo(500,75);
context.lineTo(500,250);
context.stroke();
}