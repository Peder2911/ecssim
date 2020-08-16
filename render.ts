
import {ECS} from "./ecs"
import {Pos} from "./geometry"

export function renderSystemFactory(canvas: HTMLCanvasElement){
   let ctx = canvas.getContext("2d")
   function renderSystem(ecs:ECS){
      let components = ecs.components
      ctx.clearRect(1,1,canvas.height,canvas.width)
      components.position.forEach((pos:Pos,idx:number)=>{
         let color = components.color[idx]
         ctx.fillStyle = color
         ctx.fillRect(pos.x,pos.y,10,10)
      })
   }
   return renderSystem
}

