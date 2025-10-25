"use client"
import Navbar from "@/app/Navbar"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
export default function Bookmarks(){
    const router = useRouter()
    const {data:session} = useSession()
    if (session){
        return(<>

            <div className="flex flex-row">
                <Navbar></Navbar>
                <h1 className="text-white">BookMarks</h1>
            </div>
        
        </>
    )
    }else{
        router.push('/')
    }

    
}