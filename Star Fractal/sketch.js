// Devamardeep Hayatpur
// Variation of C code by Paul Borke
http://paulbourke.net/fractals/star/

const sides = 5,          // Number of polyon sides
      convergence = 3.5,  // How fast it converges 
      iters = 2000,       // Iterations per frame
      frames = 2500,      // Maximum frames before stopping
      zoom = 120,
      a = new Float32Array(sides * 2 + 1),
      b = new Float32Array(sides * 2 + 1);

let x = 1, y = 1;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    for (let i = 0; i < sides; i++) {
        a[2 * i] = cos(TWO_PI * (i + 1) / sides);
        b[2 * i] = sin(TWO_PI * (i + 1) / sides);

        a[2 * i + 1] = 0.5 * (cos(TWO_PI * (i + 1) / sides) + cos(TWO_PI * i / sides));
        b[2 * i + 1] = 0.5 * (sin(TWO_PI * (i + 1) / sides) + sin(TWO_PI * i / sides));
    }

    colorMode(HSB, 1.0);
    stroke(0.4, 0.8, 1, 0.02);
    background(0.05);
}

function draw() {
    if (frameCount > frames) {
        noLoop();
        return;
    }

    translate(width / 2, height / 2);

    for (let _ = 0; _ < iters; _++) {
        const c = round(random(2 * sides));

        const x1 = x / (x ** 2 + y ** 2) / convergence + a[c],
              y1 = y / (x ** 2 + y ** 2) / convergence + b[c];

        x = x1 / (x1 ** 2 + y1 ** 2);
        y = y1 / (x1 ** 2 + y1 ** 2);
        point(x * zoom, y * zoom);
    }
}