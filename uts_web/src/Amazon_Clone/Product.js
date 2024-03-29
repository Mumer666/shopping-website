import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "./FormatPrice";

function Product(props) {
  const { id, image, name, price, category } = props.object;
  return (
    <>
      <div className="col-lg-4 mb-5 d-flex justify-content-around">
        <NavLink to={`/singleProduct/${id}`}>
          <div class="card" style={{ width: "15rem" }}>
            <figure>
              <img src={image} class="card-img-top" alt={name} />
              <figcaption className="text-capitalize text-dark font-weight-bold d-flex justify-content-center">{category}</figcaption>
            </figure>
            <div className="d-flex justify-content-between">
              <p className="text-capitalize text-dark font-weight-bold">{name}</p>
              <p className="text-capitalize text-dark font-weight-bold"><FormatPrice price={price} /></p>
            </div>

          </div>
        </NavLink>
      </div>
    </>
  );
}

export default Product;
