import React, { useState } from 'react';

function Images({pictures = [{}]}) {
    const [pic , setPic] = useState(pictures[0])
    return ( 
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        {
                            pictures.map((curElem , index) => {
                                return <div className='row'>
                                    <div className='col-lg-12'>
                                        <figure>
                                            <img 
                                            style={{width:"120px" , height:"100px"}}
                                            src={curElem.url} 
                                            alt={curElem.filename}
                                            key={index}
                                            onClick={() => setPic(curElem)}    
                                            />
                                        </figure>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className='col-lg-8 m-auto'>
                        <img 
                        src={pic.url} 
                        alt={pic.filename}
                        style={{width:"280px" , height:"250px"}}    
                        />
                    </div>

                </div>

            </div>
        </>
     );
}

export default Images;