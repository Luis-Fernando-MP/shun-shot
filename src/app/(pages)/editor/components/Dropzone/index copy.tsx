'use client'

import { acl } from '@/shared/acl'
import { type JSX, type ReactNode, useCallback } from 'react'
import Dropzone, { useDropzone } from 'react-dropzone'

import PreviewImage from './previewDropzone'
import './style.scss'

// import useDropzone from './useDropzone'

interface IDropzone {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
  setPublicIdField: (file: File, temporalLink: string) => void
}

const CustomDropzone = ({ setPublicIdField }: IDropzone): JSX.Element => {
  // const {
  //   loading,
  //   preview,
  //   progress,
  //   handleRejectFiles,
  //   handleDrop,
  //   handleError,
  //   handleClear,
  //   getDropzoneMessage
  // } = useDropzone({ set: setPublicIdField })

  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()} className='dropzone'>
      <input {...getInputProps()} />
      <p>Drag drop some files here, or click to select files</p>
    </div>
  )

  // return (

  // <Dropzone
  //   onDrop={handleDrop}
  //   multiple={false}
  //   accept={{ 'image/png': [], 'image/jpeg': [], 'image/jpg': [], 'image/webp': [] }}
  //   onDropRejected={handleRejectFiles}
  //   onError={handleError}
  //   noClick
  //   maxSize={5000}
  // >
  //   {({ getRootProps, getInputProps, open, isDragActive }) => {
  //     console.log(open, isDragActive)

  //     return (
  //       <div {...getRootProps()} className='customDropzone'>
  //         <input {...getInputProps()} />
  //         <div className={`${acl(isDragActive)} customDropzone-content`}>
  //           <h3 className='customDropzone-tag'>{getDropzoneMessage(isDragActive)}</h3>
  //           <h3>{!isDragActive && 'Arrastra y '}Suelta tu Imagen Aquí 📥</h3>
  //           <p>
  //             Simplemente arrastra tu imagen a esta área para cargarla. Puedes soltarla aquí
  //             <br /> para comenzar el proceso de transformación.
  //           </p>
  //           {!preview && !loading && (
  //             <>
  //               {!isDragActive && (
  //                 <button
  //                   className='customDropzone-choseFile'
  //                   type='button'
  //                   onClick={open}
  //                   onDragOver={e => e.stopPropagation()}
  //                 >
  //                   Prefiero seleccionar un archivo 📁
  //                 </button>
  //               )}
  //               {isDragActive && (
  //                 <h4 className='customDropzone-dropHere'>👋 Hey por aca, suéltalo vamos!! 🏁</h4>
  //               )}
  //             </>
  //           )}
  //           {/* {loading && <PreviewImage isLoading={loading} progress={progress} />}
  //           {preview && !loading && (
  //             <PreviewImage
  //               imagePreview={preview}
  //               closePreview={handleClear}
  //               openDirectory={open}
  //             />
  //           )} */}
  //         </div>
  //       </div>
  //     )
  //   }}
  // </Dropzone>
  // )
}

export default CustomDropzone
