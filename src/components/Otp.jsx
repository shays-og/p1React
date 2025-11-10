import { Layout } from './Layout'
import { Button } from './Button'
import { useRef, useState } from 'react'

export function Otp({ colorEnabled }) {
  const [otpArray, setOtpArray] = useState([]);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  const continueButton = () => {
    console.log("Verification log on OTP page")
  }

  return <>
    <Layout
      textHead={"Check Your Email For A Code"}
      description={"Please enter the verification code sent to your email id ..."}>

      <div className='flex justify-center'>

      {Array(6).fill(1).map((x, index) => <SubOtpBox key={index} onDone={() => {
        ref2.current.focus();
      }} goBack={() => {
        console.log("goBack function has been called")
      }
    } />)}

      </div>
      <Button onClick={continueButton} disabled={colorEnabled}>Verify</Button>
    </Layout>
  </>
}



function SubOtpBox({
  refference,
  onDone,
  goBack
}) {
  const [inputBoxVal, setInputBoxVal] = useState("");

  return <>
    <input value={inputBoxVal} ref={refference} onKeyUp={(e) => {
      if(e.key == "Backspace") {
        goBack()
      } 
}} onChange={(e) => {
  const val = e.target.value;

  if ( val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val == "9") {
    setInputBoxVal(val);
    onDone();
  }
}}
type='text' className='bg-[#18395F] w-8 h-10 -mt-4 mb-8 ml-1 mr-1 p-4 rounded-lg'/>
  </>
}