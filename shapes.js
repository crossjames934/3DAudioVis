// Set up the shapes vars
const SIZE = 5;

// Create a new mesh with
// shapes geometry - we will cover
// the shapeColor next!
let shapes = [];

for (let i = 0; i < segments; i++) {
    let newColor = new THREE.Color(0x000000);
    newColor.setRGB(i/segments, i/segments/2, 1);
    let shapeColor =
        new THREE.MeshLambertMaterial(
            {
                color: newColor
            });

    shapes.push(new THREE.Mesh(
        new THREE.BoxGeometry(
            SIZE,
            SIZE,
            SIZE),

        shapeColor));
}

// Move the Sphere back in Z so we
// can see it.

const DISTANCE = -500;

for (let i = 0; i < shapes.length; i++) {
    shapes[i].position.z = DISTANCE;
    shapes[i].position.x = i * SIZE * 2 - WIDTH * 0.22;
    scene.add(shapes[i]);
}

const TARGET = new THREE.Vector3(0, 0, DISTANCE);

// ORBITAL CONTROLS _ TARGET
controls.target = TARGET;

// Finally, add the shapes to the scene.

// create a point light
const myLight =
    new THREE.AmbientLight(0xFFFFFF);

// set its position
myLight.position.x = 10;
myLight.position.y = 0;
myLight.position.z = 0;

// myLight.target = TARGET;

// add to the scene
scene.add(myLight);