import {useState} from 'react'
// using a huck useState allow us to change from a class to a function
function Home(props) {
  const [counter, setCounter] = useState(0)
    
   
  const increaseCounter = () => {
    setCounter(counter + 1)
  }


  return (
    <div className="Home">
      <h1>Welcome to {props.name} Data management App</h1>
      <p>Counter: {counter}</p>
      <button onClick={increaseCounter}>Count</button>
    </div>
  )
  
}

export default Home