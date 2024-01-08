import { useState } from "react";

function Product(props){
    
    let[isAvailable,setIsAvailable]=useState("yes")
   // function makeNotAvailable(){
    //    setIsAvailable("no");
    //}
    //* <button onClick={makeNotAvailable}>Tap</button>
    
    return(
    <section className="product"> 
    <img className="img" src={props.url}/>
        <h1>{props.name}</h1>
        <p>Rs.{props.price}</p>
        <p>{isAvailable}</p>
        <button onClick={()=>{setIsAvailable("no")}}>Tap</button>
   
    </section>
    
    )

}
export default Product;