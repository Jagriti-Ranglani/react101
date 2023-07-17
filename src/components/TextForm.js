import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase button was clicked " + text);
        setText(text.toUpperCase());
        props.showAlert("Text converted to Upper Case", "success");
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Text converted to Lowwer Case", "success");
    }

    const handleSentenceClick = () => {
        let str = text.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        // console.log(str);
        setText(str.join(' '));
        props.showAlert("Text converted to Title Case", "success");
    }

    const handleCopy = () => {
        // console.log("Text copied to clipboard");
        let txt = document.getElementById("myBox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.showAlert("Text Copied to clipboard", "success");
    };

    const handleExtraSpace = () => {
        let newtxt = text.split(/[ ]+/);
        setText(newtxt.join(" "));
        props.showAlert("Extra spaces removed", "success");
    };

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
                    <textarea className="form-control" style={{ backgroundColor: props.mode === "light" ? "white" : "grey", color: props.mode === "light" ? "black" : "white" }} autoFocus onChange={handleOnChange} value={text} id="myBox" rows="15"></textarea>
                </div>
                <button className="btn btn-primary mt-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-success mt-2 mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-info mt-2 mx-3" onClick={handleSentenceClick}>Convert to Sentence Case</button>
                <button className="btn btn-dark mt-2 mx-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-danger mt-2 mx-3" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-4">
                <h2>Your text summary</h2>
                <p>{text.trim().split(" ").length} words and {text.trim().length} characters.</p>
                <p>{0.008 * text.trim().split(" ").length} minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0 ? text : "Enter something to preview"}</p>
            </div>
        </>
    )
}
