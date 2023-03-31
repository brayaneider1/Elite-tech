import React from 'react'

const Pay = ({setCheckout}) => {
  return (
    <div className='pay' onClick={()=>setCheckout(false)}>Checkout</div>
  )
}

export default Pay