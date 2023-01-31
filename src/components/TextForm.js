import React, {useState} from 'react'


let flag=false;
export default function TextForm(props) {
    const handleUpClick = () => {        
        let newtext=text.toUpperCase();
        setText(newtext);
       
    }
    const handleOnChange = (event) => {    
        
        setText(event.target.value);
    }
    const clear = () => {
        if(flag===false){
            setText("");
            flag=true;
        }
    }
    const [text, setText] = useState("Enter text here");
    
    return (
        <div>    
               
            <h1>{props.heading}</h1>        
            <div className="mb-3">            
            <textarea className="form-control" value={text} onClick={clear} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Conver To UpperCase</button>
        </div>
    )
}
