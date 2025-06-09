import React, { useState } from 'react'
import App from './App.jsx'
import Buy from './Buy.jsx'
import Pay from "./Pay.jsx"
import About from "./About.jsx";
import Landing from './components/Landing.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom'




function Index() {
  const [count, setCount] = useState(0)
  

  return (
  
        <BrowserRouter>
      <Routes>
        
<Route path='/' element={<Landing/>}/>
<Route path='/buy/:id' element={<Buy/>}/>
<Route path='/pay/:id' element={<Pay/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/shop' element={<App/>}/>


      </Routes>
      </BrowserRouter>
      
  )
}

export default Index
