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
      <Route path="/" element={<Userdata/ >}/>
    </Routes>
  </BrowserRouter>    
  </>
}

function Userdata() {
  const [colorEnabled, setColorEnabled] = useState(false);
  const [continued, setContinued] = useState(false);

  const buttonOnClick = () => {
    setContinued(true);
    if (continued){

    };
  }
  return (<div>
    <Layout 
    textHead={"Verify Your Age"} 
    description={"Please confirm your birth year. This data will not be stored."}>
      <Input type={"text"} placeholder={"Your Birth Year"} setColorEnabled={setColorEnabled} />
      <Button onClick={buttonOnClick} disabled={colorEnabled}>Continue</Button>
    </Layout>
  </div>)
}

export default App
