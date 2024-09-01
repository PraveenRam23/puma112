import React,{useState} from "react";
import StoreContext, { StoreState } from "./StoreContext";

function Kids(){
    const{kidsprod,setKidsprod}=StoreState();
    const{cart,setCart}=StoreState();

function addtocart(name,price,image,id){
    const kids={id:id,name:name,price:price,image:image}
    setCart([...cart,kids])
}

return(
    <div className="menshirt">
         {kidsprod.map((kids)=>
         <div key={kids.id} className="prodbox">
            <img src={kids.image} className="prodimg"></img>
            <div className="prodname">{kids.name}</div>
            <div className="prodprice">{kids.price}</div>
            <button className="addtocart" onClick={()=>addtocart(kids.name,kids.price,kids.image,kids.id)}>Add to cart</button>
         </div>
         )}
     </div>
    );
}
export default Kids;