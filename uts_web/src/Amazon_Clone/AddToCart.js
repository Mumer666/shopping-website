import React, { useContext, useState } from "react";
import { IoAddOutline, IoRemoveSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { CartContext } from "./Context/CartProductContext";

function AddToCart(props) {
  const {sendCartData} = useContext(CartContext); 
  const [colour, setColour] = useState(props.colour[0]);

  return (
    <>
      <div>
        <p>
          Colours:
          {props.colour.map((curElem, index) => {
            return (
              <button
                className="btn mx-2 text-light rounded-circle"
                key={index}
                style={{ backgroundColor: curElem }}
                onClick={() => setColour(curElem)}
              >
                {curElem === colour ? <TiTick /> : null}
              </button>
            );
          })}
        </p>
      </div>
      <div className="my-3 d-flex flex-row">
        <button
          className="mr-2 btn btn-success btn-sm text-light"
          onClick={props.onDecrement}
        >
          <IoRemoveSharp />
        </button>
        <span style={{ fontSize: 20 }} className="mx-2">
          {props.count}
        </span>
        <button
          className="mx-2 btn btn-success btn-sm text-light"
          onClick={props.onIncrement}
        >
          <IoAddOutline />
        </button>
      </div>
      <NavLink to="/cart">
        <button onClick={() => sendCartData(colour,props.count , props.selectedProduct)} className="btn btn-primary">ADD To Cart</button>
      </NavLink>
    </>
  );
}

export default AddToCart;
