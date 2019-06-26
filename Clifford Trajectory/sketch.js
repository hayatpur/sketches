// Devamardeep Hayatpur
// Plots the clifford attractor over time while incrementing its c, d parameters

// Clifford parameters
let a = 1.2,
    b = 1.7,
    c = 0.5,
    d = 0.5;

const n = 5000, // Number of sample points
      zoom = 1000,
      frames = 600;

let points = [];

function setup() {
    createCanvas(window.innerWidth, window.innerWidth);

    points = [...Array(n)].map(p => ({ x: random(), y: random() }));

    colorMode(HSB, 1.0);
    noStroke();
    background(0.05);
}

function draw() {
    if (frameCount > frames) {
        noLoop();
        return;
    }

    translate(width / 2, height / 2);
    points = points.map(p => clifford(p));

    // Update paramaters
    c += 0.001;
    d += 0.001;
}

function clifford(p) {
    // Compute the new point
    const x = Math.sin(a * p.y) + c * Math.cos(a * p.x);
    const y = Math.sin(b * p.x) + d * Math.cos(b * p.y);

    // Draw it
    const hue = (frameCount % 1000) / 1000;
    stroke(hue, 0.8, 1, 0.02);
    point(zoom * p.x, 0.8 * zoom * p.y);

    // Return it
    return { x: x, y: y };
}