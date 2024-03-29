import React, { useContext } from "react";
import { FilterContext } from "./Context/filterProductContext";
import ListView from "./ListView";
import Product from "./Product";

function AllProducts() {
  const data = useContext(FilterContext);
  const { products, gridView } = data;
  return (
    <>
      {gridView ? (
        <div className="row">
          {products.map((curElem) => {
            return <ListView key={curElem.id} object={curElem} />;
          })}
        </div>
      ) : (
        <div className="row">
          {products.map((curElem) => {
            return <Product key={curElem.id} object={curElem} />;
          })}
        </div>
      )}
    </>
  );
}

export default AllProducts;
