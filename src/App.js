import React from 'react'
import Home from './components/Home'
import Customers from './components/Customers'

import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Customers">Customers</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home name='DP Automotive Service and Repais' />} />
        <Route path='/Customer' element={<Home name='DP Automotive Service and Repais' />} />
      </Routes>
    </div>
  )
}

  


export default App;
