import React from 'react';
import '../index.css'

const Cell = (props) => {
    let style={
        color : props.value ? 'black' : 'transparent',
        background : 'white'
    }
    if(props.val){
        let [a,b,c]= props.val;
       if(props.id === a || props.id === b || props.id === c)
       {
            style={
                color : props.value ? 'black' : 'transparent',
                background : '#9c88ff'
            }
       }
    }
    
    let value = props.value || 'X'; 
    return(
        <button style={style} className="cell" onClick={() => props.onClickCell(props.id)}>{value}</button>
        );
};     

export default Cell;
