"use client"
import { useSession,signIn,signOut } from "next-auth/react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { div, h1, hr } from "framer-motion/client";
import TasksD from "./components/TasksD";
export default function Dashboard(){
const {data:session} = useSession()
  if (session){
    return(
      <>
      <div className="flex p-10 flex-col gap-10 w-[100%]">
        <div className="text-white flex  flex-row justify-between w-[100%] h-[10%] border-b-1 ">
          <h1 className="text-5xl  font-bold items-center content-center">Dashboard</h1>
          <p className="flex flex-row content-center items-center gap-5"> <img src={session.user?.image}  className="rounded-4xl w-10 h-10" alt="" /> {session.user?.name}</p>
        </div>

        <TasksD></TasksD>
      </div>
        

      </>

  )
  }
  else{
    return(<>
            <HeroGeometric 
            badge="DevBoard"
            title1 = "Welcome to"
            title2="DevBoard"/>
          </> 
          )
  }
}