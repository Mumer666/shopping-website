import React from "react";

function Properties() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div style={{background:"#D3D3D3"}} className="col-lg-4 d-flex flex-column">
            <div className="mt-5 d-flex justify-content-center">
              <img
                style={{ width: 60, height: 60 }}
                src="./imagesCart/truck.png"
                alt="delivery"
              />
            </div>
            <div className="d-flex justify-content-center">
              <p style={{ fontSize: 18 }}>
                traceable and super fast delivery
              </p>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="row d-flex flex-column">
              <div style={{width:300 , background:"#D3D3D3"}} >
                <div className="d-flex justify-content-center mt-3">
                  <img
                    style={{ width: 40, height: 40 }}
                    src="./imagesCart/money.png"
                    alt="money"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <p style={{ fontSize: 18 }}>money back gurantee</p>
                </div>
              </div>
              <div style={{width:300 , background:"#D3D3D3"}} className="mt-2">
                <div className="d-flex justify-content-center mt-3">
                  <img
                    style={{ width: 40, height: 40 }}
                    src="./imagesCart/privacy.png"
                    alt="money"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <p style={{ fontSize: 18 }}>protect your privacy</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{background:"#D3D3D3"}} className="col-lg-4 d-flex flex-column">
            <div className="mt-5 d-flex justify-content-center">
              <img
                style={{ width: 60, height: 60 }}
                src="./imagesCart/secure.png"
                alt="delivery"
              />
            </div>
            <div className="d-flex justify-content-center">
              <p style={{ fontSize: 18 }}>
                super secure payment system
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Properties;
