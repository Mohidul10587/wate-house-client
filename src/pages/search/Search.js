import React, { useContext} from 'react'
import { UserContext } from '../../App';
import ProductCard from '../../components/ProductCard'

const Search = () => {
    const value = useContext(UserContext);
    

    return (
        <div>


            <div className='flex justify-center my-10'>
               

            </div>



            <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 place-items-center  sm:gap-3 gap-y-3 px-4'>

                {
                    value.searchedProducts?.map(product => <ProductCard key={product._id} product={product} />)
                }

            </div>
        </div>
    )
}

export default Search