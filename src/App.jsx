import React, { useState, useEffect } from 'react';
import './App.css';
import { FaStar } from "react-icons/fa";
import Data from './Data.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCartShopping } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import Header from './Navbar/Header.jsx';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 ,once:true});
  }, []);

 

  return (
    <div>
     <Header/>
      <div className="container">

    
   {Data.map((shirt) => (
            <div key={shirt.id}className='shirt-con' data-aos="fade-up">
            <Link key={shirt.id} to={`/buy/${shirt.id}`}><img src={shirt.image} alt={shirt.name} /></Link>
              <p>{shirt.name}</p>
            
              <h3>&#8377;{shirt.price}</h3>
                <span><FaStar/> {shirt.rating}</span>
            </div>
          ))}
 </div>
   </div>
  
  );
}

export default App;