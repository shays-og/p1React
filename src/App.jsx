import './App.css'
import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Otp } from './components/Otp'

function App() {
  const [colorEnabled, setColorEnabled] = useState(false);


  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Userdata colorEnabled={colorEnabled} setColorEnabled={setColorEnabled} />} />
        <Route path="/otp" element={<Otp colorEnabled={colorEnabled}/>} />
      </Routes>
    </BrowserRouter>
  </>
}

function Userdata({ colorEnabled, setColorEnabled }) {
  const [continued, setContinued] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();


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
      if (ageYears > 18 || (ageYears === 18 && ageMonth > 0) || (ageYears === 18 && ageMonth === 0 && ageDay >= 0)) {
        console.log("Checking logic for age verification.");
        setColorEnabled(true);
      }
    }, 1000)

    return () => clearTimeout(timeOut);
  }, [userInput])


  const mailCheck = (e) => {
    const value = e.target.value;
    setUserEmail(value);
    console.log("Valid Mail");
    setColorEnabled(true);
  }

  const continueButton = () => {
    navigate("/otp")
    console.log("Problem solved in navigating to /otp route");
    setColorEnabled(false);

  }

  return (
    <>
      {continued ? (<Layout
        textHead={"Let's Get Started"}
        description={""}>
        <Input type={"text"} placeholder={"EmailId"} userInput={userEmail} validCheck={mailCheck} />
        <Button onClick={continueButton} disabled={colorEnabled}>Continue</Button>
      </Layout>
      ) : (
        <Layout
          textHead={"Verify Your Age"}
          description={"Please confirm your birth year. This data will not be stored."}>
            <Input type={"text"} placeholder={"Your Birth Year"} userInput={userInput} validCheck={dateCheck} />
          <Button onClick={buttonOnClick} disabled={colorEnabled}>Continue</Button>
        </Layout>
      )}
    </>
  );


}

// function Otp({ colorEnabled }) {

//     const continueButton = () => {
//       console.log("Verification log on OTP page")
//     }

//     return <>
//     <Layout
//           textHead={"Check Your Email For A Code"}
//           description={"Please enter the verification code sent to your email id ..."}>
//           <InputOtp />
//           <Button onClick={continueButton} disabled={colorEnabled}>Verify</Button>
//         </Layout>
//     </> 
//   }

//   function InputOtp() {
    
//     return <>
//       <input type='text' className='bg-[#18395F] w-12 h-8 m-2 p-4' />
//       <input type='text' className='bg-[#18395F] w-12 h-8 m-2 p-4' />
//       <input type='text' className='bg-[#18395F] w-12 h-8 m-2 p-4' />
//       <input type='text' className='bg-[#18395F] w-12 h-8 m-2 p-4' />
//       <input type='text' className='bg-[#18395F] w-12 h-8 m-2 p-4' />
//       <input type='text' className='bg-[#18395F] w-12 h-8 m-2 p-4' />
//       </>
//   }
export default App
