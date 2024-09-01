import React,{useState}  from "react"
import { StoreState } from "./StoreContext";

function Women(){
    const{womenprod,setWomenprod}=StoreState();
    const{cart,setCart}=StoreState();

function addtocart(name,price,image,id){
    const women={id:id,name:name,price:price,image:image,}
    setCart([...cart,women])    
}
    return(
        <div className="menshirt">
           {womenprod.map((women)=>
            <div key={women.id} className="prodbox">
                <img src={women.image} className="prodimg"></img>
                <div className="prodname">{women.name}</div>
                <div className="prodprice">{women.price}</div>
                <button className="addtocart" onClick={()=>addtocart(women.name,women.price,women.image,women.id)}>Add to cart</button>
            </div>
            )};
        </div>
    );
}
export default Women;