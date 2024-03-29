function FormatPrice({price}) {
    return Intl.NumberFormat("en-US" , {style:"currency",currency:"USD"}).format(price/1000);
}

export default FormatPrice;