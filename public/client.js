import * as THREE from '/build/three.module.js';
import {OrbitControls} from '/jsm/controls/OrbitControls.js';
import Stats from '/jsm/libs/stats.module.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.x = 0;
camera.position.y = 3;
camera.position.z = 6;


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

var building = function(){

    var textureLoader = new THREE.TextureLoader();
    var wallIMG = textureLoader.load( 'wall.png' );
    var floorIMG = textureLoader.load( 'floor.png' );

    var CoordinatX = 0;
    var CoordinatY = 0;
    var CoordinaZ = 0;

    var wall = function(){
        const geometry = new THREE.BoxGeometry(15, 6, .5);
        
        const cubeMaterials = [ 
            new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
            new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
            new THREE.MeshBasicMaterial({ map: wallIMG }), 
            new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
        ]; 
        
        const cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
        const cube = new THREE.Mesh(geometry, cubeMaterial);
        scene.add(cube);
        
        cube.position.x = (CoordinatX + 0);
        cube.position.y = (CoordinatY + 1);
        cube.position.z = (CoordinaZ - .5);
    };

    var wallLeft = function(){
        const geometry = new THREE.BoxGeometry(.5, 6, 7);
        
        const cubeMaterials = [ 
            new THREE.MeshBasicMaterial({ map: wallIMG }), 
            new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
            new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
            new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
        ]; 
        
        const cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
        const cube = new THREE.Mesh(geometry, cubeMaterial);
        scene.add(cube);
        
        cube.position.x = (CoordinatX - 7.25);
        cube.position.y = (CoordinatY + 1);
        cube.position.z = (CoordinaZ + 3);
    };

    var flour = function(){
        const geometry = new THREE.BoxGeometry(15, .5, 7);

        const cubeMaterials = [ 
            new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
            new THREE.MeshBasicMaterial({ map: floorIMG }),
            new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
            new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
            new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
        ]; 
            
        const cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
        const cube = new THREE.Mesh(geometry, cubeMaterial);
        scene.add(cube);
        
        cube.position.x = (CoordinatX + 0);
        cube.position.y = (CoordinatY - 1.75);
        cube.position.z = (CoordinaZ + 3);
    };

    wall();
    wallLeft();
    flour();
};

var mounter1 = function(){

var textureLoader = new THREE.TextureLoader();
var wallIMG = textureLoader.load( 'wall.jpg' );
var kommunIMG = textureLoader.load( 'kommun.jpg' );
var logoIMG = textureLoader.load( 'logo.png' );
var infoIMG = textureLoader.load( 'info.png' );
var galleriIMG = textureLoader.load( 'galleri1.png' );

var CoordinatX = -3;
var CoordinatY = 0;
var CoordinaZ = 0;

var wall = function(){
const geometry = new THREE.BoxGeometry(5 ,3 ,.5);

const cubeMaterials = [ 
    new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
    new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
    new THREE.MeshBasicMaterial({ map: wallIMG }), 
    new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
]; 

const cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
const cube = new THREE.Mesh(geometry, cubeMaterial);
scene.add(cube);

cube.position.x = (CoordinatX + 0);
cube.position.y = (CoordinatY + 0);
cube.position.z = (CoordinaZ + 0);
};

var logo = function(){
    const geometry = new THREE.BoxGeometry(3.5 ,.5 ,.1);
    
    const cubeMaterials = [ 
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: logoIMG }), 
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
    ]; 
    
    const cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
    const cube = new THREE.Mesh(geometry, cubeMaterial);
   
    cube.position.x = (CoordinatX + .25);
    cube.position.y = (CoordinatY + 1);
    cube.position.z = (CoordinaZ + .3);

    scene.add(cube);
};

var kommun = function(){
    const geometry = new THREE.BoxGeometry(.5, .5 ,.1);
    
    const cubeMaterials = [ 
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: kommunIMG }), 
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}), 
    ]; 
    
    const cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
    const cube = new THREE.Mesh(geometry, cubeMaterial);
    
    cube.position.x = (CoordinatX -1.75);
    cube.position.y = 1;
    cube.position.z = .3;

    cube.position.x = (CoordinatX -1.75);
    cube.position.y = (CoordinatY + 1);
    cube.position.z = (CoordinaZ + .3);

    scene.add(cube);
};

var galleri = function(){
    const geometry = new THREE.BoxGeometry(1.5 ,1 ,.1);
    
    const cubeMaterials = [ 
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}), 
        new THREE.MeshBasicMaterial({ map: galleriIMG }), 
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
    ]; 
    
    const cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
    const cube = new THREE.Mesh(geometry, cubeMaterial);

    cube.position.x = (CoordinatX - 1.25);
    cube.position.y = (CoordinatY + 0);
    cube.position.z = (CoordinaZ + .3);

    scene.add(cube);
    
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
    }, false);
};

var info = function(){
    const geometry = new THREE.BoxGeometry(1.5 ,1 ,.1);
    
    const cubeMaterials = [ 
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: infoIMG }), 
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
    ]; 
    
    const cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
    const cube = new THREE.Mesh(geometry, cubeMaterial);
    
    cube.position.x = (CoordinatX + 1.25);
    cube.position.y = (CoordinatY + 0);
    cube.position.z = (CoordinaZ + .3);

    scene.add(cube);
    
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
    }, false);
};
wall();
logo();
kommun();
galleri();
info();
};

var mounter2 = function(){

    var textureLoader = new THREE.TextureLoader();
    var wallIMG = textureLoader.load( 'wall.jpg' );
    var kommunIMG = textureLoader.load( 'kommun.jpg' );
    var logoIMG = textureLoader.load( 'logo.png' );
    var infoIMG = textureLoader.load( 'info.png' );
    var galleriIMG = textureLoader.load( 'galleri1.png' );
    
    var CoordinatX = 3;
    var CoordinatY = 0;
    var CoordinaZ = 0;
    
    var wall = function(){
    const geometry = new THREE.BoxGeometry(5 ,3 ,.5);
    
    const cubeMaterials = [ 
        new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
        new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
        new THREE.MeshBasicMaterial({ map: wallIMG }), 
        new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
    ]; 
    
    const cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
    const cube = new THREE.Mesh(geometry, cubeMaterial);
    scene.add(cube);
    
    cube.position.x = (CoordinatX + 0);
    cube.position.y = (CoordinatY + 0);
    cube.position.z = (CoordinaZ + 0);
    };
    
    var logo = function(){
        const geometry = new THREE.BoxGeometry(3.5 ,.5 ,.1);
        
        const cubeMaterials = [ 
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({ map: logoIMG }), 
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        ]; 
        
        const cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
        const cube = new THREE.Mesh(geometry, cubeMaterial);
       
        cube.position.x = (CoordinatX + .25);
        cube.position.y = (CoordinatY + 1);
        cube.position.z = (CoordinaZ + .3);
    
        scene.add(cube);
    };
    
    var kommun = function(){
        const geometry = new THREE.BoxGeometry(.5, .5 ,.1);
        
        const cubeMaterials = [ 
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({ map: kommunIMG }), 
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}), 
        ]; 
        
        const cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
        const cube = new THREE.Mesh(geometry, cubeMaterial);
    
        cube.position.x = (CoordinatX -1.75);
        cube.position.y = (CoordinatY + 1);
        cube.position.z = (CoordinaZ + .3);
    
        scene.add(cube);
    };
    
    var galleri = function(){
        const geometry = new THREE.BoxGeometry(1.5 ,1 ,.1);
        
        const cubeMaterials = [ 
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}), 
            new THREE.MeshBasicMaterial({ map: galleriIMG }), 
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        ]; 
        
        const cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
        const cube = new THREE.Mesh(geometry, cubeMaterial);
    
        cube.position.x = (CoordinatX - 1.25);
        cube.position.y = (CoordinatY + 0);
        cube.position.z = (CoordinaZ + .3);
    
        scene.add(cube);
        
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            render();
        }, false);
    };
    
    var info = function(){
        const geometry = new THREE.BoxGeometry(1.5 ,1 ,.1);
        
        const cubeMaterials = [ 
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({ map: infoIMG }), 
            new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        ]; 
        
        const cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
        const cube = new THREE.Mesh(geometry, cubeMaterial);
        
        cube.position.x = (CoordinatX + 1.25);
        cube.position.y = (CoordinatY + 0);
        cube.position.z = (CoordinaZ + .3);
    
        scene.add(cube);
        
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            render();
        }, false);
    };
    wall();
    logo();
    kommun();
    galleri();
    info();
};

var mounter3 = function(){
    //texures / image used
    var textureLoader = new THREE.TextureLoader();
    var wallIMG = textureLoader.load( 'wall.jpg' );
    var logoIMG = textureLoader.load( 'logo.png' );
    var kommunIMG = textureLoader.load( 'kommun.jpg' );
    var galleriIMG = textureLoader.load( 'galleri1.png' );
    var infoIMG = textureLoader.load( 'info.png' );
    
    //cordinates to move the stand
    var CoordinatX = -4;
    var CoordinatY = 0;
    var CoordinaZ = -6.75;

    //size for for the stand
    const wall = new THREE.BoxGeometry( 5 ,3 ,.5 );
    const logo = new THREE.BoxGeometry( 3.5 ,.5 ,.1 );
    const kommun = new THREE.BoxGeometry( .5, .5 ,.1 );
    const galleri = new THREE.BoxGeometry(1.5 ,1 ,.1);
    const info = new THREE.BoxGeometry(1.5 ,1 ,.1);

    //texture for the diferent pices of the stand
    const wallmaterial = [ 
        new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
        new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
        new THREE.MeshBasicMaterial({ map: wallIMG }), 
        new THREE.MeshBasicMaterial({color:0x808080, transparent:true, side: THREE.DoubleSide}), 
    ]; 
    const logomaterial = [ 
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: logoIMG }), 
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
    ]; 
    const kommunmaterial = [ 
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: kommunIMG }), 
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}), 
    ]; 
    const gallerimaterial = [ 
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}), 
        new THREE.MeshBasicMaterial({ map: galleriIMG }), 
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
    ]; 
    const material = [ 
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({ map: infoIMG }), 
        new THREE.MeshBasicMaterial({color:0xFFA500, side: THREE.DoubleSide}),
    ]; 

    //Stand peaces position and material
    const cubeA = new THREE.Mesh( wall, wallmaterial );
    cubeA.position.set( (CoordinatX - 0), (CoordinatY - 0), (CoordinaZ - 0) );
    
    const cubeB = new THREE.Mesh( logo, logomaterial );
    cubeB.position.set( (CoordinatX + .25), (CoordinatY + 1) , (CoordinaZ + .3) );
    
    const cubeC = new THREE.Mesh( kommun, kommunmaterial );
    cubeC.position.set ( (CoordinatX - 1.75) , (CoordinatY + 1) , (CoordinaZ + .3) );

    const cubeD = new THREE.Mesh( galleri, gallerimaterial );
    cubeD.position.set( (CoordinatX - 1.25) , (CoordinatY + 0) , (CoordinaZ + .3) );

    const cubeE = new THREE.Mesh( info, material );
    cubeE.position.set( (CoordinatX + 1.25) , (CoordinatY + 0) , (CoordinaZ + .3) );

    //group the peaces of the stand
    const group = new THREE.Group();
    group.add( cubeA );
    group.add( cubeB );
    group.add( cubeC );
    group.add( cubeD );
    group.add( cubeE );

    //rotation
    group.rotateY( Math.PI/ 2);

    //add scean
    scene.add( group );

};

mounter3();

building();
mounter1();
mounter2();

const stats = Stats();
document.body.appendChild(stats.dom);

var animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    render();
    stats.update();
};

function render() {
    renderer.render(scene, camera);
}

animate();