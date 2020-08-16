
import {ECS} from "./ecs"

export function physicsSystem(ecs:ECS){
   ecs.components.position.forEach((pos)=>{
      pos.x ++
      pos.y ++
   })
}

