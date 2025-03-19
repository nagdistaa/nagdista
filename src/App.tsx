
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import {projectsData} from "./data/projects"

function App() {

  return (
    <div className='h-[100vh] relative'>
    <NavBar/>
   <div className="cards w-full flex justify-between items-center flex-wrap px-[15px]">
    


    {projectsData.map((el , idx)=>{
      return(   <Card projectName= {el.projectName} projectSrc= {el.projectSrc}/>)
    })}
  
   </div>
   <Footer author='Mhmoud Alnagdy' />
    </div>
  )
}

export default App
