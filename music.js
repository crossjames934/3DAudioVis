let tune;
let tunePlaying = true;
let fft;
let yPositions = [];

function preload() {
    tune = loadSound('tune.mp3');
}

function setup() {
    let cnv = createCanvas(0, 0);
    cnv.parent = "invisible";
    fft = new p5.FFT(0.8, segments);
    tune.play();
}

function draw() {
    let spectrum = fft.analyze();
    for (let i = 0; i < spectrum.length; i++) {
        let cnvheight =  window.innerHeight * 0.22;
        yPositions[i] = map(spectrum[i], 0, 255, -cnvheight, cnvheight);
    }
}

function keyPressed() {
    if (keyCode === 13 || keyCode === 32) {
        tunePlaying ? tune.pause() : tune.play();
        tunePlaying = !tunePlaying;
    }
}
