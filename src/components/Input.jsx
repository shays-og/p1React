
export function Input({
  type,
  placeholder,
  userInput,
  validCheck
}) {

  return <div className="mb-8 -mt-4 ">
    <input type={type} className="bg-[#18395F] w-64 h-8 rounded-lg outline-none text-sm px-4 placeholder-gray-500/75 placeholder:text-sm" placeholder={placeholder} value={userInput} onChange={validCheck} />
  </div>
}