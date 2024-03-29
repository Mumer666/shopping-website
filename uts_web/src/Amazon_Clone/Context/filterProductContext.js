import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filterReducer";
import { AppContext } from "./productContext";

const initialState = {
  original_products:[],
  products: [],
  gridView: false,
  sort_value:"highest",
  filters:{
    text : "",
    category:"All",
    company:"All",
    colour: "All",
    price:0,
    maxPrice:0,
    minPrice:0,
  }
  
};
const FilterContext = createContext();

const FilterProductContext = ({ children }) => {
 
  const data = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = data;
  useEffect(() => {
    try {
        dispatch({ type: "filter_products", payload: products });
      } catch (error) {
        console.log(error);
      }
  } , [products])
  
  const changeDisplayGrid = () => {
    dispatch({type:"change_displayGrid"})
  }
  const changeDisplayList = () => {
    dispatch({type:"change_displayList"})
  }

  useEffect(() => {
    dispatch({type:"sortProducts" , payload:products})
  } , [products ,state.sort_value])

  useEffect(() => {
    dispatch({type:"update_filters" , payload:products})
  } , [products , state.filters])

  const updateFilterColumn = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    dispatch({type:"set_filter_text" , payload:{name , value}})
  }

  const sorting = (event) => {
    const sortingValue = event.target.value;
    dispatch({type:"get_sort_value" , payload:sortingValue});
  }
  const clearFilters = () => {
    dispatch({type:"clear_filters"});
  }
  return (
    <FilterContext.Provider value={{ ...state , changeDisplayGrid , changeDisplayList ,sorting , updateFilterColumn , clearFilters}}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProductContext;
export { FilterContext };
