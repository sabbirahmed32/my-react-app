import React, { useState } from "react"


function Usestate(){
    const [text, setText] = useState("");

    return(
        <>
        <h2>UseState Hooks</h2>
        <input type="text" onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        />
        <p>You wrote: {text}</p>
        </>
    )
    
}export default Usestate