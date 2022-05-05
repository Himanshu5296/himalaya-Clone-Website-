import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Cart} from "./components/Cart Page/cart"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cart />
    </div>
  )
}

export default App
