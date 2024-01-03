import { FileVideo, Upload } from "lucide-react";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ChangeEvent, FormEvent, FormEventHandler, useMemo, useRef, useState } from "react";

export function VideoInput() {
  const [videoFile, setVideoFile] = useState<File | null >(null)
  const promptInputRef = useRef<HTMLTextAreaElement>(null)
  const previewURL = useMemo(() => {
    if(!videoFile){
      return
    }
    return URL.createObjectURL(videoFile)
  }, [videoFile])

  function handleFileSelected(event:ChangeEvent<HTMLInputElement>) {
    const { files } = event.currentTarget 
    if(!files){
      return
    }
    const selectedFile = files[0]
    setVideoFile(selectedFile)  
  }

  function handleUploadVideo(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    const prompt = promptInputRef.current?.value

    if(!videoFile) {
      return
    }

    
  }

  return (
    <form onSubmit={handleUploadVideo} className="space-y-6" >
      <label 
        htmlFor="video"
        className="relative border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
      >
        {previewURL ? 
        (
          <video src={previewURL} controls={false} className="pointer-events-none absolute inset-0"/>
        ) : (
          <>
            <FileVideo className="w-4 h-4"/>
            Selecione um vídeo
          </>
        )}
      </label>
      <input type="file" id="video" accept="video/mp4" className="sr-only" onChange={handleFileSelected}/>

      <Separator/>

      <div className="space-y-2">
        <Label htmlFor="transcription_prompt">Prompt de Transcrição</Label>
        <Textarea 
          ref={promptInputRef}
          id="transcription_prompt" 
          className="h-20 leading-relaxed resize-none"
          placeholder="Inclua palavras chaves contidas no vídeo separadas por vírgula."
          />
      </div>
      <Button type="submit" className="w-full">
        <Upload className="h-4 w-4 ml-2"/>
        Carregar vídeo
      </Button>
    </form>
  )
}