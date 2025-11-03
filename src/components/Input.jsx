
import { useEffect, useState } from "react"
export function Input({
  type,
  placeholder,
  setColorEnabled
}) {

  const [userDate, setUserDate] = useState("");

  const dateCheck = (e) => {
    const value = e.target.value;
    setUserDate(value);
    }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      const date = new Date(userDate);
      const today = new Date();
      const ageYears = today.getFullYear() - date.getFullYear();
      const ageMonth = today.getMonth() - date.getMonth();
      const ageDay = today.getDay() - date.getDay();
      if (ageYears > 18 || (ageYears === 18 && ageMonth > 0) || (ageYears === 18 && ageMonth === 0 && ageDay >= 0) ) {
        console.log("Checking logic for age verification.");
        setColorEnabled(true);
      }
    }, 2000)

    return () => clearTimeout(timeOut);
  }, [userDate])
  



  return <div className="mb-8 -mt-4 ">
    <input type={type} className="bg-[#18395F] w-64 h-8 rounded-lg outline-none text-sm px-4 placeholder-gray-500/75 placeholder:text-sm" placeholder={placeholder} value={userDate} onChange={dateCheck} />
  </div>
}