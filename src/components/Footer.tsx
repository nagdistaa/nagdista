interface Iprops {
author:string;
githubLink?:string;
twitter?:string;
linkedIn?:string;
facebook?:string;
youTube?:string;
telegram?:string;
}

const Footer = ({author }:Iprops)=>{
return(
    <div className=" p-[15px] text-center fixed bottom-0 w-full mt-[20px] bg-white">
    <h2>by | {author}</h2>
    </div>
)
}

export default Footer ; 