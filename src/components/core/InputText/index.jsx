import React from "react";

function InputText({ label, placeholder, type, note }) {
  return (
    <div className="form-input">
      <label>
        {label} {note && <span className="note">({note})</span>}
      </label>
      <input type={type} placeholder={placeholder} className="input"></input>
    </div>
  );
}

export default InputText;
