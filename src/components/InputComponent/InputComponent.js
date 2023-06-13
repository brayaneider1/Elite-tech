import React from 'react'

export const InputComponent = (props) => {
    return (
        <div className='input-component'>
            <input placeholder='Buscá un producto' {...props} />
        </div>
    )
}
