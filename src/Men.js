import React,{useState} from "react"
import { StoreState } from "./StoreContext";

function Men(){
    const{menprod,setMenprod}=StoreState();
    const{cart,setCart}=StoreState();

    function addtocart(name,price,image,id){
        const men={id:id,name:name,price:price,image:image,}
        setCart([...cart,men])
    }
    return(
        <div className="menshirt">
            {menprod.map((men)=>
            <div key={men.id} className="prodbox">
                <img src={men.image} className="prodimg"></img>
                <div className="prodname">{men.name}</div>
                <div className="prodprice">{men.price}</div>
                <button className="addtocart" onClick={()=>addtocart(men.name,men.price,men.image,men.id)}>Add to cart</button>
            </div>
            )}
        </div>
    );
}
export default Men;