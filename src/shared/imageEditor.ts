// import DomToImage from 'dom-to-image'
// import html2canvas from 'html2canvas'
// import toast from 'react-hot-toast'

// export const loadDefaultImageEditor = async (element: HTMLElement) => {
//   const id = toast.loading('Preparando entorno...')
//   // try {
//   //   const scale = 2.5
//   //   const style = {
//   //     transform: `scale(${scale})`,
//   //     transformOrigin: 'top left',
//   //     width: `${element.offsetWidth}px`,
//   //     height: `${element.offsetHeight}px`
//   //   }
//   //   const pngDataUrl = await DomToImage.toPng(element, {
//   //     quality: 1,
//   //     width: element.offsetWidth * scale,
//   //     height: element.offsetHeight * scale,
//   //     style: style
//   //   })

//   //   toast.success('Todo Listo!!', { id })
//   //   return pngDataUrl
//   // } catch (error: any) {
//   //   console.error(error)
//   //   toast.error('No se pudo convertir la imagen', { id })
//   // }

//   element.style.animation = 'null'

//   try {
//     const canvas = await html2canvas(element, {
//       backgroundColor: null
//     })

//     const pngDataUrl = canvas.toDataURL('image/png', 1)

//     toast.success('Todo Listo!!', { id })
//     console.log(pngDataUrl)

//     return pngDataUrl
//   } catch (error: any) {
//     console.error(error)
//     toast.error('No se pudo convertir la imagen', { id })
//     return null // Asegúrate de retornar null en caso de error
//   }
// }

// export const downloadToPng = async (element: HTMLElement, name?: string | null) => {
//   const id = toast.loading('Descargando...')
//   try {
//     const scale = 2.5
//     const style = {
//       transform: `scale(${scale})`,
//       transformOrigin: 'top left',
//       width: `${element.offsetWidth}px`,
//       height: `${element.offsetHeight}px`,
//       backgroundColor: 'transparent'
//     }
//     const pngDataUrl = await DomToImage.toPng(element, {
//       quality: 1,
//       width: element.offsetWidth * scale,
//       height: element.offsetHeight * scale,
//       style: style
//     })

//     const downloadLink = document.createElement('a')
//     downloadLink.href = pngDataUrl
//     downloadLink.download = `${name ?? 'my-code'}.svg`

//     downloadLink.click()

//     toast.success('Todo Listo!!', { id })
//   } catch (error: any) {
//     console.error(error)
//     toast.error('No se pudo descargar la imagen', { id })
//   }
// }

// export const downloadToSvg = async (element: HTMLElement, name?: string | null) => {
//   const id = toast.loading('Preparando...')

//   try {
//     const svgDataUrl = await DomToImage.toSvg(element)

//     const downloadLink = document.createElement('a')
//     downloadLink.href = svgDataUrl
//     downloadLink.download = `${name ?? 'my-code'}.svg`
//     downloadLink.click()

//     toast.success('Todo Listo!!', { id })
//   } catch (error: any) {
//     console.error(error)
//     toast.error('No se pudo descargar la imagen', { id })
//   }
// }

// export const copyToPng = async (element: HTMLElement) => {
//   const id = toast.loading('Preparando...')

//   try {
//     const scale = 2.5
//     const style = {
//       transform: `scale(${scale})`,
//       transformOrigin: 'top left',
//       width: `${element.offsetWidth}px`,
//       height: `${element.offsetHeight}px`,
//       backgroundColor: 'transparent'
//     }
//     const pngDataUrl = await DomToImage.toPng(element, {
//       quality: 1,
//       width: element.offsetWidth * scale,
//       height: element.offsetHeight * scale,
//       style: style
//     })

//     const response = await fetch(pngDataUrl)
//     const blob = await response.blob()
//     const item = new ClipboardItem({ 'image/png': blob })

//     await navigator.clipboard.write([item])

//     toast.success('Al portapapeles!!', { id })
//   } catch (error: any) {
//     console.error(error)
//     toast.error('No se pudo copiar la imagen', { id })
//   }
// }

// export const copyToSvg2 = async (element: HTMLElement) => {
//   const id = toast.loading('Preparando...')

//   try {
//     const svgText = await DomToImage.toSvg(element)
//     const svgContent = svgText.replace(/^data:image\/svg\+xml;charset=utf-8,/, '')

//     const blob = new Blob([svgContent], { type: 'text/html' })
//     const item = new ClipboardItem({ 'text/html': blob })

//     await navigator.clipboard.write([item])

//     toast.success('Al portapapeles!!', { id })
//   } catch (error) {
//     console.error(error)
//     toast.error('No se pudo copiar la imagen', { id })
//   }
// }

// export const copyToSvg = async (element: HTMLElement) => {
//   const id = toast.loading('Preparando entorno...')
//   try {
//     const scale = 3

//     const style = {
//       transform: `scale(${scale})`,
//       transformOrigin: 'top left',
//       width: `${element.offsetWidth}px`,
//       height: `${element.offsetHeight}px`
//     }

//     const pngDataUrl = await DomToImage.toPng(element, {
//       width: element.offsetWidth * scale,
//       height: element.offsetHeight * scale,
//       style: style
//     })

//     console.log('URLLLL ', pngDataUrl)

//     const response = await fetch(pngDataUrl)
//     const blob = await response.blob()
//     const item = new ClipboardItem({ 'image/png': blob })

//     await navigator.clipboard.write([item])
//     console.log(item)

//     toast.success('Todo Listo!!', { id })
//     return pngDataUrl
//   } catch (error: any) {
//     console.error(error)
//     toast.error('No se pudo convertir la imagen', { id })
//     return null // Asegúrate de retornar null en caso de error
//   }
// }

// export const saveImage = async (base64Image: string) => {
//   console.log('sending, ', JSON.stringify({ imageBase64: base64Image }))

//   try {
//     const response = await fetch('/api', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ a: 1, imageBase64: base64Image })
//     })

//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }
