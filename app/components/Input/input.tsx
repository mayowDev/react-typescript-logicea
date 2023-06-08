import React from 'react';
import './style.scss';

function Input(props:any) {
    const {label, onChange, name, value} = props
    return (
        <>
         <div className="input-group">
            <label className="label"  htmlFor={name}>{label}</label>
            <input name={name} 
                onChange={onChange} 
                value={value} 
                type="text" 
                className="input" 
                placeholder=""
                />
        </div>
            
        </>
    );
}

export default Input;