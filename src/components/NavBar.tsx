import { Github } from "lucide-react";

const NavBar = ()=>{
return(
    <div className="bg-white flex justify-between items-center shadow sticky z-100 top-0 left-0 w-full p-[15px] mb-[20px]">
        <h1 className="text-black font-[700] text[22px] cursor-pointer">N<span className="text-red-500">agdista</span></h1>
        <a href="https://github.com/nagdistaa"><Github  /></a>
    </div>
)
}

export default NavBar ; 