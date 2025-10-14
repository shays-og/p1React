
export function Button({
    disabled,
    children
}) {
    return <div className="mb-16 -mt-4">
        <button className={`bg-bermuda-gray px-16 py-2 w-64 text-sm rounded-lg`} >{children}</button>
    </div>
}