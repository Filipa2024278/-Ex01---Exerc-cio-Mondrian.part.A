//Reprodução estática 
// Canvas final: 890 × 784 

const W = 890, H = 784;
const sx = W / 800, sy = H / 784;
const paper = [239, 239, 232];
const red = [238, 36, 15];
const blue = [37, 38, 133];
const yellow = [255, 218, 0];
const black = [8, 8, 8];
const lineW = 17;

function setup() {
  createCanvas(W, H);
  pixelDensity(1);
  noLoop();
}

function draw() {
  background(...paper);
  noStroke();

  // Top row
  fill(...red);
  rect(0, 0, 364*sx, 312*sy);
  fill(...paper);
  rect(374*sx, 0, W-374*sx, 312*sy);

  // Middle row
  rect(0, 329*sy, 360*sx, 174*sy);
  rect(373*sx, 329*sy, W-373*sx, 174*sy);

  // Bottom row
  fill(...yellow);
  rect(0, 520*sy, 77*sx, H-520*sy);

  fill(...paper);
  rect(87*sx, 520*sy, (366-87)*sx, H-520*sy);
  rect(624*sx, 520*sy, W-624*sx, H-520*sy);

  fill(...blue);
  rect(373*sx, 520*sy, (616-373)*sx, (752-520)*sy);

  // All structural black lines. The blue block is explicitly bounded on
  // the left, right and bottom, matching the supplied reference.
  stroke(...black);
  strokeWeight(lineW);
  strokeCap(SQUARE);

  line(0, 320*sy, W, 320*sy);                 // top divider
  line(368*sx, 0, 368*sx, 320*sy);            // upper vertical
  line(366*sx, 320*sy, 366*sx, 512*sy);       // middle vertical
  line(0, 512*sy, W, 512*sy);                 // divider above bottom row
  line(82*sx, 512*sy, 82*sx, H);              // yellow block right edge
  line(366*sx, 512*sy, 366*sx, H);            // blue block left divider
  line(616*sx, 512*sy, 616*sx, 752*sy);       // blue block right edge
  line(366*sx, 752*sy, 616*sx, 752*sy);       // blue block bottom edge

  // Subtle fixed surface texture, kept away from structural linework.
  randomSeed(17);
  noStroke();
  for (let i = 0; i < 1600; i++) {
    const x = random(W), y = random(H);
    if (abs(y-320*sy) < 10 || abs(y-512*sy) < 10 ||
        abs(x-368*sx) < 10 || abs(x-366*sx) < 10 ||
        abs(x-616*sx) < 10 || abs(x-82*sx) < 10 ||
        abs(y-752*sy) < 10) continue;
    fill(80, 75, 65, random(2, 7));
    rect(x, y, random(1, 2.5), 0.6);
  }

  // Redraw crisp linework on top of texture.
  stroke(...black);
  strokeWeight(lineW);
  strokeCap(SQUARE);
  line(0, 320*sy, W, 320*sy);
  line(368*sx, 0, 368*sx, 320*sy);
  line(366*sx, 320*sy, 366*sx, 512*sy);
  line(0, 512*sy, W, 512*sy);
  line(82*sx, 512*sy, 82*sx, H);
  line(366*sx, 512*sy, 366*sx, H);
  line(616*sx, 512*sy, 616*sx, 752*sy);
  line(366*sx, 752*sy, 616*sx, 752*sy);
}
