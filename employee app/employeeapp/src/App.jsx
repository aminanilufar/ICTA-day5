import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'
import { Route, Routes } from 'react-router-dom'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form/> 
      <View/>*/}
      <Navbar />
      <Routes>
        <Route path='/f' element={<Form />} />
        <Route path='/v' element={<View />} />
      </Routes>
    </>
  )
}

export default App
