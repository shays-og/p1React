import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Button } from './components/Button'
import { Infotext } from './components/Infotext'
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
    <Layout>
      <Infotext>Verify Your Age</Infotext>
      <div className="mb-8 text-xs">Please confirm your birth year. This data will not be stored.</div>
      <Input type={"text"} placeholder={"Your Birth Year"} setColorEnabled={setColorEnabled}></Input>
      <Button disabled={colorEnabled}>Continue</Button>
    </Layout>
  </div>)
}

function Layout({ children }) {
  return <div className="flex flex-col justify-center items-center bg-prussian-blue h-screen text-white">
    <div className="mb-16 -mt-16 text-xl">
      <span className="text-turquoise">Webinar</span>.gg
    </div>
    {children}
  </div>
}
export default App
