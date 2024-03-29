import React, { useContext } from "react";
import { FilterContext } from "./Context/filterProductContext";
import { TiTick } from "react-icons/ti";
import FormatPrice from "./FormatPrice";

function Filters() {
  const data = useContext(FilterContext);
  const {updateFilterColumn} = data;
  const {text , colour , price , maxPrice , minPrice } = data.filters;
  const {original_products , clearFilters} = data;

  const getUniqueProducts = ( data , property) =>{
      return data.map((curElem) => {
        return curElem[property];
      })
  }

  let uniqueProducts = getUniqueProducts(original_products , "category")
  uniqueProducts = ["All" ,  ...new Set(uniqueProducts)];
  let uniqueCompanies = getUniqueProducts(original_products , "company");
  uniqueCompanies = ["All" , ...new Set(uniqueCompanies)]

  let uniqueColours = getUniqueProducts(original_products , "colors");
  uniqueColours = uniqueColours.flat();
  uniqueColours = ["All" , ...new Set(uniqueColours)];


  return (
    <>
      <div className="col-lg-12">
        <div className="d-flex justify-content-center mt-4">
          <form onSubmit={(event) => event.preventDefault()}>
            <input 
              type="text"
              name="text"
              value={text}
              placeholder="search..."
              onChange={updateFilterColumn}
            />

          </form>
        </div>
        <div className="d-flex flex-column mt-5 mb-3">
          <h4>Category</h4>
          {
            uniqueProducts.map((curElem) => {
              return <button 
              style={{width:130}} 
              className="text-capitalize text-primary btn-light border-0"
              name="category"
              value={curElem}
              onClick={updateFilterColumn}
              >
                {curElem}
              </button>
            })
          }
        </div>
        <div>
          <h4 className="mb-2">Company</h4>
          <form action="#">
            <label name="company" htmlFor="company"></label>
            <select id="company" name="company" onClick={updateFilterColumn}>
              {
                uniqueCompanies.map((curElem , index) => {
                  return <option key={index} value={curElem}>{curElem}</option>
                })
              }
            </select>

          </form>
        </div>
        <div className="my-4">
          <h4>Colours</h4>
          {
            uniqueColours.map((curElem , index) => {
              
                if(curElem === "All")
                {
                  return (  
                    <button 
                    name="colour"
                    value={curElem}
                    className="btn-sm mx-1 border-0"
                    onClick={updateFilterColumn}
                  >
                  {curElem}
                  </button>)  
                }
                return (  
              <button 
              style={{backgroundColor:curElem}}
              name="colour"
              value={curElem}
              className="btn-sm mx-1 text-light rounded-circle"
              onClick={updateFilterColumn}
              >
              {colour===curElem ? (<TiTick />) : null}
              </button>)
            })
          }
        </div>
        <div>
          <h4>Price</h4>
          <div className="d-flex flex-column">
          <span className="font-weight-bold text-primary"><FormatPrice price={price}/></span>
          <input 
          type="range" 
          min={minPrice} 
          max={maxPrice} 
          name="price" 
          value={price} 
          onChange={updateFilterColumn} 

          />
          </div>
          <div className="my-4">
            <button className="btn btn-danger text-light" onClick={clearFilters}>Clear Filters</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filters;
