import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Button } from './components/Button'
import { Input } from './components/Input'

function App() {

  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Ageverification/ >}/>
    </Routes>
  </BrowserRouter>    
  </>
}

function Ageverification() {
  const [colorEnabled, setColorEnabled] = useState(false);

  return (<div>
    <Layout 
    textHead={"Verify Your Age"} 
    description={"Please confirm your birth year. This data will not be stored."}>
      <Input type={"text"} placeholder={"Your Birth Year"} setColorEnabled={setColorEnabled} />
      <Button disabled={colorEnabled}>Continue</Button>
    </Layout>
  </div>)
}



function Hithere() {
  return <div>
    <h1>Hi there</h1>
  </div>
}
export default App
