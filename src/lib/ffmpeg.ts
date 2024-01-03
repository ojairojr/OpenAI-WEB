import { FFmpeg } from "@ffmpeg/ffmpeg"

let ffmpeg: FFmpeg | null

export async function getFFmepg() {
  const baseURL = "https://unpkg.com/browse/@ffmpeg/core-mt@0.12.6/dist/umd/"
  if(ffmpeg){
    return ffmpeg
  }
  ffmpeg = new FFmpeg()

  if(!ffmpeg.loaded){
    await ffmpeg.load({
      coreURL: `${baseURL}/ffmpeg-core.js`,
      workerURL: `${baseURL}/ffmpeg-core.worker.js`,
      wasmURL: `${baseURL}/ffmpeg-core.wasm`
    })
  }

  return ffmpeg
}