// Devamardeep Hayatpur
// Plots the clifford attractor over time while incrementing its c, d parameters

const n = 15000,
      zoom = 1500;

function setup() {
    createCanvas(4096, 4096);

    colorMode(HSB, 1.0);
    background(0.05);
    noLoop();
}

function draw() {
    translate(width / 2, height / 2);

    for (let i = 1; i <= n; i++) {
        const theta = TWO_PI / n * (i - 1);

        const x = zoom * cos(theta),
              y = zoom * sin(theta);

        const hue = (i % n) / (n - 1);
        const alpha = 0.1 * (i / n);
        stroke(hue, 1.0, 1.0, alpha);        

        for (let j = 1; j <= n; j++) {
            if (j % i == 0) {
                const j_theta = TWO_PI / n * (j - 1) + HALF_PI;
                line(x, y, zoom * cos(j_theta), zoom * sin(j_theta));
            }
        }
    }
}