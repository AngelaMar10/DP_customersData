import {useState} from 'react'
// import { Routes, Route} from 'react-router-dom'
import Customers from './Customers'
import LoginForm from './LoginForm'



function Home() {
  const adminUser = {
    email: "dp@admin.com",
    password: "admin1234"
  
  }
  
  // const logo = '../dp_Logo.png'
  const [user, setUser] = useState({name: "", email: ""})
  const [error, setError] = useState("")

  const Login = details => {
    // console.log(details)
    if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in")
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      setError("Details do not match!")
    }
  }
  

  const Logout = () => {
    setUser({name: "", email: ""})
  }

  return (
    
    // If the admin isn't login render (?)the welcome sign
      <div className="Home">
        
  
        <h2>DP Automotive services Customers Data</h2>
        
        {(user.email !== "") ? 
          (
            <div className='login'> 
              <h2>
              Welcome {user.name}  
              </h2>
              <button className="logout" onClick={Logout}>Logout</button>
              <Customers />
              {/* <Routes>
              <Route path='/'  element={<Customers />}/>
              </Routes> */}
              {/* <button className="logout" onClick={Logout}>Logout</button> */}
            </div>
          ) : (
          <LoginForm Login={Login} error={error}  />
          
      )}
      
    </div>
  )
  
}

export default Home