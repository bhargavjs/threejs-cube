// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000)

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 5

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//controls
const controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

// Geometry (Cube)
const geometry = new THREE.BoxGeometry()

// Material
const material = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  metalness: 0.5,
  roughness: 0.5
})

// Mesh
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// Light
const light = new THREE.PointLight(0xffffff, 1)
light.position.set(5, 5, 5)
scene.add(light)

// Ambient light (soft lighting)
const ambientLight = new THREE.AmbientLight(0x404040)
scene.add(ambientLight)

// Animation loop
function animate() {
  requestAnimationFrame(animate)

  // Rotate cube
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  // controls
  controls.update()

  renderer.render(scene, camera)
}
animate()

// Handle window resize
window.addEventListener('resize', () => {
  const width = window.innerWidth
  const height = window.innerHeight

  renderer.setSize(width, height)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
})
