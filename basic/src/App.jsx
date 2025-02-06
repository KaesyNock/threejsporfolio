import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DirectionalLight } from "three";

const App = ()  => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center" }}>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />

      <DirectionalLight position={[1, 1, 1]} intensity={1.5} color={0x9CDBA6}/>
      <color attach="background" args={['#F0F0F0']} />
      <h1>Hello World!</h1>
    </Canvas>
  )
}

export default App;