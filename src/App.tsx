
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='h-[100vh] relative'>
    <NavBar/>
   <div className="cards w-full flex justify-between items-center flex-wrap px-[15px]">
    {/* loader  */}
   <Card projectName='landing loader' projectSrc='https://nagdista-loader.netlify.app/'/>
   {/* store */}
   <Card projectName=' store' projectSrc='nagdista-store.netlify.app'/>
   {/* dictionary */}
   <Card projectName='dictionary' projectSrc='https://nagdista-dictionary.netlify.app/'/>
   {/* youtube audio */}

   <Card projectName='youtube audio' projectSrc='nagdista-youtube-audio.netlify.app'></Card>
  {/*  */}
   <Card projectName='radio' projectSrc='https://nagdista-radio.netlify.app/'></Card>
  {/*  */}
  
   <Card projectName='battery' projectSrc='https://nagdista-radio.netlify.app/'></Card>
  {/*  */}
  
   </div>
   <Footer author='Mhmoud Alnagdy' />
    </div>
  )
}

export default App
