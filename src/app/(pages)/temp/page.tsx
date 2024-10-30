'use client'

import { Droplets, Eye, Move, Palette, Redo2, Scissors, Undo2, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { HexColorPicker } from 'react-colorful'

const styles = [
  { transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)' },
  { transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)' },
  { transform: 'perspective(1000px) rotateY(15deg) rotateX(-5deg)' },
  { transform: 'perspective(1000px) rotateX(15deg)' },
  { transform: 'perspective(1000px) rotateX(-15deg)' },
  { transform: 'perspective(1000px) rotateY(-30deg) rotateX(10deg)' },
  { transform: 'perspective(1000px) rotateY(30deg) rotateX(-10deg)' },
  { transform: 'perspective(1000px) rotateX(30deg)' },
  { transform: 'perspective(1000px) rotateX(-30deg)' },
  { transform: 'perspective(1000px) rotateY(-45deg) rotateX(15deg)' }
]

const gradients = [
  'bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600',
  'bg-gradient-to-br from-blue-500 via-teal-500 to-green-500',
  'bg-gradient-to-br from-red-500 via-yellow-500 to-pink-500',
  'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'
]

const borderStyles = ['Sharp', 'Curved', 'Round']

const resolutions = [
  { ratio: '16:9', width: 1920, height: 1080 },
  { ratio: '3:2', width: 1920, height: 1280 },
  { ratio: '4:3', width: 1920, height: 1440 },
  { ratio: '5:4', width: 1920, height: 1536 },
  { ratio: '1:1', width: 1920, height: 1920 },
  { ratio: '4:5', width: 1080, height: 1350 },
  { ratio: '3:4', width: 1080, height: 1440 },
  { ratio: '2:3', width: 1080, height: 1620 },
  { ratio: '9:16', width: 1080, height: 1920 }
]

const browserStyles = [
  { name: 'Safari Light', class: 'bg-white rounded-lg' },
  { name: 'Chrome Light', class: 'bg-white' },
  {
    name: 'Arc Light',
    class: 'bg-white rounded-tl-2xl rounded-tr-lg rounded-br-2xl rounded-bl-lg'
  },
  { name: 'Safari Dark', class: 'bg-gray-800 rounded-lg' },
  { name: 'Chrome Dark', class: 'bg-gray-800' },
  {
    name: 'Arc Dark',
    class: 'bg-gray-800 rounded-tl-2xl rounded-tr-lg rounded-br-2xl rounded-bl-lg'
  }
]

const noisePatterns = ['bg-noise-1', 'bg-noise-2', 'bg-noise-3', 'bg-noise-4']

const layerStyles = [
  { name: 'Flat', class: 'bg-gray-200' },
  { name: 'Gradient', class: 'bg-gradient-to-br from-gray-100 to-gray-300' },
  { name: 'Textured', class: 'bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-sm' },
  { name: 'Glassy', class: 'bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg' },
  { name: 'Neon', class: 'bg-black bg-opacity-50 border-2 border-neon-pink shadow-neon' },
  { name: 'Neumorphic', class: 'bg-gray-100 shadow-neumorphic' },
  {
    name: 'Holographic',
    class:
      'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-opacity-30 backdrop-filter backdrop-blur-md'
  },
  {
    name: 'Frosted',
    class:
      'bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl border border-white border-opacity-20'
  }
]

export default function Component() {
  const [currentStyle, setCurrentStyle] = useState(0)
  const [currentGradient, setCurrentGradient] = useState(0)
  const [currentBorder, setCurrentBorder] = useState(0)
  const [borderRadius, setBorderRadius] = useState(33)
  const [shadowIntensity, setShadowIntensity] = useState(20)
  const [lightSource, setLightSource] = useState({ x: 80, y: 20 })
  const [shadowColor, setShadowColor] = useState('#000000')
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)
  const [currentResolution, setCurrentResolution] = useState(resolutions[2]) // 4:3 by default
  const [currentBrowserStyle, setCurrentBrowserStyle] = useState(0)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [blur, setBlur] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0 })
  const [showContainer, setShowContainer] = useState(true)
  const [currentNoisePattern, setCurrentNoisePattern] = useState(0)
  const [currentLayerStyle, setCurrentLayerStyle] = useState(0)
  const [layerCount, setLayerCount] = useState(2)
  const [clipPath, setClipPath] = useState('')
  const [mainElementFilter, setMainElementFilter] = useState('')
  const [containerTransform, setContainerTransform] = useState('')
  const mainElementRef = useRef(null)
  const sunAreaRef = useRef(null)
  const sunRef = useRef(null)

  const nextStyle = () => setCurrentStyle(prev => (prev + 1) % styles.length)

  useEffect(() => {
    const handleMouseMove = e => {
      if (sunRef.current && e.buttons === 1) {
        const sunAreaRect = sunAreaRef.current.getBoundingClientRect()
        const x = Math.min(Math.max(e.clientX - sunAreaRect.left, 0), sunAreaRect.width)
        const y = Math.min(Math.max(e.clientY - sunAreaRect.top, 0), sunAreaRect.height)
        setLightSource({ x, y })
      }
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    sunRef.current.addEventListener('mousedown', () => {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  const shadowStyle = {
    boxShadow: `${(lightSource.x - 50) / 2}px 
                 ${(lightSource.y - 50) / 2}px 
                 ${shadowIntensity}px ${shadowColor}`
  }

  const getBorderRadiusStyle = () => {
    const radius = `${borderRadius}px`
    switch (currentBorder) {
      case 0:
        return { borderRadius: '0px' }
      case 1:
        return { borderRadius: radius }
      case 2:
        return { borderRadius: '9999px' }
      default:
        return {}
    }
  }

  const getTransformStyle = () => {
    return {
      transform: `${styles[currentStyle].transform} scale(${scale}) translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
      filter: `blur(${blur}px) ${mainElementFilter}`,
      clipPath: clipPath
    }
  }

  const handlePositionChange = (x, y) => {
    setPosition({ x, y })
  }

  const handleMouseDown = e => {
    if (e.target === mainElementRef.current) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = e => {
    if (isDragging) {
      const newX = e.clientX - dragStart.x
      const newY = e.clientY - dragStart.y
      setPosition({ x: newX, y: newY })
    } else if (isResizing) {
      const dx = e.clientX - resizeStart.x
      const dy = e.clientY - resizeStart.y
      const newScale = scale + (dx + dy) / 200
      setScale(Math.max(0.1, Math.min(newScale, 5)))
      setResizeStart({ x: e.clientX, y: e.clientY })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setIsResizing(false)
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, isResizing, dragStart, resizeStart, scale])

  const handleResizeStart = e => {
    e.stopPropagation()
    setIsResizing(true)
    setResizeStart({ x: e.clientX, y: e.clientY })
  }

  return (
    <div className='flex min-h-screen flex-col bg-gray-900 p-8 lg:flex-row'>
      <div className='mb-8 w-full space-y-6 lg:mb-0 lg:mr-8 lg:w-64'>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Resolución</h3>
          <div className='grid grid-cols-2 gap-2'>
            {resolutions.map(res => (
              <button key={res.ratio} className='w-full' onClick={() => setCurrentResolution(res)}>
                {res.ratio}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Estilo de navegador</h3>
          <div className='grid grid-cols-2 gap-2'>
            {browserStyles.map((style, index) => (
              <button
                key={style.name}
                className='w-full'
                onClick={() => setCurrentBrowserStyle(index)}
              >
                {style.name}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Forma artística</h3>
          <div className='space-y-2'>
            <button
              variant='outline'
              className='w-full'
              onClick={() => setClipPath('circle(50% at 50% 50%)')}
            >
              Círculo
            </button>
            <button
              variant='outline'
              className='w-full'
              onClick={() => setClipPath('polygon(50% 0%, 0% 100%, 100% 100%)')}
            >
              Triángulo
            </button>
            <button
              variant='outline'
              className='w-full'
              onClick={() => setClipPath('polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)')}
            >
              Diamante
            </button>
          </div>
        </div>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Efectos especiales</h3>
          <div className='space-y-2'>
            <button
              variant='outline'
              className='w-full'
              onClick={() => setMainElementFilter('hue-rotate(90deg)')}
            >
              Cambio de tono
            </button>
            <button
              variant='outline'
              className='w-full'
              onClick={() => setMainElementFilter('saturate(200%)')}
            >
              Saturación
            </button>
            <button
              variant='outline'
              className='w-full'
              onClick={() => setMainElementFilter('invert(100%)')}
            >
              Invertir colores
            </button>
          </div>
        </div>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Transformación del contenedor</h3>
          <div className='space-y-2'>
            <button
              variant='outline'
              className='w-full'
              onClick={() => setContainerTransform('skew(10deg, 10deg)')}
            >
              Inclinar
            </button>
            <button
              variant='outline'
              className='w-full'
              onClick={() => setContainerTransform('rotate(45deg)')}
            >
              Rotar 45°
            </button>
            <button
              variant='outline'
              className='w-full'
              onClick={() => setContainerTransform('scale(0.8, 1.2)')}
            >
              Estirar
            </button>
          </div>
        </div>
      </div>
      <div className='mb-8 flex grow flex-col items-center justify-center lg:mb-0'>
        <section
          className={`w-full max-w-5xl p-[100px] ${gradients[currentGradient]} ${noisePatterns[currentNoisePattern]} relative flex items-center justify-center overflow-hidden`}
          style={{
            aspectRatio: `${currentResolution.width} / ${currentResolution.height}`,
            transform: `scale(${Math.min(1, 1000 / currentResolution.width)}) ${containerTransform}`
          }}
        >
          {[...Array(layerCount)].map((_, index) => (
            <div
              key={index}
              className={`absolute inset-4 ${layerStyles[currentLayerStyle].class} rounded-lg`}
              style={{
                zIndex: index + 1,
                transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (index + 1)}deg) translate(${index * 5}px, ${index * 5}px)`
              }}
            ></div>
          ))}
          {showContainer && (
            <div
              className={`size-full ${browserStyles[currentBrowserStyle].class} relative z-10 overflow-hidden`}
              onMouseDown={handleMouseDown}
              ref={mainElementRef}
            >
              <div className='flex h-6 items-center space-x-1 bg-gray-200 px-2 dark:bg-gray-700'>
                <div className='size-3 rounded-full bg-red-500'></div>
                <div className='size-3 rounded-full bg-yellow-500'></div>
                <div className='size-3 rounded-full bg-green-500'></div>
              </div>
              <div
                className={`absolute inset-0 mt-6 bg-white transition-all duration-500 ease-in-out dark:bg-gray-900`}
                style={{ ...getTransformStyle(), ...shadowStyle, ...getBorderRadiusStyle() }}
              >
                <pre className='select-text whitespace-pre-wrap p-4 text-sm text-gray-800 dark:text-green-400'>
                  <code>{`function hello() {
  console.log("Hello, World!");
}

hello();`}</code>
                </pre>
              </div>
              <div
                className='absolute bottom-0 right-0 flex size-6 cursor-se-resize items-center justify-center bg-blue-500 text-xs text-white'
                onMouseDown={handleResizeStart}
              >
                ↔️
              </div>
            </div>
          )}
          <button
            className='absolute right-2 top-2 z-20'
            onClick={() => setShowContainer(!showContainer)}
          >
            {showContainer ? <X className='size-4' /> : <Eye className='size-4' />}
          </button>
        </section>
        <div className='mt-8 flex space-x-4'>
          <button>
            <Undo2 className='size-4' />
          </button>
          <button>
            <Redo2 className='size-4' />
          </button>
          <button onClick={nextStyle}>
            <Eye className='size-4' />
          </button>
        </div>
      </div>
      <div className='w-full space-y-6 lg:w-64'>
        <div
          ref={sunAreaRef}
          className='relative h-64 w-full overflow-hidden rounded-lg bg-gray-800'
        >
          <div className='absolute inset-4 rounded bg-white' style={shadowStyle}></div>
          <div
            ref={sunRef}
            className='absolute flex size-20 cursor-move items-center justify-center rounded-full bg-yellow-300'
            style={{ left: lightSource.x - 40, top: lightSource.y - 40 }}
          >
            ☀️
          </div>
          <div className='absolute right-2 top-2 rounded bg-blue-500 px-2 py-1 text-xs text-white'>
            Brightness {Math.round((lightSource.y / 64) * 100)}%
          </div>
        </div>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Fondo</h3>
          <div className='grid grid-cols-2 gap-2'>
            {gradients.map((gradient, index) => (
              <button
                key={gradient}
                className={`h-12 w-full rounded ${gradient}`}
                onClick={() => setCurrentGradient(index)}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Ruido de fondo</h3>
          <div className='grid grid-cols-2 gap-2'>
            {noisePatterns.map((pattern, index) => (
              <button
                key={pattern}
                className='w-full'
                onClick={() => setCurrentNoisePattern(index)}
              >
                Ruido {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Estilo de capas</h3>
          <div className='grid grid-cols-2 gap-2'>
            <button className='w-full' onClick={() => setCurrentLayerStyle(-1)}>
              Desactivado
            </button>
            {layerStyles.map((style, index) => (
              <button
                key={style.name}
                className='w-full'
                onClick={() => setCurrentLayerStyle(index)}
              >
                {style.name}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Número de capas</h3>
          <article
            // value={[layerCount]}
            // onValueChange={([value]) => setLayerCount(value)}
            // min={0}
            max={5}
            step={1}
            className='mb-4'
          />
        </div>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Border</h3>
          <article
            // value={[borderRadius]}
            // onValueChange={([value]) => setBorderRadius(value)}
            // max={50}
            step={1}
            className='mb-4'
          />
          <div className='flex space-x-2'>
            {borderStyles.map((style, index) => (
              <button key={style} className='flex-1' onClick={() => setCurrentBorder(index)}>
                {style}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Intensidad de sombra</h3>
          <article
            // value={[shadowIntensity]}
            // onValueChange={([value]) => setShadowIntensity(value)}
            // max={50}
            step={1}
          />
        </div>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Color de sombra</h3>
          <div
            className='h-10 w-full cursor-pointer rounded'
            style={{ backgroundColor: shadowColor }}
            onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
          />
          {isColorPickerOpen && (
            <div className='mt-2'>
              <HexColorPicker color={shadowColor} onChange={setShadowColor} />
            </div>
          )}
        </div>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Size & Position</h3>
          <div className='relative h-64 w-full rounded-lg bg-gray-800'>
            <div className='absolute inset-4 grid grid-cols-5 gap-2'>
              {[...Array(25)].map((_, index) => (
                <button
                  key={index}
                  className='size-full'
                  onClick={() =>
                    handlePositionChange(((index % 5) - 2) * 50, (Math.floor(index / 5) - 2) * 50)
                  }
                >
                  {index === 12 && <Move className='size-4' />}
                </button>
              ))}
            </div>
            <div
              className='absolute size-4 cursor-move rounded-full bg-blue-500'
              style={{
                left: `${(position.x / 200 + 0.5) * 100}%`,
                top: `${(position.y / 200 + 0.5) * 100}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 10
              }}
              onMouseDown={e => {
                e.stopPropagation()
                setIsDragging(true)
                setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
              }}
            />
          </div>
        </div>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Scale</h3>
          <article
            // value={[scale]}
            // onValueChange={([value]) => setScale(value)}
            // min={0.1}
            max={5}
            step={0.1}
            className='mb-4'
          />
        </div>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Rotation</h3>
          <article
            // value={[rotation]}
            // onValueChange={([value]) => setRotation(value)}
            max={360}
            step={1}
            className='mb-4'
          />
        </div>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Blur</h3>
          <article
            // value={[blur]}
            // onValueChange={([value]) => setBlur(value)}
            max={20}
            step={0.1}
            className='mb-4'
          />
        </div>
        <div>
          <h3 className='mb-2 text-lg font-semibold text-white'>Perspectiva</h3>
          <div className='grid grid-cols-2 gap-2'>
            {styles.map((_, index) => (
              <button key={index} className='w-full' onClick={() => setCurrentStyle(index)}>
                Perspectiva {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
