import { type FC, RefObject, memo, useEffect } from 'react'

import useImagesRadiusStore from '../../store/images/imagesRadius.store'

interface Props {
  $containerRef: RefObject<HTMLDivElement | null>
}

const ApplyImageStyles: FC<Props> = ({ $containerRef }) => {
  const { getStyleBorderRadius } = useImagesRadiusStore()
  const { borderRadius } = getStyleBorderRadius()

  useEffect(() => {
    const $container = $containerRef?.current
    if (!$container) return
    const $images: NodeListOf<HTMLImageElement> = $container.querySelectorAll('img#picture-image')
    if ($images.length < 1) return

    $images.forEach(image => {
      image.style.borderRadius = borderRadius
    })
  }, [$containerRef, borderRadius])

  return null
}

export default memo(ApplyImageStyles)
