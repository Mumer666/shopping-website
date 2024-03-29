import React, { useContext } from 'react';
import {AppContext} from "./Context/productContext";
import Product from './Product';

function FeaturedProducts() {
    const data = useContext(AppContext);
    const {featuredProducts} = data;

    return ( 
        <>
            <div style={{background:"#D3D3D3"}} className='container-fluid mb-5'>
               <div className='row'>
                    <div style={{"margin-left" : "10rem"}} className='mt-3'>
                        <p>Check Now<br/><span style={{fontSize:20}}><b>Our Top Rated Products</b></span></p>
                    </div>
               </div> 
               <div className='row d-flex justify-content-center'>
                    <div className='col-lg-8'>
                        <div className='row'>
                            {
                                featuredProducts.map((currElem) => {
                                    return <Product key={currElem.id} object={currElem}/>
                                })
                            }
                        </div>
                    </div>
               </div>
            </div>
        </>
     );
}

export default FeaturedProducts;