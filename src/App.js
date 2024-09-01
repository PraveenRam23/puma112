import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import img1 from './Images/Home/pumalogo.png'
import Home from './Home';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Cartpage from './Cartpage';
import { FaBeer, FaRegUser } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { SiPuma } from 'react-icons/si';
import { BiLogIn } from 'react-icons/bi';
import Login from './Login';



function App() {
  return (
    <BrowserRouter>
    <div className='App'>
          <div className='blackheader'>EXTRA 5% DISCOUNT FOR ALL ONLINE PAYMENT </div>
      <div className='headerbox'>
      <Link className="navitems" to="home"><SiPuma /></Link>
      <div className='category'> 
          <p><Link className='navitem' to="Men">MEN</Link></p>
          <p><Link className='navitem' to="Women">WOMEN</Link></p> 
          <p><Link className="navitem" to="Kids">KIDS</Link></p> 

        </div>
        <div className='login'> 
          <div className='signup'>
            <p><Link className='navitems1' to = "Login"><FaRegUser /></Link></p>
          </div>
          
          {/* <p><Link className='navitem' to="SignIn">SIGNIN</Link></p>  */}
          <p><Link className='navitems1' to="Cartpage"><MdOutlineShoppingCart /></Link></p> 
          {/* <p><Link className='navitem' to="SignUp">SIGNUP</Link></p> */}
        </div>
        </div> 

        
        
  
      
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/puma112/" element={<Home/>}/>
        <Route path="/Men" element={<Men/>}/>
        <Route path="/Women" element={<Women/>}/>
        <Route path="/Kids" element={<Kids/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Cartpage" element={<Cartpage/>}/>
      </Routes>
    </div>
       
  
  </BrowserRouter>
     

  );
}


export default App