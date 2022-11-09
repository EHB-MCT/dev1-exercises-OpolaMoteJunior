"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontalLines = 60;
let verticalLines = 30;

let width = 600;
let height = 300;
let step = 10; 

drawLines();

function drawLines() {
    context.beginPath();
    context.fillStyle = 'orange';
    context.fillRect = (0, 0, width, height);
    context.fill();
}

function drawLines() {

    let step = 16;
    context.strokeStyle="white";
    for (let i=0;i < horizontalLines ;i++) {
      Utils.drawLine (0 + (step * i),0, width - (step * i), height);
    }

    for (let i=0;i < verticalLines ;i++) {
        Utils.drawLine (0,0 + (step * i),0, width, height - (step * i));
    }   
}