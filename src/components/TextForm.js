import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'


let flag = false;
export default function TextForm(props) {

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        setPreview(newtext);
    };
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        setPreview(newtext);
    };

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
            <div className="container">

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onClick={clear} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={handleUpClick}>Conver To UpperCase</button>
                </div>
                <div>
                    <button className="btn btn-primary my-3" onClick={handleLoClick}>Conver To LowerCase</button>
                </div>
            </div>
            <div className="container my-5">
                <h2>Your text summary</h2>
                <p>{wordCount} words and {charCount} characters</p>
                <p>{0.008 * wordCount} Minutes read</p>
                <h2>Preview</h2>
                <p className="border border-dark bg-dark text-light">{preview}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}
