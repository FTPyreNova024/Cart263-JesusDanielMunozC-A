/**
 * Fisrt js project of Cart263
 * 
 * List of different review tasks
 */

"use strict";

// variables for colors and positions

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(0, 0, 0);

    circle1();
    circle2();
    circle3();
}

function circle1() {
    push();
    noStroke();
    fill(164, 35, 168);
    ellipse(100, 100, 60);
    pop();
}

function circle2() {
    push();
    noStroke();
    fill(136, 15, 140);
    ellipse(175, 175, 90);
    pop();
}

function circle3() {
    push();
    noStroke();
    fill(196, 35, 159);
    ellipse(275, 275, 120);
    pop();
}