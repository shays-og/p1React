
export function Button({
    onClick,
    disabled,
    children
}) {
    return <div className="mb-16 -mt-4">
        <div onClick={onClick} className={`flex justify-center px-24 py-2 w-64 text-sm rounded-lg  ${disabled ? "bg-turquoise cursor-pointer" : "bg-bermuda-gray" }`} >{children}</div>
    </div>
}