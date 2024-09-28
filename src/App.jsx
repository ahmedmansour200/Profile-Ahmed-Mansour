import './App.css'
import Education from './componants/Education'
import Experience from './componants/Experience'
import Footer from './componants/Footer'
import Header from './componants/Header'
import Navbar from './componants/navbar'

function App() {

  return (
    <div className='bg-red-50'>
    <div className=' container max-w-screen-xl mx-auto px-4'> 
  <Navbar/>
  <Header/>
  <Education/>
    <Experience/>
    </div>
 <Footer/>
 </div>
  )
}

export default App
