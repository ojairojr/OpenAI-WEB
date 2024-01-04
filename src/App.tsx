import { Button } from "./components/ui/button";
import { Github, Wand2 } from 'lucide-react'
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";
import { VideoInput } from "./components/video-input-form";
import { PromptSelect } from "./components/prompt-select";
import { useState } from "react";

export function App() {
  const [temperature, setTemperature] = useState<number>(0.5)
  function handlePromptSelected(template:string) {
    console.log(template)
  }

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

      <main className="flex flex-1 p-6 gap-6">
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
          <VideoInput/>

          <Separator/>

          <form className="space-y-6">
            <div className="space-y-2">
                <Label>Prompt</Label>
                <PromptSelect onPromptSelected={handlePromptSelected}/>
            </div>

            <Separator/>

            <div className="space-y-2">
              <Label>Modelos</Label>
              <Select defaultValue="gpt3.5" disabled>
                <SelectTrigger>
                  <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5"> GPT 3.5-turbo</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-sm text-muted-foreground italic">
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator/>

            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider
                min={0}
                max={1}
                step={0.1}
                value={[temperature]}
                onValueChange={value => {setTemperature(value[0])}}
              />
              <span className="block leading-relaxed text-sm text-muted-foreground italic">
                Valores mais altos tendem a tornar o resultado mais criativos, porém com mais erros.
              </span>
            </div>

            <Separator/>

            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-2"/>
            </Button>
          </form>
        </aside>
      </main>

    </div>
  )
}
