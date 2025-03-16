import { Eye } from "lucide-react";

interface Iprops {
projectName: string;
projectSrc: string; 
}

const Card = ({projectName , projectSrc}:Iprops)=>{
return(
    <div className="flex items-center justify-between p-[15px] m-[5px] shadow  rounded-[8px] w-[100%] md:w-[48%] lg:w-[30%]">
        <h1 className="capitalize text-[18px]">{projectName}</h1>
       <div className="bg-red-600 text-white p-[3px] rounded-full flex items-center justify-center">
       <a href={projectSrc}><Eye  /></a>
       </div>
    </div>
)
}

export default Card ; 