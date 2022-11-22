import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const Form = () => {
  const womenFashion = ['Clothing', 'Winter Special', 'Muslim Were',"Shoes","Watches","Jewellers"]
  const healths_and_beauty = ['Bath and Body', 'Beauty Tools', 'Fragrance',"Hair Care", "Makeup","Mens Care"]
  const watches = ['Kids', 'Laptop', 'Luggage',"Travel Bags","Mens Bags","Womens Bags"]

  const [category, setCategory] = useState([])



  function selectedSubjectName() {
    var subjectIdNode = document.getElementById('subjectName');
    var value =
      subjectIdNode.options[subjectIdNode.selectedIndex].value;
    console.log("The selected value=" + value);

    if (value === 'Women Fashion') {
      setCategory(womenFashion)
    }
    if (value === 'Healths and Beauty') {
      setCategory(healths_and_beauty)
    }
    if (value === 'Watches') {
      setCategory(watches)
    }
  }


  const { register, formState: { errors }, handleSubmit, reset } = useForm();



  const imageStorageKey = '6c0277e2286d8c4a1059080d1574e2a7'


  const onSubmit = async data => {
    const image = data.image[0]
    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`


    fetch(url, {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(result => {
        if (result.success) {

          const imgUrl = result.data.url


          const product = {
            name: data.name,
            price: data.price,
            category: data.category,
            sub_category: data.sub_category,
            img: imgUrl
          }

          fetch('https://blooming-anchorage-14599.herokuapp.com/product', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify(product)
          })
            .then(res => res.json())
            .then(inserted => {

              toast.success('Uploaded successfully')
              reset()
            })
        }
      })

  }
  
  return (
    <div className='flex justify-center'>
    
      <div className=''>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>

            </label>
            <input

              type="text"
              placeholder="Name"
              className="input input-bordered border-black w-full max-w-xs"

              {...register("name", {
                required: {
                  value: true,
                  message: 'This is required field'
                }

              })} />

            <label className="label">

              {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name?.message}</span>}

            </label>

          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Price</span>

            </label>
            <input

              type="number"
              placeholder="Price"
              className="input input-bordered border-black w-full max-w-xs"

              {...register("price", {
                required: {
                  value: true,
                  message: 'This is required field'
                }

              })} />

            <label className="label">

              {errors.price?.type === 'required' && <span className='text-red-500'>{errors.price?.message}</span>}

            </label>

          </div>


          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category</span>
            </label>

            <select {...register("category")} onClick={() => selectedSubjectName()} id="subjectName" className="input input-bordered border-black w-full max-w-xs">
              <option>Select a category</option>
              <option value="Women Fashion">Women's Fashion</option>
              <option value="Healths and Beauty">Heath and beauty</option>
              <option value="Watches">Watches, Bags</option>

            </select>
            <label className="label">

              {errors.category?.type === 'required' && <span className='text-red-500'>{errors.category?.message}</span>}

            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Sub Category</span>

            </label>
            <select   {...register("sub_category", {
              required: {
                value: true,
                message: 'This is required field'
              }
            })} className="input input-bordered border-black w-full max-w-xs">
              <option>Select a sub-category</option>
              {category.map(i => <option key={i} value={i}>{i}</option>)}

            </select>
            <label className="label">
              {errors.sub_category?.value === true && <span className='text-red-500'>{errors.category?.message}</span>}
              {errors.sub_category?.type === 'required' && <span className='text-red-500'>{errors.sub_category?.message}</span>}

            </label>
          </div>





          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>

            </label>
            <input
              type="file"

              {...register("image", {
                required: {
                  value: true,
                  message: 'This is required field'
                }
              })} />
            <label className="label">
              {errors.image?.type === 'required' && <span className='text-red-500'>{errors.image?.message}</span>}
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-outline w-80 mt-10 hover:bg-pink-700">Add</button>


        </form>
      </div>
    </div>
  )
}

export default Form