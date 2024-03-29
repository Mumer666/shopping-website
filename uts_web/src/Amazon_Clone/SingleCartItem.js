import React, { useContext } from 'react';
import { TiTick } from "react-icons/ti";
import FormatPrice from "./FormatPrice";
import { AiFillDelete } from "react-icons/ai";
import { CartContext } from './Context/CartProductContext';

function SingleCartItem(props) {
    const {clearCartItem} = useContext(CartContext);
    const {image , colour , price , quantity , id , name  } = props.cartData;
    return ( 
        <>
            <div className='row my-2'>
                <div className='col-lg-4'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img style={{width:"100%",height:"100%"}} src={image} alt={name} />
                        </div>
                        <div className='col-lg-6'>
                            <p>{name}</p>
                            <button className='rounded-circle text-light' style={{backgroundColor:colour}}><TiTick /></button>
                        </div>
                    </div>
                </div>  
                <div className='col-lg-2'><FormatPrice price={price} /></div>
                <div className='col-lg-2'><p>{quantity}</p></div>         
                <div className='col-lg-2'><FormatPrice price={(price * quantity)} /></div> 
                <div className='col-lg-2'><span onClick={() => clearCartItem(id)} style={{backgroundColor:"white" , fontSize:25}} className='text-danger'><AiFillDelete /></span></div>
            </div>
        </>
     );
}

export default SingleCartItem;