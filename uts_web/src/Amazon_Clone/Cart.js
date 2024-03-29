import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from './Context/CartProductContext';
import FormatPrice from './FormatPrice';
import SingleCartItem from './SingleCartItem';

function Cart() {
    const data = useContext(CartContext);
    const {cart , clearCart , total_amount , delivery_fee} = data;
    return ( 
        <>
            <div className='container my-5'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg-10'>
                        <div className='row'>
                            <div className='col-lg-4'><h5>Name</h5></div>
                            <div className='col-lg-2'><h5>Price</h5></div>
                            <div className='col-lg-2'><h5>Quantity</h5></div>
                            <div className='col-lg-2'><h5>Sub-Totals</h5></div>
                            <div className='col-lg-2'><h5>Remove</h5></div>
                            
                        </div>
                        <hr className='mb-2' style={{height:"1px", width:"100%",color:"#333",background:"#333"}}/>
                        <div>
                            {
                                cart.map((curElem) => {
                                    return <SingleCartItem key={curElem.id} cartData={curElem} />
                                })
                            }
                        </div>
                        <hr className='mt-3' style={{height:"1px", width:"100%",color:"#333",background:"#333"}}/>
                        <div className='d-flex justify-content-between'>
                            <NavLink to="/products">
                                <button className='btn btn-primary btn-lg my-3'>Continue Shopping</button>
                            </NavLink>
                            <button onClick={clearCart} className='btn btn-danger btn-lg my-3'>Clear Cart</button>
                        </div>
                        <div className='row justify-content-end mb-5'>
                            <div style={{backgroundColor:"#cce6ff"}} className='col-lg-4'>
                                <div className='row mt-3'>
                                    <div className='col-lg-8'>
                                        <p className='font-weight-bold'>SubTotals:</p>
                                    </div>
                                    <div className='col-lg-4'>
                                        <FormatPrice price={total_amount}/>
                                    </div>

                                </div>
                                <div className='row'>
                                    <div className='col-lg-8'>
                                        <p className='font-weight-bold'>DeliveryFee:</p>
                                    </div>
                                    <div className='col-lg-4'>
                                        <FormatPrice price={delivery_fee}/>
                                    </div>

                                </div>
                                <hr className='mb-2' style={{height:"1px", width:"100%",color:"#333",background:"#333"}}/>
                                <div className='row'>
                                    <div className='col-lg-8'>
                                        <p className='font-weight-bold'>Total_Bill:</p>
                                    </div>
                                    <div className='col-lg-4'>
                                        <FormatPrice price={delivery_fee + total_amount}/>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                 
            </div>
        </>
     );
}

export default Cart;