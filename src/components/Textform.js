import React, {useState} from 'react'
// import PropTypes from 'prop-types'


export default function Textform(props) {
    let disable
    const handleUpclick=()=>{
        console.log("Uppercase was clicked " + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success");
    }
    const handlelwclick=()=>{
        console.log("Uppercase was clicked " + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success");
    }
    const handlecleartext=()=>{
        console.log("Uppercase was clicked " + text);
        let newText=('');
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleOnchange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const handlecopy=()=>{
       // var cop=document.getElementById('mybox');
        //cop.select();
        navigator.clipboard.writeText(text);
        //document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard","success");
    }
    const handlextraspaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const [text, setText] = useState('Enter the text here');
    return (
        <>
         <div className="container" style={{color:props.mode==='light'?'#043460':'white'}}>
            <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="mybox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handlelwclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handlecleartext}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handlecopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handlextraspaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='light'?'#043460':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Word and {text.length} characters.</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to preview'}</p>
        </div>
        </>
    )
}
