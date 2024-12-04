import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './component/header.jsx'
import BodyContent from './component/body.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='HeaderPosition'><Head></Head></div>
   <BodyContent></BodyContent>
     
    </>
  )
}

export default App
