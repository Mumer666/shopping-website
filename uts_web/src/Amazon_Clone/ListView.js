import React from "react";
import { NavLink } from "react-router-dom";
//import FormatPrice from "./FormatPrice";

function ListView(props) {
  const { id, image, name, description } = props.object;
  return (
    <>
      <div className="col-lg-12 mb-5">
        <div className="d-flex justify-content-around">
        <NavLink to={`/singleProduct/${id}`}>
          <div class="card mb-3" style={{"max-width": "540px"}}>
            <div class="row g-0">
              <div class="col-md-5">
                <img src={image} 
                class="img-fluid rounded-start" 
                alt={name} 
                style={{width:"100%" , height:"100%"}}    
                />
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h5 className="card-title text-capitalize">{name}</h5>
                  <p className="card-text">
                    {description.slice(0,99)}...
                  </p>
                  <button className="btn btn-primary">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*<div className="card" style={{ width: "15rem" }}>
            <figure>
              <img src={image} class="card-img-top" alt={name} />
              <figcaption className="text-capitalize text-dark font-weight-bold d-flex justify-content-center">{category}</figcaption>
            </figure>
            <div className="d-flex justify-content-between">
              <p className="text-capitalize text-dark font-weight-bold">{name}</p>
              <p className="text-capitalize text-dark font-weight-bold"><FormatPrice price={price} /></p>
            </div>

          </div>*/}
        </NavLink>
        </div>
      </div>
    </>
  );
}

export default ListView;
