import React, { useEffect, useMemo, useState } from 'react'
import { ProductCard } from '../components'
import { products } from '../data/productData';
import { IoFilter } from "react-icons/io5";


const Product = () => {
  const [price, setPrice] = useState(0)
  const [openFilter, setOpenFilter] = useState(false)
  const [size, setSize] = useState('all')
  const [gender, setGender] = useState('all')
  const [brand, setBrand] = useState('all')
  // const [material, setMaterial] = useState('')
  const [color, setColor] = useState('all')
  const [newArrivals, setNewArrivals] = useState(false)
  const [productIds, setProductIds] = useState([])
  const [prodNum, setProdNum] = useState(20)

  useEffect(()=>{
    
      let tempArr = []; // Reset the array
      for (let i = 0; i < prodNum; i++) {
        const max = products.length;
        const randomNumber = Math.floor(Math.random() * max);
        tempArr.push(products[randomNumber].id);
      }
      setProductIds([...productIds, ...tempArr])
      // return randomNum; // Return the array

  },[prodNum])

  const loadMore = () => {
      setProdNum(num => num + 20)
  };

  const handleApply = (e) => {
    e.preventDefault()

    const filters = {
      price,
      size,
      gender,
      brand,
      // material,
      color,
      newArrivals,
    };




    let productNumber = 20
    let tempArr = []
    let tempIdArr = []
    for (let i = 0; i < productNumber; i++) {
      tempArr = products.filter((product) => {

        // return(product);
        const matchesPrice = filters.price ? product.offer.price <= filters.price : true;

        const matchesSize = filters.size !== 'all' ? product.sizes.includes(Number(filters.size)) : true;
        // const matchesGender = filters.gender !== 'all' ? product.specification.ideal === filters.gender : true;
        const matchesBrand = filters.brand !== 'all' ? product.brand === filters.brand.toLowerCase() : true;
        // const matchesMaterial = filters.material !== 'all' ? product.specification.material === filters.material : true;
        // const matchesColor = filters.color !== 'all' ? product.specification.color === filters.color : true;
        // const matchesNewArrivals = filters.newArrivals !== undefined ? product.offer.new_arrival === filters.newArrivals : true;

        if ( matchesPrice && matchesSize  && matchesBrand ) {
          return product
        }
      })

      tempIdArr = tempArr.map((product) => product.id !== undefined && product.id)

    }

    // console.log(tempArr);
    // console.log(tempIdArr);

    // console.log(filters);
    setProductIds(tempIdArr)
    setOpenFilter(false)
  };

  return (
    <section className='w-full relative'>
      {/* filter */}
      <div className=" w-full h-10 sticky top-14 px-4 lg:px-10 left-0 bg-ground z-10 flex items-center justify-between border-b-[1px] border-surface">
        <h2 className='text-xl'>All Products</h2>
        <div className="">
          <button type='button' onClick={() => setOpenFilter(!openFilter)} className='flex items-center gap-2  py-[2px] px-2 rounded-lg boxShadow '><IoFilter /> Filter</button>

          <form onSubmit={handleApply} className={`${openFilter ? "flex" : "hidden"} absolute top-10 right-4 bg-surface w-[300px] p-4 flex-col gap-2`}>
            <div className="flex gap-1 items-center">
              <input type="range" id="price" value={price} onChange={(e) => setPrice(e.target.value)} min={0} max={999} />
              <label htmlFor="price">Price: $ 0 - {price}</label>
            </div>

            {[
              { label: "Size", id: "size", options: ["All", "5", "6", "7", "8", "9", "10", "11"], value: size, onChange: setSize },
              // { label: "Gender", id: "gender", options: ["All", "Male", "Female"], value: gender, onChange: setGender },
              { label: "Brand", id: "brand", options: ["All", "Nike", "Adidas", 'Clarks', 'Puma', 'Skecher', 'Sparx', 'Paragon', 'Metro'], value: brand, onChange: setBrand },
              // { label: "Material", id: "material", options: ["All", "Cotton", "Polyester"], value: material, onChange: setMaterial },
              // { label: "Color", id: "color", options: ["All", "Blue", "Green"], value: color, onChange: setColor },
            ].map(({ label, id, options, value, onChange }) => (
              <div key={id} className="flex gap-1 items-center">
                <label htmlFor={id}>{label}:</label>
                <select onChange={(e) => onChange(e.target.value)} name={id} id={id} value={value} className="outline-none bg-transparent">
                  {options.map(option => (
                    <option key={option} value={option.toLowerCase()}>{option}</option>
                  ))}
                </select>
              </div>
            ))}

            {/* <div className="flex gap-1 items-center">
              <label htmlFor="newArrivals">New Arrivals:</label>
              <input onChange={() => setNewArrivals(!newArrivals)} type="checkbox" checked={newArrivals} id="newArrivals" className="h-4 w-4" />
            </div> */}

            <div className="w-full grid grid-cols-2 mt-2">
              <button type='button' onClick={() => setOpenFilter(false)} className="py-1 bg-ground">Cancel</button>
              <button type="submit" className="py-1 bg-primary">Apply</button>
            </div>
          </form>

        </div>
      </div>

      {/* products */}
      <div className=' w-full grid grid-cols-2 lg:grid-cols-5 gap-2 p-4 lg:p-10 relative '>
        {productIds.map((id, index) => (
          <ProductCard productId={id} key={index} />
        ))}
      </div>

      <div className="w-full flex items-center justify-center py-10">
        <button type='button' onClick={loadMore} className='px-4 py-1 border-secondary border-[1px] '>Load more</button>
      </div>
    </section>
  )
}

export default Product