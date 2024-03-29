import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./Context/productContext";
import ProductDetails from "./ProductDetails";
import Images from "./Images";


function SingleProduct() {
  const url = "https://api.pujakaitem.com/api/products";
  const { id } = useParams();
  const object = useContext(AppContext);
  useEffect(()=>{
    object.readSingleData(`${url}?id=${id}`);
  },[id, object]);
  const {featuredSingleProduct} = object;
  const {image} = featuredSingleProduct;
  

  

  return (
    <>
        <div className="container mt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-6 mt-5">
                  <Images pictures={image}/>
                </div>
                <div className="col-lg-6 d-flex flex-column">
                  <ProductDetails featuredSingleProduct={featuredSingleProduct}/>
                </div>
              </div>
            </div>
          </div>
        </div>    
    </>
  );
}

export default SingleProduct;
