/**
 * Fisrt js project of Cart263
 * 
 * List of different review tasks
 */

"use strict";

// variables for colors and positions

let section1Color = {
    r: 89,
    g: 9,
    b: 71
};

let section2Color = {
    r: 136,
    g: 15,
    b: 140
};

let section3Color = {
    r: 196,
    g: 35,
    b: 159
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
    if (mouseX > 0 && mouseX < 333 && mouseY > 0 && mouseY < 1000) {
        section1Color.r = 255;
        section1Color.g = 255;
        section1Color.b = 255;
    } else {
        section1Color.r = 89;
        section1Color.g = 9;
        section1Color.b = 71;
    }

    if (mouseX > 333 && mouseX < 666 && mouseY > 0 && mouseY < 1000) {
        section2Color.r = 255;
        section2Color.g = 255;
        section2Color.b = 255;
    } else {
        section2Color.r = 136;
        section2Color.g = 15;
        section2Color.b = 140;
    }

    if (mouseX > 666 && mouseX < 1000 && mouseY > 0 && mouseY < 1000) {
        section3Color.r = 255;
        section3Color.g = 255;
        section3Color.b = 255;
    } else {
        section3Color.r = 196;
        section3Color.g = 35;
        section3Color.b = 159;
    }
}