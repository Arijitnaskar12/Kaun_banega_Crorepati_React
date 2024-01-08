import React from 'react'
import { useRef } from 'react'
const Start = ({setUsername}) => {
    const inputRef=useRef();
    const handleClick=()=>{
        setUsername(inputRef.current.value);
    }
  return (
    <div className='startDiv'>
        <input type="text" name="name" ref={inputRef} className="startInput" placeholder='Enter your name' />
        <button type="button" onClick={handleClick} className='startButton'>Submit</button>
    </div>
  )
}

export default Start