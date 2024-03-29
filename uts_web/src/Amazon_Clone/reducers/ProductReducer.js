const ProductReducer = (state , action) => {
    switch (action.type) {
        case "is_loading":
            return{
                ...state,
                isLoading:false,
            }
        case "start_loading":
            const smartProducts = action.payload.filter( (curElem) => {
                return curElem.featured === true;
            })
            return{
                ...state,
                isLoading:false,
                products:action.payload,
                featuredProducts:smartProducts,
            }
        case "is_error":
            return{
                ...state,
                isLoading:false,
                isError:true,

            }
        case "single_Error":
            return{
                ...state,
                isSingleLoading:true,
            }
        case "start_single_loading":
            return{
                ...state,
                isSingleError:false,
                featuredSingleProduct:action.payload,
            }
    
        default:
            return {...state};
    }
}

export default ProductReducer;