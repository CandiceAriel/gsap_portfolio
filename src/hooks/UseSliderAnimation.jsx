import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { useEffect } from 'react';
import gsap from 'gsap';

const useSliderAnimation = (groupRef) => {
  const scroll = useScroll();

  // 1. Initial Entrance Animation (Optional)
  useEffect(() => {
    if (groupRef.current) {
      gsap.from(groupRef.current.rotation, {
        y: Math.PI,
        duration: 2,
        ease: "power3.out",
      });
    }
  }, [groupRef]);

  // 2. Scroll-driven Rotation
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Calculate the target rotation based on scroll (0 to 1)
    // We multiply by Math.PI * 2 for one full circle
    const targetRotation = scroll.offset * Math.PI * 2;

    // Use GSAP's interpolate (lerp) to smooth the movement
    // This prevents the "jittery" feel of mouse wheels
    groupRef.current.rotation.y = gsap.utils.interpolate(
      groupRef.current.rotation.y,
      targetRotation,
      0.1 // The "tension" - lower is smoother/heavier
    );
    
    // Optional: Add a subtle floating bounce
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  // You don't need to return anything unless you want to pass 
  // calculated values back to the component
  return null;
}

export default useSliderAnimation;