import React from 'react'
import Home from './components/Home'
// import Customers from './components/Customers'
// import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Home />
      <nav>
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/Customers">Customers</Link> */}
      </nav>
      {/* <Routes>
        <Route path='/' element={<Home name='DP Automotive Service' />} />
        <Route path='/Customers'  element={<Customers />}/>
      </Routes> */}
    </div>
  )
}


export default App;
