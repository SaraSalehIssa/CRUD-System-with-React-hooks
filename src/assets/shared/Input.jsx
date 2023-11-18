import React from 'react'

function Input({ id, title, type, name, errors, handleData, customClass, value }) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{title}</label>
            <input type={type} name={name} className={`form-control ${customClass}`} value={value} id={id} onChange={handleData} />
            {errors[name] && <p className='text-danger'>{errors[name]}</p>}
        </div>
    )
}

export default Input