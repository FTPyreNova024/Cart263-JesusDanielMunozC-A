/**
 * Fisrt js project of Cart263
 * 
 * List of different review tasks
 */

"use strict";

// variables for colors and positions

let section1Color = {
    r: 39,
    g: 213,
    b: 219
};

let section2Color = {
    r: 39,
    g: 135,
    b: 219
};

let section3Color = {
    r: 12,
    g: 24,
    b: 166
};

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(0, 0, 0);

    threeSections();
}


function threeSections() {
    push();
    noStroke();
    fill(section1Color.r, section1Color.g, section1Color.b);
    quad(0, 1000, 333, 1000, 333, 0, 0, 0);
    pop();

    push();
    noStroke();
    fill(section2Color.r, section2Color.g, section2Color.b);
    quad(333, 1000, 666, 1000, 666, 0, 333, 0);
    pop();

    push();
    noStroke();
    fill(section3Color.r, section3Color.g, section3Color.b);
    quad(666, 1000, 1000, 1000, 1000, 0, 666, 0);
    pop();
}

function mouseOverRect() {
}