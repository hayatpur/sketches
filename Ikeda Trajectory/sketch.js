const u = 0.92,
      iters = 400,
      frames = 10000,
      zoom = 70,
      offset = {x: -210, y: -120};

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB, 1.0);
    background(0.05);
    stroke(1, 0.01);
}

function draw() {
    if (frameCount > frames) return;
    
    translate(width / 2 + offset.x, height / 2 + offset.y);

    // Pick a random point
    const p = {x: random(0, width), y: random(0, height)};

    // Plot its trajectory on each iteration
    for (let i = 0; i < iters; i++) {
        const t = 0.4 - 6 / (1 + p.x ** 2 + p.y ** 2);

        const x1 = u * (p.x * cos(t) - p.y * sin(t)) + 1,
              y1 = u * (p.x * sin(t) + p.y * cos(t));

        line(zoom * p.x, zoom * p.y, zoom * x1, zoom * y1);

        p.x = x1;
        p.y = y1;
    }
}