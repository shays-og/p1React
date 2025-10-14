import './App.css'
import { Button } from './components/Button'
import { Infotext } from './components/Infotext'
import { Inputbox } from './components/Inputbox'

function App() {

  return <div>
    <Base>
    <Infotext>Verify Your Age</Infotext>
      <div className="mb-8 text-xs">Please confirm your birth year. This data will not be stored.</div>
      <Inputbox></Inputbox>
      <Button>Continue</Button>
    </Base>
  </div>
}

function Base({ children }) {
  return <div className="flex flex-col justify-center items-center bg-prussian-blue h-screen text-white">
    <div className="mb-16 -mt-16 text-xl">
      <span className="text-turquoise">Webinar</span>.gg
    </div>
    {children}
  </div>
}
export default App
