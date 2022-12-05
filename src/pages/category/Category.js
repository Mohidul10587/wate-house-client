import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'


const Category = () => {
  const [count, setCount] = useState(0);
  const [size] = useState(10)
  const [page, setPage] = useState(0);
  console.log(page)
  const query = useParams()
  const categoryName = query.categoryName;
  useEffect(() => {
    setPage(0)
  }, [categoryName])
  const { data: products, isLoading } = useQuery(['products', categoryName, page, size], () => fetch(`https://mohid-shop.onrender.com/products/new?page=${page}&size=${size}&categoryName=${categoryName}`, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))


  useEffect(() => {
    fetch(`https://mohid-shop.onrender.com/productsCount/${categoryName}`)
      .then(res => res.json())
      .then(data => setCount(data.count))
  }, [categoryName])

  if (isLoading) {
    return <div className='min-h-[600px] flex justify-center font-bold text-2xl'> <p>Loading...</p></div>
  }
console.log(products.length)
  return (

    <div className='min-h-[600px]'>

      <h1 className='font-bold text-3xl text-center my-10'> {categoryName}</h1>
      <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 place-items-center  sm:gap-3 gap-y-3 px-4'>

        {
          products.map(product => <ProductCard key={product._id} product={product} />)
        }

      </div>


      <div className='flex justify-center'>
        <div className='mt-10'>
          {
            [...Array(Math.ceil(count / size)).keys()]?.map(number => <button key={number} className={page === number ? 'bg-pink-700 px-1 m-1  text-white border-[1px] border-pink-700 text-xs font-bold' : 'bg-white px-1 m-1  border-[1px] border-pink-700 text-xs font-bold'} onClick={() => setPage(number)}>{number + 1}</button>)
          }
        </div>
      </div>

    </div>
  )
}

export default Category