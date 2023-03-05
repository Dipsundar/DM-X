import React, { useState } from 'react'


export default function TextForm(props) {
    const [Text, setText] = useState("");

    const handleUpClick = () => {
        const newText = Text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase Successfully', 'success');
    }

    const handleLowClick = () => {
        const newText = Text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase Successfully', 'success');
    }

    const handleClearClick = () => {
        const newText = "";
        setText(newText);
        props.showAlert('Cleared all text Successfully', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode === 'dark' ? '#302c3e' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={Text} onChange={handleOnChange} rows="13"></textarea>
                </div>
                <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-2">
                <h1>Your text summary:</h1>
                <p>{Text.length === 0 ? '0' : Text.split(" ").length} words and {Text.length} characters</p>
                <p>{Text.length === 0 ? '0' : 0.008 * Text.split(" ").length} Minutes required to read</p>
                <h3 className='my-2'>Preview:</h3>
                <h6>{Text.length > 0 ? Text : 'Enter something in the above textbox to preview it'}</h6>
            </div>
        </>
    )
}
