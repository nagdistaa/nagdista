import { Github } from "lucide-react";

const NavBar = ()=>{
return(
    <div className="bg-red-600 flex justify-between items-center shadow sticky z-100 top-0 left-0 w-full p-[10px] mb-[20px]">
        <h1 className="text-white font-[700]  text-[22px] cursor-pointer">Nagdista</h1>
        <a href="https://github.com/nagdistaa" className=""><Github className="text-white" size={30}/></a>
    </div>
)
}

export default NavBar ; 