import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducers/ProductReducer";

const AppContext = createContext();
const api = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  isSingleError:false,
  products: [],
  featuredProducts: [],
  featuredSingleProduct:{},
};


const AppProvider = ({ children }) => {

  const readData = async (url) => {
    dispatch({ type: "is_loading" });
    try {
      const res = await axios.get(url);
      const data = await res.data;
      dispatch({ type: "start_loading", payload: data });
    } catch (error) {
      dispatch({ type: "is_error" });
    }
  };
  const readSingleData = async (url2) => {
    try {
	const response = await axios.get(url2);
	    const data2 = await response.data;
	    dispatch({type:"start_single_loading" , payload:data2});
} catch (error) {
	dispatch({type:"single_error"});
}
  }

  useEffect(() => {
    readData(api);
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);  
  return <AppContext.Provider value={{...state,readSingleData}}>{children}</AppContext.Provider>;

};

export default AppProvider;
export { AppContext };
