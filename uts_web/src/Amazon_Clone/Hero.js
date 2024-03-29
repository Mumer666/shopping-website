import React from 'react';
import { NavLink } from 'react-router-dom';

function Hero(props) {
    return ( 
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='row'>
                            <div className='col-lg-12 mt-5'>
                                <h3>Welcome To Shopping World with</h3>
                                <span style={{fontSize:30}} className='badge bg-danger text-light'>M Umer Amjad</span>
                                <p>Welcome to our online shopping store here you will get best products from all over the world.
                                   We have the best collection of international brands ranging from groceries to electronic accessories.     
                                </p>
                                <b style={{fontSize:25}} className="text-danger">{props.quote}</b><br/>
                                <NavLink to={props.link}><button className='btn btn-danger btn-lg text-light mt-5' >{props.buttonText}</button></NavLink>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <figure>
                            <img style={{width:500,height:500}} src={props.image} alt='shopping' />
                        </figure>
                    </div>
                </div>

            </div>
        </>
     );
}

export default Hero;