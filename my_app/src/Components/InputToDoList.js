import React from 'react'
import classnames from 'classnames'
const InputToDoList=( {
        label,
        name,
        contentEditable,
        value,
        onChange,
        placeholder,
        error,
        }) => {
        return (
          <div class="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input 
              type="text"
              name={name}
              contentEditable={contentEditable}
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
  contentEditable:"false"
}
export default InputToDoList;