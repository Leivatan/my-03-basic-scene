// JavaScript source

// Canvas
const canvas = document.querySelector('canvas.webgl')

// sizes
// this sections creats the size of the black box
const sizes = {
    width: 800,
    height: 600

}

// scene
// THREE.---- is calling for the class from three.min.js
const scene = new THREE.Scene()

// object
//createing a Red cube
// geometry,material and mesh is declared varibles
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
    color: '#ff0000'
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)



// camera
// x is lft and right y is up and down z is in and out of monitor
// this section adds the camera's lens and location
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)