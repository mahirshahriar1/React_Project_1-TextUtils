import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'


let flag = false;
export default function TextForm(props) {

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        setPreview(newtext);
        props.showAlert("Converted to Uppercase!", "success");
    };
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        setPreview(newtext);
        props.showAlert("Converted to Lowercase!", "success");
    };
    const clearText = () => {
        let newtext = "";
        setText(newtext);
        setPreview(newtext);
        props.showAlert("Text Cleared!", "success");
    };
    const handleCopy = () => {       
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        setPreview(newtext.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        setPreview(event.target.value);
    };
    const clear = () => {
        if (flag === false) {
            setText("");
            flag = true;
        }
    }
    const [preview, setPreview] = useState("");
    const [text, setText] = useState("Enter text here");

    // word count
    const [wordCount, setWordCount] = useState(0);

    // character count
    const [charCount, setCharCount] = useState(0);
    useEffect(() => {
        if (flag === false) {
            return;
        }
        // array of words
        const words = text.split(' ');

        // update word count
        let wordCount = 0;
        words.forEach((word) => {
            if (word.trim() !== '') {
                wordCount++;
            }
        });
        setWordCount(wordCount);

        // update char count (including whitespaces)
        setCharCount(text.length);
    }, [text]);



    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                <h1>{props.heading}</h1>
                <div className="mb-3 ">
                    <textarea className="form-control fw-bold" value={text} onClick={clear} onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? '#6c757d' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myForm" rows="8"></textarea>
                </div>
                <div className="container my-3" >
                    <button disabled={text.length===0 || flag===false} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Conver To UpperCase</button>

                    <button  disabled={text.length===0 || flag===false} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Conver To LowerCase</button>

                    <button  disabled={text.length===0 || flag===false} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>

                    <button  disabled={text.length===0 || flag===false} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>

                    <button  disabled={text.length===0 || flag===false} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p className="fw-bold">{flag===true && (text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} {flag===false?0:''} words and {charCount} characters</p>
                <p className="fw-bold">{0.008 * wordCount} Minutes read</p>
                <h2 className="fw-bold">Preview</h2>
                <p className="border border-dark bg-dark text-light">{preview.length > 0 ? preview : "Enter Something in the textbox above to preview here."}</p>

            </div>
        </>
    )
}
/*  */
TextForm.propTypes = {
    heading: PropTypes.string
}


