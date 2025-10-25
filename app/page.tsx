"use client"
import Dashboard from "./Dashboard";
import { useSession,signIn,signOut } from "next-auth/react";
import Navbar from "./Navbar";
import { Router } from "lucide-react";

export default function Home() {
  const {data:session} = useSession()
    if (session){
      return(        
        <>
        <div className="flex flex-row">
          <Navbar></Navbar>
          <Dashboard></Dashboard>
        </div>
        
        </>
        
      )
    }else{
      return(
        <Dashboard></Dashboard>
      )
    }
 
}
