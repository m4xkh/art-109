let canvas;



function setup() {
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -2);
    background(209, 98, 154);
}

function draw() {
    strokeWeight(0);
    fill(random(190, 200),random(100, 150),random(200, 255));
    ellipse(mouseX, mouseY, 30, 30);
}