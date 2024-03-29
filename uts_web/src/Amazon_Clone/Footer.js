import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div style={{ background: "#ff0000" }} className="container-fluid mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="row bg-white">
              <div className="col-lg-6 mb-3 mt-3 d-flex justify-content-center">
                <h3 className="text-danger">You will never Walk Alone</h3>
              </div>
              <div className="col-lg-6 mb-3 mt-3 d-flex justify-content-center">
                <NavLink to="/contact">
                  <button className="btn btn-danger btn-lg">Contact Us</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-10">
            <div className="row mt-5 mb-5">
              <div className="col-lg-3 d-flex justify-content-center ">
                <div className="d-flex flex-column">
                  <h5 className="text-light">Muhammad Umer Amjad</h5>
                  <p className="text-light d-flex justify-content-center">You will never walk Alone</p>
                </div>
              </div>
              <div className="col-lg-3 d-flex flex-column">
                <h5 className="text-light d-flex justify-content-center">Stay Tuned</h5>
                <div className="d-flex justify-content-center">
                    <img style={{width:40 , height:40}} src="./imagesCart/bell.png" alt="bell"/>
                </div>
              </div>
              <div className="col-lg-3 d-flex flex-column">
                <h5 className="text-light d-flex justify-content-center">Follow me on</h5>
                <div className="d-flex justify-content-center">
                    <img className="ml-2" style={{width:40 , height:40}} src="./imagesCart/facebook.png" alt="facebook"/>
                    <img className="ml-2" style={{width:40 , height:40}} src="./imagesCart/instagram.png" alt="instagram"/>
                    <img className="ml-2" style={{width:40 , height:40}} src="./imagesCart/twitter.png" alt="tweeter"/>
                </div>
              </div>
              <div className="col-lg-3 d-flex flex-column">
                <h5 className="text-light d-flex justify-content-center">Contact me</h5>
                <p className="d-flex justify-content-center text-light">+92 3126935581</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
            <hr style={{width:"100%" , background:"#fff"}} />
        </div>
        
        <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
                <div className="row mb-5">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <h5 className="text-light">@M Umer Amjad all rights reserved</h5>
                    </div>

                </div>

            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
