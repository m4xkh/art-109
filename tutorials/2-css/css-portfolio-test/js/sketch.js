let canvas;
let xPos = 70;
let yPos = 80;
let easing = 0.04;


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -2);
    // background(209, 98, 154);
}

function windowResize() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    // clear();
    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    drawThing(xPos, yPos);
}

function mouseMoved() {
    
    // drawThing(mouseX, mouseY);
    // drawThing(mouseY/3, mouseX/2);
}

function mouseClicked() {
    background(70, 59, 84);
}

function drawThing(_x, _y) {

    // background(69, 59, 84, 20);
    strokeWeight(0);
    fill(random(50, 200), random(100, 150), random(200, 255));
    // ellipse(mouseX, mouseY, 30, 30);
    triangle(_x - random(0, 20), _y - (-10, 10), _x + random(-5, 5), _y + random(-15, 15), _x + random(5, 25), _y - random(-10, 15));
}