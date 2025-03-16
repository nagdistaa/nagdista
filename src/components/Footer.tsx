
import { Github, Linkedin, Twitter } from "lucide-react";
import FooterIcon from "./FooterIcon";

interface Iprops {
author:string;

}

const Footer = ({author }:Iprops)=>{
return(
    <div className=" p-[15px] text-center fixed bottom-0 w-full mt-[20px]  flex items-center justify-between bg-white shadow-lg border-t-1 ">
   <div>
   <h2 className="font-[600]"> {author}</h2>
   </div>
   <div className="flex justify-between items-center gap-3">
   
<FooterIcon icon={<Linkedin/>} link="https://www.linkedin.com/in/nagdista/"/>
<FooterIcon icon={<Github/>} link="https://www.linkedin.com/in/nagdista/"/>
<FooterIcon icon={<Twitter/>} link="https://www.linkedin.com/in/nagdista/"/>

  
</div>
    </div>
)
}

export default Footer ; 