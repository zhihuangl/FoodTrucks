import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Foodtrucks'
import Foodtrucks from './Components/Foodtrucks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='Header'>
        <img src="https://heroic-pixie-6d7f91.netlify.app/awning.png" />
      </div>
      <div>
        <h1>Food Truck Favorites</h1>
        <Foodtrucks/>
      </div>
    </div>
  )
}

export default App
