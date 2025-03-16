
import { ReactNode } from "react";

interface Iprops {
link:string; 
icon:ReactNode;
}

const FooterIcon = ({link , icon }:Iprops)=>{
return(
    <div className="bg-red-500 p-[5px] rounded-full">
        <a href={link} className="text-white">{icon}</a>
    </div>
)
}

export default FooterIcon ; 