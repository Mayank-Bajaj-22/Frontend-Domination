import { Link, Route, Routes } from 'react-router-dom'
import Show from './Components/Show';
import Home from './Components/Home';
import Services from './Components/Services';

const App = () => {
  return (
    <div className='pt-[2%] pl-[5%]'>
      <nav className='flex justify-center gap-10 mb-3'>
        <Link to="/">Home</Link>
        <Link to="/show">Show</Link>
        <Link to="/services">Services</Link>
      </nav>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/show' element={<Show />} />
        <Route path='/services' element={<Services   />} />
      </Routes>
    </div>
  )
}

export default App