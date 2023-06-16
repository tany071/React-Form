import { useState } from "react";
import "./forminput.css";
const FormInput = (props) => {
    const [focused,setFocused]=useState(false)
    const {label,errorMessage,onChange,id,...inputProps}=props;

    const handleFocus = (e)=>{
        setFocused(true);
    } 

  return (
    <div className="formInput">
      <label>{label}</label>
      <input  {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
      <span>{errorMessage}</span>
      {/* onChange={(e)=>props.setUsername(e.target.value)} 
      ref={props.refer}*/}
    </div>
  );
};

export default FormInput;
