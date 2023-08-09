import React from 'react'

export const InputComponent = (props) => {
    return (
        <div className='input-component'>
            <input placeholder='Busca un producto' onClick={props?.click}  {...props} />
        </div>
    )
}
