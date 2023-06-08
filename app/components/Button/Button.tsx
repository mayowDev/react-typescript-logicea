import React from 'react';
import './style.scss'
function Button({onClick, text, className}:IButton) {
    return (
        <button className={className} onClick={onClick}>{text}</button>
    );
}

interface IButton{
    className:string,
    text:string,
    onClick:any
}
export default Button;