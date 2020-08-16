import {Pos} from "./geometry"
import {System} from "./types"

class Index {
   current: number = 0
   pool: number[] = []
   get(){
      let i: number;
      if(this.pool.length > 0){
         i = this.pool.pop()
      } else {
         i = this.current
         this.current ++
      }
      return i
   }
   return(i:number){
      this.pool.push(i)
   }
}

export class Components {
   position: Pos[] = []
   color: string[] = []
}

export class ECS {
   index = new Index()
   components: Components = new Components 
   systems: System[]

   constructor(systems: System[]){
      this.systems = systems
   }

   iterate(){
      this.systems.forEach(s=>s(this))
   }
 }
