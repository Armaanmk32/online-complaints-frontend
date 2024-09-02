import { useState } from "react";
import ShowCase from "./ShowCase";
import SideNave from "../page/SideNave";
function Header(){


    const [admin, setAdmin]=useState(false)


    const handleAdmin = (event)=>{
        event.preventDefault()
        setAdmin(true)
    }

   
    
    return <div> 
     <div style={{display: admin == true ? "none" : "" }} className="bg-sky-500 items-center relative text-white px-10 py-4 flex justify-between">
        <h1 className="text-3xl font-serif font-bold ">E- <span className="text-[#023047]">Cabasho</span></h1>
        <ul className="flex gap-10 text-3xl">
            <li>Home</li> 
            <li>About</li>
        </ul>
        
        
        <button onClick={handleAdmin}   className="bg-white rounded-md  text-black text-xl py-1 px-10">  Addmin</button>
        
    
    </div>

    {
        admin == true ? "" : <ShowCase/>
    }
    
    {
       admin == true ? <SideNave/> : ""
    }

    
    </div>
}

export default Header;