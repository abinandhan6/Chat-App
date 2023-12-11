import React from "react";

const Input= () =>{
    return(
        <div className="input">
            <input type="text"></input>
            <div type="send">
                <img src="" alt=""></img>
                <input type="file" style={{display:"none"}} id="file"></input>
                <label htmlFor="file">
                    <img src="" alt="" />
                </label>
                <button>send</button>
            </div>
        </div>
    )
}

export default Input;