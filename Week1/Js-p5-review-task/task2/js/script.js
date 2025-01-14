/**
 * Fisrt js project of Cart263
 * 
 * List of different review tasks
 */

"use strict";

// variables for colors and positions


let square1x = 100;
let square1y = 100;
let square1size = 100;
let square1R = 255;
let square1G = 255;
let square1B = 255;

let square2x = 200;
let square2y = 200;
let square2size = 100;
let square2R = 255;
let square2G = 255;
let square2B = 255;

let square3x = 300;
let square3y = 300;
let square3size = 100;
let square3R = 255;
let square3G = 255;
let square3B = 255;


function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(0, 0, 0);

    squareGoDown();
    square1();
    square2();
    square3();
}

function square1() {
    push();
    noStroke();
    fill(square1R, square1G, square1B);
    rect(square1x, square1y, square1size);
    pop();
}

function square2() {
    push();
    noStroke();
    fill(square2R, square2G, square2B);
    rect(square2x, square2y, square2size);
    pop();
}

function square3() {
    push();
    noStroke();
    fill(square3R, square3G, square3B);
    rect(square3x, square3y, square3size);
    pop();
}


function mousePressed() {
    square1x = random(0, 950);
    square1y = random(0, 950);
}

function keyPressed() {
    if (keyCode === 32) {
        square2x = random(0, 950);
        square2y = random(0, 950);
    }
}

function squareGoDown() {
    square3y--;

    if (square3y < 0) {
        square3y = 1000;
    }
}

function mouseMoved() {
    square3R = random(0, 255);
    square3G = random(0, 255);
    square3B = random(0, 255);
}