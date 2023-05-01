import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet/>
      </main>
      
    </div>
  )
}

export default RootLayout