import { Button } from "./components/ui/button";
import { Github, FileVideo, Upload } from 'lucide-react'
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";


export function App() {
  return ( 
    <div className="min-h-screen flex flex-col">
      <div className="px-6 pv-5 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>
        
        <div className="flex items-center gap-3"> 
          <span className="text-sm text-muted-foreground">
            Desenvolvido no NLW da Rocketseat
          </span>
          <Separator orientation="vertical" className="h-6"/>
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2"/>
            GitHub
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed" 
              placeholder="Inclua o prompt para a IA"
            />
            <Textarea
              className="resize-none p-4 leading-relaxed" 
              placeholder="Resultado gerado pela IA" 
              readOnly
            />
    
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6" >
            <label 
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="w-4 h-4"/>
              Selecione um vídeo
            </label>
            <input type="file" id="video" accept="video/mp4" className="sr-only"/>

            <Separator/>

            <div className="space-y-1">
              <Label htmlFor="transcription_prompt">Prompt de Transcrição</Label>
              <Textarea 
                id="transcription_prompt" 
                className="min-h-29 leading-relaxed"
                placeholder="Inclua palavras chaves contidas no vídeo separadas por vírgula."
                />
            </div>
            <Button type="submit" className="w-full">
              <Upload className="h-4 w-4 ml-2"/>
              Carregar vídeo
            </Button>
          </form>

          <Separator/>

          <form>
            
          </form>
        </aside>
      </main>

    </div>
  )
}
