import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
      
    </div>
  )
}

export default RootLayout