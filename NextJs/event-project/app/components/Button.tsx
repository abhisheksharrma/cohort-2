"use client"

const Button = () => {
  return (
    <button className="px-4 py-2 bg-mist-900"
            onClick={ () => {alert("Button clicked")} }
            >Click Me</button>
  )
}

export default Button