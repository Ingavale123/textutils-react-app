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
            <>
            <div className="container">
                <h3>{props.heading}</h3>
                <div className="mb-3"> 
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="textform" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary me-2" onClick={handleUpOnClick}>Convert to Uppercase</button> 
                <button type="button" className="btn btn-primary" onClick={handleLpOnClick}>Convert to Lowercase</button>
           </div>
           <div className="container">
            <h4>Your Text Summary</h4>
            <p>{text.split(" ").length} words and {text.length} Characters</p>
            <p>{0.008 *text.split(" ").length } Minutes read</p>   { /* 1/125 = 0.008 i.e is 1 minute divide by 125 words*/ }
            <h4>Preview</h4>
            <p>{text}</p>
           </div>
            </>
        )
    
}
export default Textform;