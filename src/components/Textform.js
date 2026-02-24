import { useState } from "react";

function Textform(props) {  
    const [text, setText] = useState("This is for Testing ");

    const handleOnClick =() =>{
        let newtext = text.toUpperCase()
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
                <button type="button" className="btn btn-primary" onClick={handleOnClick}>Convert to Uppercase</button>
            </form>
        )
    
}
export default Textform;