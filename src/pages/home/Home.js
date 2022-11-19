import React from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import CategoryMenu from '../../share/category/CategoryMenu';

const Home = () => {


  const { data: products, isLoading } = useQuery('products', () => fetch('http://localhost:5001/products').then(res => res.json()))


  if (isLoading) {
    return <p>loading</p>
  }
  return (
    <div className=''>
   

      <div className='grid grid-cols-5 gap-3'>

        {
          products.map(product => <ProductCard key={product._id} product={product}/>)
        }

      </div>


    </div>
  )
}

export default Home