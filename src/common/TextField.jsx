import React from "react";

function TextField({ label, name, placeholder, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label}
      </label>
      <input
      autoComplete="off"
        className="text_field-input"
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextField;
