// canvas element
const canvas = document.getElementById("renderCanvas");
// BABYLON 3D engine
const engine = new BABYLON.Engine(canvas, true);

// playground code here
const createScene = function () {
    const scene = new BABYLON.Scene(engine);
    // import box
    // BABYLON.ImportMeshAsync("https://assets.babylonjs.com/meshes/box.babylon");
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    // box 1
    const box1 = BABYLON.MeshBuilder.CreateBox("box", {
        width: 2,
        height: 1.5,
        depth: 3
    });
    box1.position.y = 0.75;

    // roof 1
    const roof1 = BABYLON.MeshBuilder.CreateCylinder("roof1", {
        diameter: 4,
        height: 1,
        tessellation: 3
    });
    roof1.rotation = new BABYLON.Vector3(0, Math.PI / 2, Math.PI / 2);
    roof1.position.y = 2.25;
    roof1.scaling.y = 3.25;

    // box 2
    const box2 = BABYLON.MeshBuilder.CreateBox("box2", {});
    box2.scaling = new BABYLON.Vector3(2, 1.5, 3);
    box2.position = new BABYLON.Vector3(-4, 0.75, 0);

    // roof 2
    const roof2 = BABYLON.MeshBuilder.CreateCylinder("roof2", {
        diameter: 4,
        height: 1,
        tessellation: 3
    });
    roof2.rotation = new BABYLON.Vector3(0, Math.PI / 2, Math.PI / 2);
    roof2.position = new BABYLON.Vector3(-4, 2.25, 0);
    roof2.scaling.y = 3.25;

    // box 3
    const box3 = BABYLON.MeshBuilder.CreateBox("box3", {});
    box3.scaling = new BABYLON.Vector3(2, 1.5, 3);
    box3.position = new BABYLON.Vector3(4, 0.75, 0);

    // roof 3
    const roof3 = BABYLON.MeshBuilder.CreateCylinder("roof2", {
        diameter: 4,
        height: 1,
        tessellation: 3
    });
    roof3.rotation = new BABYLON.Vector3(0, Math.PI / 2, Math.PI / 2);
    roof3.position = new BABYLON.Vector3(4, 2.25, 0);
    roof3.scaling.y = 3.25;

    // add ground
    const ground = BABYLON.MeshBuilder.CreateGround("ground", {
        width: 15,
        height: 10
    });

    // add grass
    const groundMat = new BABYLON.StandardMaterial("groundMat");
    groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);
    ground.material = groundMat; // place the material property of the ground

    // Textures
    const roofMat = new BABYLON.StandardMaterial("roofMat");
    roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg", scene);
    const boxMat = new BABYLON.StandardMaterial("boxMat");
    boxMat.diffuseTexture = new BABYLON.Texture("https://babylonjs-playground.com/textures/floor.png");

    // Add textures to boxes
    box1.material = boxMat;
    box2.material = boxMat;
    box3.material = boxMat;

    // Add textures to roofs
    roof1.material = roofMat;
    roof2.material = roofMat;
    roof3.material = roofMat;

    
    // add sound
    /* async function initAudio() {
        const audioEngine = await BABYLON.CreateAudioEngineAsync();
        await audioEngine.unlockAsync();

        // play sound every 3 seconds
        const sound = await BABYLON.CreateSoundAsync("bounce", "sounds/bounce.wav");
        setInterval(() => {
            sound.play();
        }, 3000);
    }

    initAudio(); */



    return scene;
};

// end of playground code
const scene = createScene();  // call createScene function

// render loop to repeatedly render the scene
engine.runRenderLoop(function () {
    scene.render();
});

// watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});