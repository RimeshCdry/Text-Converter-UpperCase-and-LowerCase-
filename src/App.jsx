import { useState } from 'react'
import './App.css'
import TextForm from './components/TextForm.jsx'

function App() {
  const [text, setText] = useState("")

  return (
    <>
      <TextForm/>
    </>
  )
}

export default App
