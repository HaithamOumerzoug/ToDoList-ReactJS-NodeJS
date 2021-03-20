import React from 'react'
import classnames from 'classnames'
const InputToDoList=( {
        label,
        name,
        value,
        onChange,
        placeholder,
        error,
        type
        }) => {
        return (
          <div class="mb-3">
            <label htmlFor={name} className="label-control">{label}</label>
            <input 
              type={type}
              name={name}
              className={classnames('form-control form-control-lg', {
                'is-invalid': error
              })}
              onChange={onChange}
              placeholder={placeholder}
              defaultValue={value}
            />
            {error && <div className="invalid-feedback">{error}</div>}
          </div>
        );
    };

InputToDoList.defaultProps ={
  type:"text"

}
export default InputToDoList;