"use client"
import { data, div, style } from "framer-motion/client"
import { motion } from "framer-motion"
import Link from "next/link"
import { LayoutDashboard,Bookmark ,LogOut,ClipboardList,NotebookText} from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default function Navbar()
{
    const {data:session} = useSession()
    const router = useRouter();
    function signout(){
      
        signOut()
    }
    if (session){
        console.log(session)
        return(
        <>
        <motion.div whileHover={
            {
                width:"15%"
            }
        } className="bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]  overflow-x-hidden h-screen w-10 flex flex-col justify-between gap-3">
            <div className="flex flex-col mt-30 gap-10">
                <Link href="/"className="flex flex-row text-white gap-5 ml-2 content-center items-center"><LayoutDashboard className="text-neutral-200 h-5 w-5 flex-shrink-0" ></LayoutDashboard><motion.p whileHover={{marginLeft:"2%"}}
                    transition={{
                        duration:0.1
                    }}
                    
                >Dashboard</motion.p></Link>

                <Link href="/Pages/tasks"className="flex flex-row text-white gap-5 ml-2 content-center items-center"><ClipboardList className="text-neutral-200 h-5 w-5 flex-shrink-0" ></ClipboardList><motion.p whileHover={{marginLeft:"2%"}}
                transition={{
                    duration:0.1
                }}
                >Tasks</motion.p></Link>

                <Link href="/Pages/bookmark"className="flex flex-row text-white gap-5 ml-2 content-center items-center"><Bookmark className="text-neutral-200 h-5 w-5 flex-shrink-0" ></Bookmark><motion.p whileHover={{marginLeft:"2%"}}
                transition={{
                    duration:0.1
                }}
                

                
                >Bookmark</motion.p></Link>

                <Link href="/Pages/notes"className="flex flex-row text-white gap-5 ml-2 content-center items-center"><NotebookText className="text-neutral-200 h-5 w-5 flex-shrink-0"></NotebookText><motion.p whileHover={{marginLeft:"2%"}}
                transition={{
                    duration:0.1
                }}
                >Notes</motion.p></Link>

                <button onClick={()=>signout()} className="flex flex-row mb-10 text-white gap-3 ml-3 content-center items-center  cursor-pointer"><LogOut className="text-neutral-200 h-5 w-5 flex-shrink-0"></LogOut><motion.p whileHover={{marginLeft:"2%"}}
                transition={{
                    duration:0.1
                }}
                >Logout</motion.p></button>
            </div>
            <div className="text-white w-100 flex  gap-5 ml-2 mb-20 flex-row">
                <img src={session.user?.image} width={25} className=" rounded-2xl"  alt="" />
                <h1>{session.user?.name}</h1>
            </div>


            
        </motion.div>

    
        </>
        )
        
    }
    
}