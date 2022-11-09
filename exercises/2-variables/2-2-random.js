"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d')

let width = context.canvas.width;
let height = context.canvas.height;

let randomX = Math.floor(Math.random() * width);
let randomY = Math.floor(Math.random() * height);
