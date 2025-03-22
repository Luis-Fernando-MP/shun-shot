import { type FC, RefObject, memo, useEffect, useMemo } from 'react'

import useImagesRadiusStore from '../../store/images/imagesRadius.store'
import useImagesBorderStore from '../../store/images/useImagesBorderStore'

interface Props {
  $containerRef: RefObject<HTMLDivElement | null>
}

const ApplyImageStyles: FC<Props> = ({ $containerRef }) => {
  const { getStyleBorderRadius } = useImagesRadiusStore()
  const { getBorderStyle } = useImagesBorderStore()

  const { borderRadius } = getStyleBorderRadius()
  const borderStyles = getBorderStyle()

  const $canvasElements = useMemo(() => {
    const $container = $containerRef?.current
    if (!$container) return null
    const $images: HTMLImageElement[] = Array.from($container.querySelectorAll('img#picture-image'))

    return { $images, $container }
  }, [$containerRef.current])

  useEffect(() => {
    const elements = $canvasElements
    if (!elements) return
    const { $images } = elements

    $images.forEach(image => {
      Object.assign(image.style, borderStyles)
      image.style.borderRadius = borderRadius
    })
  }, [$canvasElements, borderStyles, borderRadius])

  return null
}

export default memo(ApplyImageStyles)
