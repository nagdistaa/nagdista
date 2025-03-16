
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='h-[100vh] relative'>
    <NavBar/>
   <div className="cards w-full flex justify-between items-center flex-wrap px-[15px]">
   <Card projectName='landing loader' projectSrc='https://nagdista-loader.netlify.app/'/>
   <Card projectName='loader' projectSrc='https://nagdista-loader.netlify.app/'/>
   <Card projectName='loader' projectSrc='https://nagdista-loader.netlify.app/'/>
  
  
   </div>
   <Footer author='Mhmoud Alnagdy' />
    </div>
  )
}

export default App
