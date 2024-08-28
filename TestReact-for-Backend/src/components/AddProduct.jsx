import axios from 'axios';
import { useState } from 'react'
axios.defaults.baseUrl = "";


function AddProduct() {
    const [product,setProduct] = useState({}); 

    const handleChange = (e)=>{
          setProduct({
              ...product,
              [e.target.name]:e.target.value
          })
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(product);
      addProduct(product)
    }
  
    const addProduct = async(product)=>{
        try {
            const res = await axios.post('/products',product);
            console.log(res.data);
        } catch (error) {
            console.error('Error adding product:', error);
        }
      
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
    <fieldset>
      <legend className="text-2xl font-bold mb-6 text-center">Add Product</legend>
      
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700 mb-1">
          Thumbnail
        </label>
        <input
          id="thumbnail"
          name="thumbnail"
          type="text"
          placeholder="Thumbnail URL"
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
          Price
        </label>
        <input
          id="price"
          name="price"
          type="number"
          placeholder="Price"
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          id="category"
          name="category"
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Choose</option>
          <option value="smartphone">Smartphone</option>
          <option value="laptops">Laptops</option>
        </select>
      </div>
  
      <div className="mb-4">
        <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
          Brand
        </label>
        <select
          id="brand"
          name="brand"
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Choose</option>
          <option value="apple">Apple</option>
          <option value="samsung">Samsung</option>
        </select>
      </div>
  
      <div className="mb-6">
        <label htmlFor="discountPercentage" className="block text-sm font-medium text-gray-700 mb-1">
          Discount Percentage
        </label>
        <input
          id="discountPercentage"
          name="discountPercentage"
          type="number"
          placeholder="Discount Percentage"
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-1 text-sm text-gray-500">Enter the discount percentage</p>
      </div>
  
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Product
        </button>
      </div>
    </fieldset>
  </form>
  )
}

export default AddProduct