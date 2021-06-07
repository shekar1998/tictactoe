import React, { Component } from 'react';

const InputComponent = (props) => {
    return(
        <div className="maincomponent">
            <label>{props.lable}</label>
            <input type="text"
            name={props.text}
            onChange={props.ocChange}
            ></input>
        </div>
    )
}

export default InputComponent;