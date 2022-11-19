import React from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import CategoryMenu from '../../share/category/CategoryMenu'

const Category = () => {

  const query = useParams()
  const categoryName = query.categoryName;

  const { data: products, isLoading } = useQuery(['products',categoryName], () => fetch(`http://localhost:5001/products/${categoryName}`).then(res => res.json()))


  if (isLoading) {
    return <p>loading</p>
  }

  return (

    

      <div>
        <h1> This is {categoryName} page</h1>
        <div className='grid grid-cols-5 gap-3'>

        {
          products.map(product => <ProductCard key={product._id} product={product}/>)
        }

      </div>
    </div>
  )
}

export default Category