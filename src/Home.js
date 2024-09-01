import React, { useState } from 'react'
import { StoreState } from './StoreContext'
import img11 from './Images/Home/409b7903-4fea-4b16-9bbf-1f87878ac1fd_Puma+-+Brand+Store+-+FastR+Banner+-+Desktop+2.avif'
import img12 from './Images/Home/Puma Lite Mesh.jpg'

function Home() {
  

  const{name,setName}=StoreState();
  
  const{carttproducts,setCartproducts}=StoreState();
  const{cart,setCart}=StoreState();
  const{cartprd,setCartprd}=StoreState();


  function addtocart(name,price,image,id){
    const a={id:id,name:name,price:price,image:image}
    setCart([...cart,a])
  }


  return (
    <div>

    
    <div className="firstbox">
      <img className="Addpic" src={img11}/>
    </div>
      
        <div  className='productpage'>
          {cartprd.map((a)=>
          <div key={a.id} className='prodbox'><img src={a.image} className='prodimg'></img>
          <div className='prodname'>{a.name}</div>
            <div className='prodprice'> &#8377;{a.price}</div>
            <button className='button-27' onClick={()=>addtocart(a.name,a.price,a.image,a.id)}>Add to cart</button> 
          </div>
        )}
        </div>
        <div className="firstbox">
          <img className='Addpic' src={img12}/>  
        </div> 
       



        </div>
  )
}

export default Home