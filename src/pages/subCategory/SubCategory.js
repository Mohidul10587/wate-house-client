import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import {useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';

const SubCategory = () => {

  const [count, setCount] = useState(0);
  const [size] = useState(5)
  const [page, setPage] = useState(0);
  const query = useParams()
  const subCategoryName = query.subCategoryName;

  const { data: products, isLoading } = useQuery(['products', subCategoryName], () => fetch(`https://blooming-anchorage-14599.herokuapp.com/pro/${subCategoryName}`, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))

  useEffect(() => {
    fetch(`https://blooming-anchorage-14599.herokuapp.com/proCount/${subCategoryName}`)
      .then(res => res.json())
      .then(data => setCount(data.count))
  }, [subCategoryName])



  if (isLoading) {
    return <div className='md:min-h-[600px]'> <p>loading</p></div>
  }

  return (
    <div className='md:min-h-[600px]'>
      <h1> {subCategoryName} </h1>
      <div className='grid grid-cols-5 gap-3'>

        {
          products.map(product => <ProductCard key={product._id} product={product} />)
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


export default SubCategory