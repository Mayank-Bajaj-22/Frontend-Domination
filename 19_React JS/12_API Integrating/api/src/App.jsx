// import axios from "axios";
// const App = () => {

//   const addproducts = () => {
//     const api = "https://fakestoreapi.in/api/products";

//     axios
//       .post(api, {
//         title: "test product",
//         price: 13.5,
//         description: "carry bag",
//         image: "https://i.pravatar.cc",
//         category: "electronic",
//       })
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="pt-[5%] pl-[5%]">
      
//       <button onClick={addproducts} className="rounded-md bg-red-300 px-5 py-2">
//         Add Product
//       </button>
      
//     </div>
//   );
// };

// export default App;



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