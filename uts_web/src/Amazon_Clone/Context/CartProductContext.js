import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = createContext();

const getData = () => {
    let localData = localStorage.getItem("data")
        return JSON.parse(localData);
    
}

const initialState = {
    cart: getData(),
    total_amount:"",
    delivery_fee:5000,
}

const CartProvider = ({children}) => {
    
    const [state , dispatch] = useReducer(reducer , initialState);

    const sendCartData = (colour , quantity , singleProduct) => {
        dispatch({type:"add_cart_data" , payload:{colour,quantity,singleProduct}})
    }

    useEffect(() => {
        dispatch({type:"total_bill"})
        localStorage.setItem("data" , JSON.stringify(state.cart))
    } , [state.cart])

    const clearCartItem = (id) => {
        dispatch({type:"clear_cart_item" , payload:id});
    }

    const clearCart = () => {
        dispatch({type:"clear_cart"})
    }

    return <CartContext.Provider value={{...state , sendCartData , clearCart , clearCartItem}}>{children}</CartContext.Provider>
}

export default CartProvider;
export {CartContext};