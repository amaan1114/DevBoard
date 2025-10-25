"use client"
import Navbar from "@/app/Navbar"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
export default function Notes(){
    const router = useRouter()
    const {data:session} = useSession()
    if (session){
        return(<>

            <div className="flex flex-row">
                <Navbar></Navbar>
                <h1 className="text-white">Notes</h1>
            </div>
        
        </>
    )
    }else{
        router.push('/')
    }

    
}