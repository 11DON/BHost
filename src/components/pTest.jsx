import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";

export default function ParticlesTest() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // load slim version
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "#ffffff" }, // white background so you can see particles
          },
          particles: {
            number: { value: 60 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
            links: { enable: true, color: "#007bff" },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
