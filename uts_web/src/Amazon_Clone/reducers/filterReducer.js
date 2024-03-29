const filterReducer =( state , action) => {

    switch (action.type) {
        case "filter_products":
            let priceArray = action.payload.map((curElem) => curElem.price);
            let maxPrice = Math.max(...priceArray);
            
            return {...state ,
                original_products: [...action.payload],
                products:action.payload,
                gridView:false,
                filters:{
                    ...state.filters,
                    maxPrice:maxPrice,
                    price:maxPrice,
                }
            }
        case "change_displayGrid":
            return{
                ...state,
                gridView:false,
            }
        case "change_displayList":
            return{
                ...state,
                gridView:true,
            }
        case "get_sort_value":
            //const sortingValue = document.getElementById("sorting");
            //const actualSortValue = sortingValue.options[sortingValue.selectedIndex].value;
            return {
                ...state,
                sort_value:action.payload,
            }

        case "sortProducts":
            let filterProducts;
            let tempProducts = [...action.payload];

            const sortIT = (a,b) => {
                switch (state.sort_value) {
                    case "highest":
                        return b.price - a.price;
                    case "lowest":
                        return a.price - b.price;
                    case "a-z":
                        return a.name.localeCompare(b.name);
                    case "z-a":
                        return b.name.localeCompare(a.name);
                    default:
                        break;
                }
            }
            filterProducts = tempProducts.sort(sortIT);
            return{
                ...state,
                products:filterProducts,
            }
        
        case "set_filter_text":
            const {name , value} = action.payload;
            return{
                ...state,
                filters:{
                    ...state.filters,
                    [name] : value,
                }

            }
        
        case "update_filters":
            let tempData = action.payload;
            
            let {text} = state.filters;
            let {category} = state.filters;
            let {company} = state.filters;
            let {colour} = state.filters;
            let {price} = state.filters;
            text = text.toLowerCase();
            if(text !== "")
            {
                tempData = tempData.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                })
            }
            if(category !== "All")
            {
                tempData = tempData.filter((curElem) => {
                    return curElem.category === category
                })
            }
            if(company !== "All")
            {
                tempData = tempData.filter((curElem) => {
                    return curElem.company === company
                })
            }
            if(colour !== "All")
            {
                tempData = tempData.filter((curElem) => {
                    return curElem.colors.includes(colour)
                })
            }
            if(price !== 0)
            {
                tempData = tempData.filter((curElem) => {
                    return curElem.price <= price
                })
            }
            return{
                ...state,
                products:tempData,
            }
        case "clear_filters":
            return{
                ...state,
                filters:{
                    ...state.filters,
                    text : "",
                    category:"All",
                    company:"All",
                    colour: "All",
                    price:state.filters.maxPrice,
                    maxPrice:state.filters.maxPrice,
                    minPrice:0,
                }
            }

        default:
            return state;
    }

}

export default filterReducer;