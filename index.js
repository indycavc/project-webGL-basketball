//2440094472 - Vivianit Indyca Vica
import * as THREE from './three.js-master/build/three.module.js'

var scene, camera, renderer

const init = () => {
    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(
        45, window.innerWidth / window.innerHeight,
        0.1, 1000
    )
    camera.position.set(-70, 50, -40)
    camera.lookAt(0, 0, 0)

    renderer = new THREE.WebGLRenderer({
        antialias: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    renderer.shadowMap.enabled = true
}

const useTexture = (Image) => {
    const loader = new THREE.TextureLoader()
    const texture = loader.load(Image)

    return texture
}

const createPointLight = () => {
    const pointLight = new THREE.PointLight(
        "#ffffff", 0.8, 1000
    )
    pointLight.castShadow = true

    return pointLight
}

const createBoxGeometry = () => {
    const boxGeometry = new THREE.BoxGeometry(40, 40)
    const texture = useTexture('./assets/floor.jpg')
    const boxMaterial = new THREE.MeshPhongMaterial({
        color: "#ffffff",
        map: texture
    })
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)

    boxMesh.receiveShadow = true
    return boxMesh
}

const createCylinderGeometry = () => {
    const cylinderGeometry = new THREE.CylinderGeometry(
        1, 1, 23, 
        64, 64
    )
    const cylinderMaterial = new THREE.MeshPhongMaterial({
        color: "#423f38"
    })
    const cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial)

    cylinderMesh.castShadow = true
    return cylinderMesh
}

const createBackboard = () => {
    const backboardGeometry = new THREE.BoxGeometry(
        14, 10, 1.5
    )
    const backboardMaterial = new THREE.MeshPhongMaterial({
        color: "#ffffff"
    })
    const backboardMesh = new THREE.Mesh(backboardGeometry, backboardMaterial)

    backboardMesh.castShadow = true
    return backboardMesh
}

const createRimStand = () => {
    const rimGeometry = new THREE.BoxGeometry(
        2, 2, 1.5
    )
    const rimMaterial = new THREE.MeshPhongMaterial({
        color: "#ff8b17"
    })
    const rimMesh = new THREE.Mesh(rimGeometry, rimMaterial)

    rimMesh.castShadow = true
    return rimMesh
}

const createRim = () => {
    const torusGeometry = new THREE.TorusGeometry(
        4, 0.5, 30, 200
    )
    const torusMaterial = new THREE.MeshPhongMaterial({
        color: "#ff8b17"
    })
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial)

    torusMesh.castShadow = true
    return torusMesh
}

const createSphere = () => {
    const sphereGeometry = new THREE.SphereGeometry(
        3, 32, 16
    )
    const texture = useTexture('./assets/basketball.jpg')
    const sphereMaterial = new THREE.MeshPhongMaterial({
        color: "#ffffff",
        map: texture
    })
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial)

    sphereMesh.castShadow = true
    return sphereMesh
}

window.onload = () => {
    init()

    let pointLight = createPointLight()
    pointLight.position.x = -20
    pointLight.position.y = 30
    pointLight.position.z = 10

    let boxGeometry = createBoxGeometry()
    boxGeometry.position.x = -10
    boxGeometry.position.y = -4
    boxGeometry.rotateX(4.7)

    let cylinderGeometry = createCylinderGeometry()
    cylinderGeometry.position.y = 7

    let backboard = createBackboard()
    backboard.position.x = -1.6
    backboard.position.y = 20
    backboard.rotateY(7.8)

    let rimStand = createRimStand()
    rimStand.position.x = -3
    rimStand.position.y = 17
    rimStand.rotateY(7.8)

    let rim = createRim()
    rim.position.x = -7
    rim.position.y = 17
    rim.rotateX(14.1)
    rim.rotateZ(1)

    let basketball = createSphere()
    basketball.position.x = -10
    basketball.position.y = -0.5

    scene.add(pointLight)
    scene.add(boxGeometry)
    scene.add(cylinderGeometry)
    scene.add(backboard)
    scene.add(rimStand)
    scene.add(rim)
    scene.add(basketball)

    const render = () => {
        requestAnimationFrame(render)
        renderer.render(scene, camera)
    }
    render()
}