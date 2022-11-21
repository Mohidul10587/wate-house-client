import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import CategoryMenu from '../../share/category/CategoryMenu'

const Category = () => {
const [count ,setCount]= useState(0);
const [size, setSize] = useState(5)
const [page ,setPage]= useState(0);

  const query = useParams()
  const categoryName = query.categoryName;

  const { data: products, isLoading } = useQuery(['products',categoryName,page,size], () => fetch(`http://localhost:5001/products?page=${page}&size=${size}$categoryName=${categoryName}`,{
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))

  useEffect(() => {
    fetch(`http://localhost:5001/productsCount/${categoryName}`)
      .then(res => res.json())
      .then(data => setCount(data.count))
  }, [categoryName])

  if (isLoading) {
    return <div className='md:min-h-[600px]'><p>loading</p></div>
  }

  return (

    

      <div className='md:min-h-[600px]'>
        <h1> This is {categoryName} page</h1>
        <div className='grid grid-cols-5 gap-3'>

        {
          products.map(product => <ProductCard key={product._id} product={product}/>)
        }

      </div>


      <div className='flex justify-center'>
        <div className='mt-10'>
          {
            [...Array(Math.ceil(count / size)).keys()]?.map(number => <button key={number} className={page === number ? 'bg-pink-700 px-1 m-1  text-white border-[1px] border-pink-700 text-xs font-bold' : 'bg-white px-1 m-1  border-[1px] border-pink-700 text-xs font-bold'} onClick={() => setPage(number)}>{number}</button>)
          }
        </div>
      </div>

    </div>
  )
}

export default Category