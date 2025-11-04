import './App.css'
import { useEffect, useState } from "react"
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
  const [userInput, setUserInput] = useState("");
  const [userEmail, setUserEmail] = useState("");


  const buttonOnClick = () => {
    setContinued(true);
    setColorEnabled(false);
    setUserInput("");
 
  }

  const dateCheck = (e) => {
      const value = e.target.value;
      setUserInput(value);
    }
    useEffect(() => {
      const timeOut = setTimeout(() => {
        const date = new Date(userInput);
        const today = new Date();
        const ageYears = today.getFullYear() - date.getFullYear();
        const ageMonth = today.getMonth() - date.getMonth();
        const ageDay = today.getDay() - date.getDay();
        if (ageYears > 18 || (ageYears === 18 && ageMonth > 0) || (ageYears === 18 && ageMonth === 0 && ageDay >= 0) ) {
          console.log("Checking logic for age verification.");
          setColorEnabled(true);
        }
      }, 1000)
  
      return () => clearTimeout(timeOut);
    }, [userInput])


    const mailCheck = (e) => {
      const value = e.target.value;
      setUserEmail(value);
      console.log("Valid Mail")
    }

    if (continued) {
      return (<div>
        <Layout 
        textHead={"Let's Get Started"} 
        description={""}>
          <Input type={"text"} placeholder={"EmailId"} userInput={userEmail} validCheck={mailCheck} />
          <Button onClick={buttonOnClick} disabled={colorEnabled}>Continue</Button>
        </Layout>
      </div>)
    } else {
      return (<div>
        <Layout 
        textHead={"Verify Your Age"} 
        description={"Please confirm your birth year. This data will not be stored."}>
          <Input type={"text"} placeholder={"Your Birth Year"} userInput={userInput} validCheck={dateCheck} />
          <Button onClick={buttonOnClick} disabled={colorEnabled}>Continue</Button>
        </Layout>
      </div>)
    }
  
}

export default App
