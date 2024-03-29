import React, { useContext } from 'react';
import AllProducts from './AllProducts';
import { FilterContext } from './Context/filterProductContext';
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import Filters from './Filters';

function Products() {
    const data = useContext(FilterContext);
    const {products , sorting , changeDisplayGrid , changeDisplayList} = data;
    return ( 
        <>
            <div className="container mt-3">
                <div className='row'>
                    <div className='col-lg-3'>
                        <Filters />
                    </div>
                    <div className='col-lg-9'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='d-flex flex-row justify-content-between'>
                                    <div> {/* List and Grid display */}
                                        <button className='btn btn-lg m-2' onClick={changeDisplayGrid}>
                                            <IoGrid />
                                        </button>
                                        <button className='btn btn-lg m-2' onClick={changeDisplayList}>
                                            <FaList /> 
                                        </button>
                                    </div>
                                    <div className='mt-3'> {/* No to total Products */}
                                        <p style={{fontSize:25}}>{`${products.length} total Products`}</p>
                                    </div>
                                    <div className='mt-4'> {/* sorting options */}
                                        <form action='#'>
                                            <label htmlFor="sorting"></label>
                                            <select id="sorting" onClick={sorting}>
                                                <option value="highest">Sort (highest to  lowest)</option>
                                                <option value="lowest">Sort (lowest to  highest)</option>
                                                <option value="a-z">Sort (a-z)</option>
                                                <option value="z-a">Sort (z-a)</option>
                                            </select>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <AllProducts />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
     );
}

export default Products;