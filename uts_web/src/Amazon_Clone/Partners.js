import React from 'react';

function Partners() {
    return ( 
        <>
            <div style={{background:"#D3D3D3"}} className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div>
                            <div className='d-flex justify-content-center mt-2'>
                                <b style={{fontSize:30}} className="text-danger">Our Sponsers and Partners</b>
                            </div>
                            <div className='d-flex justify-content-around m-3'>
                                <div>
                                    <img style={{width:70,height:70}} src='./imagesCart/Amazon_icon.svg.png' alt='tesla'/>
                                </div>
                                <div>
                                    <img style={{width:70,height:70}} src='./imagesCart/Netflix.png' alt='tesla'/>
                                </div>
                                <div>
                                    <img style={{width:70,height:70}} src='./imagesCart/walmart-preview.jpg' alt='tesla'/>
                                </div>
                                <div>
                                    <img style={{width:70,height:70}} src='./imagesCart/Tesla_Motors.svg.png' alt='tesla'/>
                                </div>
                                <div>
                                    <img style={{width:70,height:70}} src='./imagesCart/microsoft.png' alt='tesla'/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
     );
}

export default Partners;