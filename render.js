// Draw!
renderer.render(scene, camera);

let frame = 0;

function update () {
    // Draw!
    renderer.render(scene, camera);
    // for (let i = 0; i < shapes.length; i++) {
    //     shapes[i].position.y = Math.sin(frame) * (window.innerHeight / 8);
    // }
    // shapes.position.y = Math.sin(frame) * (window.innerHeight / 8);
    // frame += 0.01;

    // ORBITAL CONTROLS
    controls.update();

    // analyse waveform etc
    // let spectrum = fft.analyze();
    // let waveform = fft.waveform();
    //
    for (let i = 0; i < segments; i++) {
        shapes[i].position.y = yPositions[i];
    }

    // Schedule the next frame.
    requestAnimationFrame(update);
}

// Schedule the first frame.
requestAnimationFrame(update);