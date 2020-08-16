
import {ECS,Components} from "./ecs"
import {renderSystemFactory} from "./render"
import {physicsSystem} from "./physics"
import {spawnerSystem} from "./spawning"
import {Pos} from "./geometry"
import {System} from "./types"

let root = document.querySelector("#app")
let el = document.createElement("canvas")

let W = 800
let H = 800

el.width = W 
el.height= H 
root.appendChild(el)

let systems: System[] = [
   renderSystemFactory(el),
   physicsSystem,
   spawnerSystem,
]

const ecs = new ECS(systems)

for(let i = 0; i < 10; i++){
   let idx = ecs.index.get()
   ecs.components.position[idx] = new Pos(Math.random()*H,Math.random()*W)
   ecs.components.color[idx] = "red"
}

const main = ()=>{
   ecs.iterate()
   requestAnimationFrame(main)
}

main()

