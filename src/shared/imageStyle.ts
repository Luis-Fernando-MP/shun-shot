export const borderStyles = {
  SHARP: 0,
  CURVE: 10,
  ROUND: 20
}

export const stacksStyles = {
  OFFSET: (i: number) => `translate(${i * 8}px, ${i * 8}px)`,
  AURORA_FLOW: (i: number) =>
    `translate(${i % 2 === 0 ? i * 7 : -i * 7}px, ${Math.sin(i) * 10}px) 
   scale(${1 + Math.sin(i * 0.5) * 0.05}) 
   rotate(${i % 2 === 0 ? i * 2 : -i * 2}deg)`,
  CASCADE: (i: number) =>
    `translate(${i * 5}px, -${i * 6}px) scale(${1 + i * 0.01}) rotate(${i * 3}deg)`,
  CHAOTIC_MOTION: (i: number) => {
    const translateX = Math.sin(Math.random() * i) * 50
    const translateY = Math.cos(Math.random() * i) * 50
    const rotate = Math.random() * 360 * i
    const scale = 0.5 + Math.random() * 0.5
    return `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`
  },
  FRACTAL_BLOOM: (i: number) =>
    `translate(${Math.sin(i * 6) * i * 10}px, ${Math.cos(i * 6) * i * 10}px) 
   scale(${1 + Math.sin(i * 0.5) * 0.1}) 
   rotate(${i * 18}deg) 
   skew(${Math.sin(i * 0.3) * 10}deg)`,
  GROWING_VINE: (i: number) => `scaleY(${1 + i * 0.05}) rotate(${i * 15}deg)`,
  HELIX: (i: number) =>
    `rotateY(${i * 12}deg) translateY(${i * 12}px) translateZ(${i * 12}px) rotate(${i * 6}deg)`,
  LAYERED: (i: number) => `translate(-${i * 4}px, -${i * 2}px) rotate(-${i}deg)`,
  LAYERED2: (i: number) =>
    `translate(-${i * 5}px, -${i * 3}px) rotate(-${i * 1.5}deg) scale(${1 - i * 0.02})`,
  OCEAN_WAVES: (i: number) =>
    `translateY(${Math.sin(i * 0.8) * 10}px) skewX(${Math.cos(i * 0.6) * 5}deg) scaleX(${1 + i * 0.05}) rotate(${i * 3.5}deg)`,
  ORBIT: (i: number) =>
    `translate(${Math.cos(i) * 15}px, ${Math.sin(i) * 15}px) rotate(${i * 12}deg)`,
  PICTURE_FRAME: (i: number) =>
    `translate(${Math.cos(i) * 10}px, ${Math.sin(i) * 10}px) 
    rotate(${i * 5}deg) scale(${1 + i * 0.01})`,
  PYRAMID: (i: number) => `scale(${1 + i * 0.05})`,
  PYRAMID_TWO: (i: number) => `scale(${1 + i * 0.05}) translateY(-${i * 4}px) rotate(${i * 3}deg)`,
  ROTATED: (i: number) => `translateY(${i * 3}px) rotate(${i * 3.5}deg) scale(${1 + i * 0.01})`,
  ROSE: (i: number) =>
    `translate(${i % 2 === 0 ? i * 12 : -i * 12}px, ${Math.tan(i * 0.1) * 15}px) 
   scale(${1 - Math.sin(i * 0.04) * 0.5}) 
   rotate(${i * 25}deg) 
   skew(${i % 2 === 0 ? 10 : -10}deg)`,
  SPIRAL: (i: number) => `translate(${i * 4}px, ${i * 4}px) rotate(${i * 15}deg)`,
  STAGGERED: (i: number) =>
    `translate(${i * 5}px, ${i % 2 === 0 ? i * 4 : -i * 4}px) rotate(${
      i % 2 === 0 ? i * 4 : -i * 4
    }deg)`,
  VORTEX: (i: number) =>
    `rotate(${i * 10}deg) translate(${i * 6}px, ${i * 6}px) scale(${1 + i * 0.03})`,
  ZIGZAG: (i: number) =>
    `translate(${i * 8}px, ${(i % 2 === 0 ? 1 : -1) * i * 8}px) rotate(${i * 6}deg)`,
  BLOOMING_FLOWER: (i: number) => `scale(${1 + i * 0.02}) rotate(${i * 30}deg)`
}

export const blurStyles = {
  SIMPLE: {
    style: '-10px -3px 3px 0 black',
    blur: 10
  },
  HUG: {
    style: '-10px -3px 10px 0px black',
    blur: 20
  },
  SPREAD: {
    style: '-7px -2px 11px 4px black',
    blur: 40
  },
  DEEP: {
    style: '-10px -3px 20px 3px black',
    blur: 50
  },
  GLOW: {
    style: 'black -10px -3px 33px 4px, black -10px -3px 9px 1px',
    blur: 60
  },
  MULTI: {
    style: 'black -10px -3px 58px 12px, black -10px -3px 16px 2px',
    blur: 70
  }
}

export const perspectivesStyles = [
  { transform: 'rotateY(0deg) rotateX(0deg)' },
  { transform: 'rotateY(-15deg) rotateX(5deg)' },
  { transform: 'rotateY(15deg) rotateX(-5deg)' },
  { transform: 'rotateX(15deg)' },
  { transform: 'rotateX(-15deg)' },
  { transform: 'rotateY(-30deg) rotateX(10deg)' },
  { transform: 'rotateY(30deg) rotateX(-10deg)' },
  { transform: 'rotateX(30deg)' },
  { transform: 'rotateX(-30deg)' },
  { transform: 'rotateY(-45deg) rotateX(15deg)' }
]
