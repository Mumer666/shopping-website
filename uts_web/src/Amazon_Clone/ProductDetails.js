import FormatPrice from "./FormatPrice";
import Stars from "./Stars";
import TakeAways from "./TakeAways";
import AddToCart from "./AddToCart";
import { useState } from "react";


function ProductDetails(props) {
    const { name, id ,description, colors, company, reviews, price , stars, stock } = props.featuredSingleProduct;
    let [count , setCount] = useState(1);
    const increment = () => {
      if(count < stock)
      {
        setCount(++count)
      }
    }
    const decrement = () => {
      if(count > 1)
      {
        setCount(--count)
      }
    }
    
    return ( 
        <>
            <h4 className="text-capitalize">{name}</h4>

            {/*         Ratings and Reviews Section       */}
            <Stars stars={stars} reviews={reviews} />

            {/*        Price and Description Section      */}
          
            <p style={{fontSize:18}}>MRP: <del><FormatPrice price={price}/></del></p>
            <p className="font-weight-bold text-primary">Deal of the Day: <FormatPrice price={price} /></p>
            <p style={{fontSize:15}} className="text-muted">{description}</p>
            
            {/*        Features Company and Stock Section      */}

            <TakeAways />
            <span>Available: <b>{stock>0 ? "In Stock" : "Out of Stock"}</b></span>
            <p className="my-1">ID: <b>{id}</b></p>
            <span>Brand: <b className="text-capitalize">{company}</b></span>
            <hr style={{height:"1px", width:"100%",color:"#333",background:"#333"}}/>

            {/*        Colours and Cart Section      */}
            
            {
              stock > 0 ? <AddToCart count={count} colour={colors} selectedProduct={props.featuredSingleProduct}   onIncrement={increment} onDecrement={decrement}  /> : null 
            }
            
            
        </>
     );
}

export default ProductDetails;