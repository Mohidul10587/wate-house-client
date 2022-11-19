import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';

const SubCategory = () => {
    const query = useParams()
    const subCategoryName = query.subCategoryName;

    const { data: products, isLoading } = useQuery(['products',subCategoryName], () => fetch(`http://localhost:5001/pro/${subCategoryName}`).then(res => res.json()))


    if (isLoading) {
      return <p>loading</p>
    }
  
    return (
      <div>
        <h1> {subCategoryName} </h1>
        <div className='grid grid-cols-5 gap-3'>
  
        {
          products.map(product => <ProductCard key={product._id} product={product}/>)
        }
        </div>
      </div>
    )
  }
  

export default SubCategory