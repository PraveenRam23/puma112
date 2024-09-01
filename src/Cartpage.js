import React, { useState } from 'react'
import { StoreState } from './StoreContext'

function Cartpage() {
  const{cart,setCart}=StoreState();
  const[a,setA]=useState(0);

  function removeproduct(id){
    const a=cart.findIndex((item)=>item.id === id)
    cart.splice(a,1)
    setA(id)
}

  return (
    <div className='crtpg'> {a}
      {cart.length>0 
      ? <div>{cart.map((a)=>
          <div key={a.id} className='crtprodbox'><img src={a.image} className='crtprodimg'></img>
          <div className='crtprodname'>{a.name}</div>
          <div className='crtprodprice'>{a.price}</div>
          <div className='cancel'><button onClick={()=>removeproduct(a.id)} >✖</button></div>
         
          </div>
        )}</div>
      
        
      :
      <p>empty</p>
      }
        
    </div>
  )
};

export default Cartpage;