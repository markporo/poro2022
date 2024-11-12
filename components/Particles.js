import { particle, particleContainer } from '../styles/components/Particles.module.scss'

const Particles = () => {
  const particlesArray = new Array(50).fill(null);

  return (
    <div className={particleContainer}>
      {particlesArray.map((_, index) => (
        <div key={index} className={particle}></div>
      ))}
    </div>
  );
}

export default Particles;