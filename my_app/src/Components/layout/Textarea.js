import React from 'react';
import classnames from 'classnames';

const Textarea=( {
        label,
        name,
        value,
        onChange,
        placeholder,
        error,
        rows,
        cols,
        }) => {
        return (
          <div class="mb-3">
            <label htmlFor={name} className="label-control">{label}</label>
            <textarea 
              name={name}
              className={classnames('form-control form-control-lg', {
                'is-invalid': error
              })}
              onChange={onChange}
              placeholder={placeholder}
              defaultValue={value}
              rows={rows} 
              cols={cols}
            />
            {error && <div className="invalid-feedback">{error}</div>}
          </div>
        );
    };

Textarea.defaultProps ={
  rows:"4", 
  cols:"50"
}
export default Textarea;