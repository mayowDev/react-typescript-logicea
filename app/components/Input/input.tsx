import React from 'react';

function Input(props:any) {
    const {label, onChange, name, value} = props
    return (
        <>
         <div className="input-group ">
            <label htmlFor={name}>{label}</label>
            <input name={name} 
                onChange={onChange} 
                value={value} 
                type="text" 
                className="form-control" 
                placeholder=""
                    />
        </div>
            
        </>
    );
}

export default Input;