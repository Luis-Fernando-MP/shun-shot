import { useCallback, useMemo, useState } from 'react'

interface TProps {
  generatorImages: (start: number, amount: number) => string[]
  minValue: number
  maxValue: number
}

const useSmallBoxImages = ({ generatorImages, maxValue, minValue }: TProps) => {
  const [boxImages, setBoxImages] = useState(generatorImages(0, minValue))

  const resetInRange = useMemo(
    () => boxImages.length > minValue && boxImages.length < maxValue,
    [boxImages.length, maxValue, minValue]
  )

  const handleAdd = useCallback(
    (increment: number) => {
      setBoxImages(prev => {
        const currentCount = prev.length
        if (currentCount >= maxValue) return prev
        return [...prev, ...generatorImages(currentCount, increment)].slice(0, maxValue)
      })
    },
    [generatorImages, maxValue]
  )

  const handleReset = useCallback(() => {
    setBoxImages(() => generatorImages(0, minValue))
  }, [generatorImages, minValue])

  const handleToggleAll = useCallback(() => {
    setBoxImages(prev =>
      prev.length === maxValue ? generatorImages(0, minValue) : generatorImages(0, maxValue)
    )
  }, [generatorImages, maxValue, minValue])

  return {
    resetInRange,
    boxImages,
    handleAdd,
    handleReset,
    handleToggleAll
  }
}

export default useSmallBoxImages
