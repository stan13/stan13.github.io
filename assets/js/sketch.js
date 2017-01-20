var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    noSmooth();
    canvas.parent('logo-animation');

}

function draw() {
    noSmooth();

    stroke(0, 204, 255);
    noFill();
    ellipse(50, 50, 80, 80);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}