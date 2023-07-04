import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase button was clicked " + text);
        setText(text.toUpperCase());
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) => {
        // console.log("OnChange");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // setText("Jagriti");

    return (
        <>
            <div className="container-fluid">
                <h2>{props.heading}</h2>
                <div className="form-group">
                    <textarea className="form-control" autoFocus onChange={handleOnChange} value={text} id="myBox" rows="15"></textarea>
                </div>
                <button className="btn btn-primary mt-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-success mt-2 mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
            </div>
            <div className="container my-4">
                <h2>Your text summary</h2>
                <p>{text.trim().split(" ").length} words and {text.trim().length} characters.</p>
                <p>{0.008 * text.trim().split(" ").length} minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
