// Draw!
renderer.render(scene, camera);

let frame = 0;

function update () {
    // Draw!
    renderer.render(scene, camera);
    // shapes.position.y = Math.sin(frame) * (window.innerHeight / 8);
    // frame += 0.01;

    // ORBITAL CONTROLS
    // controls.update();

    // Schedule the next frame.
    requestAnimationFrame(update);
}

// Schedule the first frame.
requestAnimationFrame(update);