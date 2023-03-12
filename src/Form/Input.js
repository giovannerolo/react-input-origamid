import React from 'react';

const Input = ({
  label,
  id,
  onChange,
  setValue,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
