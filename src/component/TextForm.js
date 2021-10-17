import React, { useState } from 'react'



export default function TextForm(props) {
   

    const [Text, setText] = useState("");
    const handleupclick = () => {
        console.log("uppercase button clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () => {
        console.log("uppercase button clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleCopy =()=> {
        var Text =document.getElementById("mybox");
        Text.select();
        navigator.clipboard.writeText(Text.value);
        props.showAlert("Text Copied","success");
    }
    const handleExtraSpaces = ()=> {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));

    }

    // }


    // const capitalize = () => {
    //         let newText = Text.split(" ").map((currentValue) => {
    //             let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
    //             return newText;
    //         });
    //         setText(newText.join(" "));
    //     }
    const capitalize = () => {
        const arr = Text.split(" ");
        //loop through each element of the array and capitalize the first letter.
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        //Join all the elements of the array back into a string 
        //using a blankspace as a separator 
        let newText = arr.join(" ");
        setText(newText);
    }

    const handleclearClick = () => {
        console.log("uppercase button clicked" + Text);
        let newText = " ";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const onchange = (event) => {
        console.log("on change is working");
        setText(event.target.value);
    }
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>



            <h1>{props.heading}</h1>

            <div class="mb-3"style={{backgroundcolor: props.mode==='dark'?'#042743':'white'}}>

                <textarea class="form-control" id="mybox" value={Text} onChange={onchange} style={{backgroundcolor: props.mode==='dark'?'#042743':'white'}} rows="12"></textarea>
                <br />
                <button type="button" class="btn btn-primary mx-2" onClick={handleupclick}>Convert to uppercase</button>

                {/*  &nbsp; to make space between buttons  */}

                <button type="button" class="btn btn-success mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button type="button" class="btn btn-warning mx-2" onClick={capitalize}>Title case</button>
                <button type="button" class="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
                <button type="button" class="btn btn-warning mx-2" onClick={handleExtraSpaces}>Remove extra space</button>
                

                <button type="button" class="btn btn-danger mx-2" onClick={handleclearClick}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Summary of your Text :</h2>
                <p>{Text.split(" ").length} words and {Text.length} Character</p>
                <p>{0.008 * Text.split(" ").length} Minutes to Read</p>
                <h3>Preview :</h3>
                <p>{Text.length>0?Text:"Enter something to the Textbox above preview"}</p>

            </div>
            </div>

        </>
    );
}
