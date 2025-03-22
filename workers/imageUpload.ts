export enum wkUpload {
  UPLOAD = 'UPLOAD'
}

export interface wkUploadMessage {
  bitmap?: ImageBitmap
  action: wkUpload
}

export type WorkerEvent = MessageEvent<wkUploadMessage>

self.onmessage = async (event: WorkerEvent) => {
  const { bitmap, action } = event.data
  try {
    if (!action) throw new Error('No action provided')
    if (action === wkUpload.UPLOAD && bitmap) await generateImage(bitmap)
  } catch (error) {
    self.postMessage({ error: (error as Error).message })
  }
}

async function generateImage(bitmap: ImageBitmap) {
  self.postMessage({ blob: 'hola' })
}
