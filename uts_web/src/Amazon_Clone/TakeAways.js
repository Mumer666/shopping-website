import { RiTruckFill , RiSecurePaymentFill , RiMoneyEuroCircleFill } from "react-icons/ri";

function TakeAways() {
    return ( 
        <>
          <div className="d-flex flex-row justify-content-between">
            <div>
                <span style={{ fontSize:35}} className="ml-3">{<RiTruckFill />}</span>
                <p style={{fontSize:13}}>Free Delivery</p>
            </div>
            <div>
            <span style={{ fontSize:35}} className="ml-4">{<RiSecurePaymentFill />}</span>
                <p style={{fontSize:13}}>Secure Transactions</p>
            </div>
            <div>
                <span style={{ fontSize:35}} className="ml-5">{<RiMoneyEuroCircleFill />}</span>
                <p style={{fontSize:13}}>MoneyBack Gurantee</p>
            </div>
          </div>

          <hr style={{width:"100%"}}/>  
        </>
     );
}

export default TakeAways;