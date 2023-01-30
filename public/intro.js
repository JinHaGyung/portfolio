import gsap from 'gsap';
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import {OrbitControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';

const gui = new dat.GUI()
const world = {
    plane:{
        width:18,
        height:17,
        widthSegments:21,
        heightSegments:7
    },
    camera:{
        zposition:7
    }
}
gui.add(world.plane,"width",1,20).onChange(generatePlane)
gui.add(world.plane,"height",1,20).onChange(generatePlane)
gui.add(world.plane,"widthSegments",1,50).onChange(generatePlane)
gui.add(world.plane,"heightSegments",1,50).onChange(generatePlane)

gui.add(world.camera,"zposition",1,20).onChange(()=>{
    camera.position.z = world.camera.zposition;
})

function generatePlane(){
    planeMesh.geometry.dispose()
    planeMesh.geometry = new THREE.PlaneGeometry(
        world.plane.width,
        world.plane.height,
        world.plane.widthSegments,
        world.plane.heightSegments);
    const{array} = planeMesh.geometry.attributes.position

    for(let i = 0; i< array.length; i += 3){
        const x = array[i]
        const y = array[i+1]
        const z = array[i+2]
        array[i + 2] = z + Math.random()
    }
    const colors = []
    for(let i = 0; i<planeMesh.geometry.attributes.position.count;i++){
    colors.push(0,0.2,0.5)
    }

    planeMesh.geometry.setAttribute('color', 
    new THREE.BufferAttribute(new Float32Array(colors),3))
}
const raycaster = new THREE.Raycaster()

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth/innerWidth,
    0.1,
    1000)

const renderer = new THREE.WebGLRenderer()

renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild(renderer.domElement)

new OrbitControls(camera,renderer.domElement )
camera.position.z = world.camera.zposition

const planegeometry = new THREE.PlaneGeometry(
    world.plane.width,
    world.plane.height,
    world.plane.widthSegments,
    world.plane.heightSegments);

const planematerial = new THREE.MeshPhongMaterial({
    side:THREE.DoubleSide,
    flatShading: THREE.FlatShading,
    vertexColors: true})
const planeMesh = new THREE.Mesh(planegeometry,planematerial)
console.log(planegeometry)
scene.add(planeMesh)

const{array} = planeMesh.geometry.attributes.position
for(let i = 0; i< array.length; i += 3){
    const x = array[i]
    const y = array[i+1]
    const z = array[i+2]
    array[i + 2] = z + Math.random()
}

const colors = []
for(let i = 0; i<planeMesh.geometry.attributes.position.count;i++){
    colors.push(0,0.2,0.5)
}

planeMesh.geometry.setAttribute('color', 
new THREE.BufferAttribute(new Float32Array(colors),3))

const light = new THREE.DirectionalLight(0xffffff,1)
light.position.set(0, 0, 1)
scene.add(light)

const backLight = new THREE.DirectionalLight(0xffffff,1)
backLight.position.set(0, 0, -1)
scene.add(backLight)

const mouse = {
    x: undefined,
    y: undefined
}

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)

    raycaster.setFromCamera(mouse,camera)

    const intersects = raycaster.intersectObject(planeMesh)
    if (intersects.length > 0){
        const {color} = intersects[0].object.geometry.attributes
        
        //a 
        color.setX(intersects[0].face.a,0.1)
        color.setY(intersects[0].face.a,0.5)
        color.setZ(intersects[0].face.a,1)
        
        // b
        color.setX(intersects[0].face.b,0.1)
        color.setY(intersects[0].face.b,0.5)
        color.setZ(intersects[0].face.b,1)

        // c
        color.setX(intersects[0].face.c,0.1)
        color.setY(intersects[0].face.c,0.5)
        color.setZ(intersects[0].face.c,1)
        intersects[0].object.geometry.attributes.color.needsUpdate = true
        
        const initialColor = {
            r:0,
            g:0.2,
            b:0.5
        }

        const hoverColor = {
            r:0.1,
            g:0.5,
            b:1
        }
        gsap.to(hoverColor,{
            r: initialColor.r,
            g: initialColor.g,
            b: initialColor.b,
            onUpdate: () =>{
                 
                //a 
                color.setX(intersects[0].face.a,hoverColor.r)
                color.setY(intersects[0].face.a,hoverColor.g)
                color.setZ(intersects[0].face.a,hoverColor.b)
                
                // b
                color.setX(intersects[0].face.b,hoverColor.r)
                color.setY(intersects[0].face.b,hoverColor.g)
                color.setZ(intersects[0].face.b,hoverColor.b)

                // c
                color.setX(intersects[0].face.c,hoverColor.r)
                color.setY(intersects[0].face.c,hoverColor.g)
                color.setZ(intersects[0].face.c,hoverColor.b)
                color.needsUpdate = true
            }
        })
    }
}

animate()

addEventListener("mousemove",(e)=>{
    mouse.x = (e.clientX / innerWidth) * 2 - 1;
    mouse.y = -(e.clientY /innerHeight) *2 + 1;
})