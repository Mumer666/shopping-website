const CartReducer = (state , action) => {

    switch (action.type) {
        case "add_cart_data":
            const {colour , quantity , singleProduct} = action.payload;
            let cartDetails = {
                id: singleProduct.id + colour,
                name : singleProduct.name,
                quantity : quantity,
                price : singleProduct.price,
                colour : colour,
                image : singleProduct.image[0].url,

            }
            return{
                ...state,
                cart:[...state.cart , cartDetails],
            }
        case "clear_cart_item":
            let id = action.payload;
            let remainingCart = state.cart.filter((curElem) => {
                return curElem.id !== id
            }) 
            return {
                ...state,
                cart: remainingCart,
            }
        case "clear_cart":
            return {
                ...state,
                cart : [],
            }
        case "total_bill":
            let initialBill = 0;
            let totalBill = state.cart.map((curElem) => {
                return initialBill = initialBill + (curElem.price * curElem.quantity)
            })
            console.log(totalBill);
            return {
                ...state,
                total_amount:initialBill,

            }
    
        default:
            return state
    }

}

export default CartReducer;