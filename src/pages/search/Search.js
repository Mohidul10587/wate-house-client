import React, { useContext } from 'react'
import { UserContext } from '../../App';
import ProductCard from '../../components/ProductCard'

const Search = () => {
    const value = useContext(UserContext);
if(value.loading)return <div className='min-h-[600px] flex justify-center font-bold text-3xl mt-10'> <p>Loading...</p></div>


    return (
        <div className='mt-10 px-4 min-h-[600px]'>
            <p>Matching  {value.searchedProducts.length} items </p>
         
            <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 place-items-center  sm:gap-3 gap-y-3  mt-4'>
                {
                    value.searchedProducts?.map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>
        </div>
    )
}

export default Search