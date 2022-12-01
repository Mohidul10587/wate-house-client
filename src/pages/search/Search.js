import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { useQuery } from 'react-query'
import ProductCard from '../../components/ProductCard'

const Search = () => {

    const [searchName, setSearchName] = useState('All');
    const [searchedProducts, setSearchedProducts] = useState([]);


    // const { data: products, isLoading, refetch } = useQuery(['products',searchName], () => fetch(`  https://cryptic-hollows-87605.herokuapp.com/productsName/${searchName}`, {
    //     method: 'GET',
    //     headers: {
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     },
    // }).then(res => res.json())
    //     .then(data => setSearchedProducts(data)))




    useEffect(() => {
        fetch(`  https://cryptic-hollows-87605.herokuapp.com/productsName/${searchName}`)
            .then(res => res.json())
            .then(data => setSearchedProducts(data))
    }, [searchName])




    // if (isLoading) {
    //     return <div className='min-h-[600px] flex justify-center font-bold text-2xl'> <p>Loading...</p></div>
    // }

    return (
        <div>


            <div className='flex justify-center my-10'>
                <div className='border-2 border-gray-500 flex justify-center w-[292px] rounded-md h-10 items-center'>
                    <input className='pl-2 h-10 border-2 border-gray-500' type="text" onChange={(e) => setSearchName(e.target.value)} /><p className='mx-2'><FaSearch className=' ' /></p>
                </div>

            </div>



            <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 place-items-center  sm:gap-3 gap-y-3 px-4'>

                {
                    searchedProducts?.map(product => <ProductCard key={product._id} product={product} />)
                }

            </div>
        </div>
    )
}

export default Search