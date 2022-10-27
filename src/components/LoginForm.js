import React from "react";
import {useState} from "react"

function LoginForm({Login, error}) {
  const [details, setDetails]= useState({name: "", email: "", password: ""})

  // To handle the submit
  const submitHandler = event => {
    event.preventDefault()

    Login(details)
  }
  return (
  <form className="login-form" onSubmit={submitHandler}>
    <div >
      <h2>Login</h2>
      {(error !== "") ? (<div>{error}</div>): ""}
      <div className="login-form">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onChange={event => setDetails({...details, name: event.target.value})} value={details.name}/>
      </div>
      <div className="login-form">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" onChange={event => setDetails({...details, email: event.target.value})} value={details.email}/>
      </div>
      <div className="login-form">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" onChange={event => setDetails({...details, password: event.target.value})} value={details.password}/>
      </div>
      <button>Login</button>
      {/* <input type="Submit" value="Login"/> */}
    </div>
  </form>
  )
}

export default LoginForm