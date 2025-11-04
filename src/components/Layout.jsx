
export function Layout({ 
    textHead, 
    description, 
    children 
}) {
    return <div className="flex flex-col justify-center items-center bg-prussian-blue h-screen text-white">
      <div className="mb-16 -mt-16 text-xl">
        <span className="text-turquoise">Webinar</span>.gg
      </div>
      <div className="mb-16  text-xl">{textHead}</div>
      {description && <div className="mb-8 text-xs">{description}</div>}
      {children}
    </div>
  }