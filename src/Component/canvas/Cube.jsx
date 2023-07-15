import React, { useRef , Suspense  } from "react";
import { OrbitControls,PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame , Canvas } from "@react-three/fiber";


const MyCube = () =>{
    const textRef = useRef();
    useFrame(
      (state) =>
        (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
    );
    return(
        <mesh>
        <boxGeometry />
        <meshStandardMaterial>
          <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <color attach="background" args={["#dc9dcd"]} />
            <Text ref={textRef} fontSize={3} color="#555">
              Dice
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </mesh>
    )
}

const Cube = () => {
    
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 1]} />
       <MyCube />
      <OrbitControls enableZoom={false} autoRotate />
    </Suspense>
  </Canvas>
  )
}

export default Cube
