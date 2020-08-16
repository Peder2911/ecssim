import {ECS} from "./ecs"
import {Pos} from "./geometry"

export function spawnerSystem(ecs:ECS){
   ecs.components.position.forEach((_,idx)=>{
      let draw = Math.random()
      if(draw > 0.99){
         delete(ecs.components.position[idx])
         ecs.index.return(idx)
      }
   })

   for(let i = 0; i < 10; i++){
      let draw = Math.random()
      if(draw>0.9){
         let idx = ecs.index.get()
         let pos = new Pos(Math.random()*100,Math.random()*100)
         ecs.components.position[idx] = pos
         ecs.components.color[idx] = "green"
      }
   }
}
