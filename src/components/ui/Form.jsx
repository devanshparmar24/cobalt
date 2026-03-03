import React from 'react'
import Button from './Button';

function Form() {
  return (
    <form
    onSubmit={(e) => {
      e.preventDefault();
      console.log("Email submitted");
    }}
    className="flex items-center bg-[#0F0F12] border border-white/10  rounded-full px-2 h-12 w-full max-w-md focus-within:border-white/20 transition"
  >
    {/* Email Input */}
    <input
      type="email"
      required
      placeholder="Enter your email"
      className="flex-1 min-w-0 bg-transparent outline-none  text-white placeholder:text-white/40 px-4 text-sm"
    />

    {/* Button */}
      <Button className="h-9 px-5"> Submit </Button>
  </form>
  )
}

export default Form