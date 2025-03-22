import { DropzoneFile } from '@/shared/components/Dropzone'

const uploadImage = async (file: DropzoneFile) => {
  const reader = new FileReader()

  return new Promise((resolve, reject) => {
    reader.onload = () => {
      resolve({ result: reader.result, reader: true })
    }

    reader.onerror = () => {
      reject(new Error('Error reading file'))
    }

    // Asegúrate de que `file` sea un objeto `File` o `Blob`
    if (file instanceof Blob) {
      reader.readAsDataURL(file)
    } else {
      reject(new Error('Invalid file type'))
    }
  })
}

export default uploadImage
