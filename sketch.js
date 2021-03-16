//Codigo: Mudança de variação de cores da imagem do maior jogador de todos os tempos: Ronaldinho Gaúcho - R10

let img;
let palette;
let y = 0;

function preload() {
  img = loadImage('ronaldinho.jpg');
}

function setup() {
  createCanvas(600, 600);
  img.resize(width, height);

 
  palette = ['#000000', '#1c1c13',
   '#030a0d', '#f4a261',
   '#e76f51'
  ];
   

  image(img, 0, 0);
}

function draw() {
  for (let x = 0; x < width; x++) {
    const imgColor = img.get(x, y);
    const paletteColor = getPaletteColor(imgColor);
    stroke(paletteColor);
    point(x, y);
  }

  y++;
  if (y >= height) {
    noLoop();
  }
}

function getPaletteColor(imgColor) {
  const imgR = red(imgColor);
  const imgG = green(imgColor);
  const imgB = blue(imgColor);

  let minDistance = 5555;
  let targetColor;

  for (const c of palette) {
    const paletteR = red(c);
    const paletteG = green(c);
    const paletteB = blue(c);

    const colorDistance =
      dist(imgR, imgG, imgB,
           paletteR, paletteG, paletteB);

    if (colorDistance < minDistance) {
      targetColor = c;
      minDistance = colorDistance;
    }
  }

  return targetColor;
}