// Set up the shapes vars
const SIZE = 10;

// create the shapes's material
const sphereMaterial =
    new THREE.MeshLambertMaterial(
        {
            color: 0xCC0000
        });

// Create a new mesh with
// shapes geometry - we will cover
// the sphereMaterial next!
let shapes = [];

for (let i = 0; i < segments; i++) {
    shapes.push(new THREE.Mesh(
        new THREE.BoxGeometry(
            SIZE,
            SIZE,
            SIZE),

        sphereMaterial));
}

// Move the Sphere back in Z so we
// can see it.

for (let i = 0; i < shapes.length; i++) {
    shapes[i].position.z = -300;
    shapes[i].position.x = i * SIZE;
    scene.add(shapes[i]);
}

// ORBITAL CONTROLS _ TARGET
// controls.target = new THREE.Vector3(0, 0, -300);

// Finally, add the shapes to the scene.

// create a point light
const pointLight =
    new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add to the scene
scene.add(pointLight);