import React from 'react';
import { useState } from 'react';

const Signup = () => {
const [input, setInput] = useState({
  email: "",
  password: "",
  confirmPassword: "",
})
console.log(input);
const handleSubmit = (e) => {
  e.preventDefault()
}

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="text"
          id="email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          id="password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="text"
          id="confirmPassword"
          value={input.confirmPassword}
          onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    
    
    </div>

  )
}

export default Signup