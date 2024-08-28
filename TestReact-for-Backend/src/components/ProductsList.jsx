// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import Product from './Product';

// function ProductsList() {
//     const [products, setProducts] = useState([]);
//   const [total, setTotal] = useState(0);

//   const getProducts = async () => {
//     try {
//       const res = await axios.get('/products');
//       console.log(res.data);
//       if (Array.isArray(res.data)) {
//         setProducts(res.data);
//         setTotal(res.data.length);
//       } else {
//         console.error('Expected an array, got:', res.data);
//         setProducts([]);
//         setTotal(0);
//       }
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       setProducts([]);
//       setTotal(0);
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const handleClick = async (id) => {
//     try {
//       const res = await axios.delete(`/products/${id}`);
//       console.log(res.data);
//       if (res.data._id) {
//         setProducts(products.filter((p) => p._id !== res.data._id));
//       }
//     } catch (error) {
//       if (error.response) {
//         console.error("Error data:", error.response.data);
//         console.error("Error status:", error.response.status);
//         console.error("Error headers:", error.response.headers);
//       } else if (error.request) {
//         console.error("Error request:", error.request);
//       } else {
//         console.error("Error message:", error.message);
//       }
//       console.error("Error config:", error.config);
//       alert("Failed to delete the product. Please try again.");
//     }
//   };
//   const handlePage = async (page) => {
//     // try {
//     //   const res = await axios.get('/products?page='+page);
//     //   console.log(res.data);
//     //   if (Array.isArray(res.data)) {
//     //     setProducts(res.data);
//     //   } else {
//     //     console.error('Expected an array, got:', res.data);
//     //     setProducts([]);
//     //   }
//     // } catch (error) {
//     //   console.error('Error fetching products:', error);
//     //   setProducts([]);
//     // }
//   };
//   const handleSort = async (e) => {
//     // const field = e.target.value.split(".");
//     // const res 
//     // setProducts(res.da= await axios.get(`/products?sort=${field[0]}&order=${field[1]}`);
//     // console.log(res.data);ta);
//   };
//   return (
//     <div className="container mx-auto px-4 py-8">
//   <div className="mb-6">
//     <select 
//       onChange={handleSort}
//       className="w-full sm:w-auto px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//     >
//       <option value="price.desc">Price High to Low</option>
//       <option value="price.asc">Price Low to High</option>
//       <option value="rating.desc">Rating High to Low</option>
//       <option value="rating.asc">Rating Low to High</option>
//     </select>
//   </div>

//   {/* <div className="mb-6 flex flex-wrap gap-2">
//     {Array(Math.ceil(total / 6))
//       .fill(0)
//       .map((e, i) => (
//         <button 
//           key={i} 
//           onClick={() => handlePage(i + 1)}
//           className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         >
//           {i + 1}
//         </button>
//       ))}
//   </div> */}

//   <div className="flex flex-wrap -mx-4">
//     {Array.isArray(products) &&
//       products.map((product, index) => (
//         <Product {...product} key={product._id || index} handleClick={handleClick} />
//       ))}
//   </div>
// </div>
//   )
// }

// export default ProductsList

import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

// Set up a base URL for axios
axios.defaults.baseURL = 'http://localhost:8080'; // Replace with your actual backend URL

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const getProducts = async () => {
    try {
      const res = await axios.get('/products');
      console.log(res.data);
      if (Array.isArray(res.data)) {
        setProducts(res.data);
        setTotal(res.data.length);
      } else {
        console.error('Expected an array, got:', res.data);
        setProducts([]);
        setTotal(0);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
      setTotal(0);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleClick = async (id) => {
    try {
      const res = await axios.delete(`/products/${id}`);
      console.log(res.data);
      if (res.data._id) {
        setProducts(products.filter((p) => p._id !== res.data._id));
      }
    } catch (error) {
      if (error.response) {
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      console.error("Error config:", error.config);
      alert("Failed to delete the product. Please try again.");
    }
  };

  const handlePage = async (page) => {
    try {
      const res = await axios.get(`/products?page=${page}`);
      console.log(res.data);
      if (Array.isArray(res.data)) {
        setProducts(res.data);
      } else {
        console.error('Expected an array, got:', res.data);
        setProducts([]);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    }
  };

  const handleSort = async (e) => {
    const [field, order] = e.target.value.split(".");
    console.log(field, order);
    
    if (!field || !order) {
      console.error('Invalid sort value:', e.target.value);
      setProducts([]);
      return;
    }
  
    try {
      const res = await axios.get(`/products?sort=${field}&order=${order}`);
      
      if (Array.isArray(res.data)) {
        setProducts(res.data);
        console.log(res.data);
      } else {
        console.error('Expected an array, got:', res.data);
        setProducts([]);
      }
    } catch (error) {
      console.error('Error fetching sorted products:', error);
      setProducts([]);
    }
  };
  


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <select 
          onChange={handleSort}
          className="w-full sm:w-auto px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="price.desc">Price High to Low</option>
          <option value="price.asc">Price Low to High</option>
          <option value="rating.desc">Rating High to Low</option>
          <option value="rating.asc">Rating Low to High</option>
        </select>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {Array(Math.ceil(total / 6))
          .fill(0)
          .map((e, i) => (
            <button 
              key={i} 
              onClick={() => handlePage(i + 1)}
              className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {i + 1}
            </button>
          ))}
      </div>

      <div className="flex flex-wrap -mx-4">
        {Array.isArray(products) &&
          products.map((product, index) => (
            <Product {...product} key={product._id || index} handleClick={handleClick} />
          ))}
      </div>
    </div>
  );
}

export default ProductsList;
