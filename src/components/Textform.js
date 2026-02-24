import { useState } from "react";

function Textform(props) {  
    const [text, setText] = useState("This is for Testing ");

    const handleUpOnClick =() =>{
        let newtext = text.toUpperCase()
        setText(newtext)
        console.log("Button clicked")
    }

      const handleLpOnClick =() =>{
        let newtext = text.toLowerCase()
        setText(newtext)
        console.log("Button clicked")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
        return (
            <form>
                <h3>{props.heading}</h3>
                <div className="mb-3"> 
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="textform" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary me-2" onClick={handleUpOnClick}>Convert to Uppercase</button> 
                <button type="button" className="btn btn-primary" onClick={handleLpOnClick}>Convert to Lowercase</button>
            </form>
        )
    
}
export default Textform;