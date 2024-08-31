import React, { useEffect, useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { IoMdStar } from "react-icons/io";
import { products } from '../data/productData.js'
import { MoreProduct, Reviews, SimilarProduct, SwiperComp } from '../components/index.js';
import { IoIosShareAlt } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowForward } from "react-icons/io";




const ProductDetails = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  const [similarSlides, setSimilarSlides] = useState(2.3)
  const [arrow, setArrow] = useState(true)
  const {productId} = useParams()
  const [product, setproduct] = useState()

  // const productId = '1391487434023925615'
  // console.log(product)
  console.log(productId);
  useEffect(()=>{
    const productArr = products.filter(product => product.id == productId)
    setproduct(productArr[0])
  },[productId])

  const generateRandomNumArr = (prodNum) => {
    let randomNum = []; // Reset the array
    for (let i = 0; i < prodNum; i++) {
      const max = products.length;
      const randomNumber = Math.floor(Math.random() * max);
      randomNum.push(randomNumber);
    }
    return randomNum; // Return the array
  };

  const randomNum = useMemo(() => generateRandomNumArr(15), [products.length]);



  useEffect(() => {
    if (screenSize < 640) {
      setSimilarSlides(2.3)
      setArrow(false)
    } else if (screenSize < 1024) {
      setSimilarSlides(3.3)
    } else {
      setSimilarSlides(5.3)
      setArrow(true)
    }
  }, [screenSize])

  window.addEventListener("resize", () => {
    setScreenSize(window.innerWidth)
  })



  return (
    // <div className="productDetailsContainer"></div>
    <section className='w-full h-full lg:py-10 lg:px-20'>
      {product ? (
        <div className="product w-full ">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div className="w-full relative  ">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                // navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-full"
              >
                {product.photos.map((image, index) => (
                  <SwiperSlide key={index} className='p-8 w-full h-[500px] overflow-hidden relative'>
                    <img src={image} alt="" className='object-cover' />
                    <div className="flex-col flex gap-4 absolute top-5 right-3">
                      <IoMdHeart className='text-4xl' />
                      <IoIosShareAlt className='text-4xl' />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {product.discount && (
                <span className='absolute top-4 right-2 z-10 text-xl px-2 py-0 bg-primary rounded-sm'>{product.discount} </span>
              )}
            </div>

            <div className="details p-4 flex flex-col gap-2">
              <h2 className='text-2xl leading-tight'>{product.title} </h2>
              <div className='flex items-center text-xl'>
                <IoMdStar className='text-3xl' />
                <IoMdStar className='text-3xl' />
                <IoMdStar className='text-3xl' />
                <IoMdStar className='text-3xl' />
                <IoMdStar className='text-3xl' />
                {product.rating} ({product.num_reviews}) </div>
              <div className='text-3xl flex gap-2 items-center'>${product.offer.price || product.typical_price_range}  </div>

              {/* sizes */}
              <div className="sizes">
                <h2 className='text-xl mb-2 font-semibold'>Size-UK/India</h2>
                <div className="flex gap-2 ">
                  {product.sizes.map((size, index) => (
                    <div key={index} className="">
                      <input
                        type="radio"
                        name="size"
                        id={`size-${size}`}
                        value={size}
                        className="hidden peer"
                      />
                      <label
                        htmlFor={`size-${size}`}
                        className="h-10 w-10 rounded-full border-[1px] border-secondary flex items-center justify-center cursor-pointer peer-checked:bg-primary"
                      >
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>


              {/* buttons */}
              <div className="w-full mt-10 grid grid-cols-2 gap-2 h-12">
                <button className='text-xl px-6 py-1 border-secondary border-[1px] '>Add to cart</button>
                <button className='text-xl px-6 py-1 bg-primary'>Buy now</button>
              </div>
            </div>
          </div>

          {/* offers */}
          <div className=" p-4 my-2 boxShadow">
            <h3><span className='font-bold'>Bank Offer</span> Get ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above <span className='text-primary'>T&C</span></h3>
            <h3><span className='font-bold'>Bank Offer</span> Get ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above <span className='text-primary'>T&C</span></h3>
            <h3><span className='font-bold'>Bank Offer</span> Get ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above <span className='text-primary'>T&C</span></h3>
          </div>

          {/* addresss */}
          <div className="w-full p-4 flex flex-wrap justify-between items-center my-2 boxShadow">
            <h2 className='text-2xl leading-tight col-span-full mb-2'>Delivered to:</h2>
            <div className="">
              <h2 className='capitalize'>customer name, 789796</h2>
              <h2 className='capitalize'>123, mahulpali, sambalpur, odisha</h2>
            </div>
            <Link className='px-2 py-1 text-lg rounded-lg border-[1px] border-secondary leading-tight h-fit'>Change</Link>

          </div>

          {/* product details */}
          <div className="details grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="mt-4 boxShadow  py-2 px-4">
              <h3 className='text-2xl mb-2'>Product Details</h3>
              <p className=''>{product.description}</p>
            </div>
            <div className="mt-4 boxShadow  py-2 px-4">
              <h3 className="text-2xl mb-2 ">Product Specifications</h3>
              <ul className="">
                {Object.keys(product.specification).map(key => (
                  <li key={key} className="capitalize">
                    <span className='text-zinc-600 mr-1 '>{key} :</span> {product.specification[key]}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          

          {/* similar product */}
          <div className="w-full p-4 ">
            <div className="flex justify-between items-center">
              <h2 className='text-2xl mb-2'>Similar Products</h2>
              <Link className='text-light flex items-center gap-1' >See all <IoMdArrowForward /></Link>
            </div>
            {/* <Swiper
              slidesPerView={similarSlides}
              spaceBetween={10}
              loop={false}
              navigation={arrow}
              modules={[Pagination, Navigation]}
              className="mySwiper w-full"
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-navigation-size": "20px",
              }}
            >
              {product.similarProduct.map((productId, index) => (
                <SwiperSlide key={index} className=' w-full  overflow-hidden '>
                  <SimilarProduct productId={productId} />
                </SwiperSlide>
              ))}
            </Swiper> */}

            <SwiperComp productArray={product.similarProduct} /> 
            {/* send array of ids */}

          </div>

          {/* product reviews */}
          <div className="w-full flex flex-col gap-2 mt-4">
            <h2 className='text-2xl mb-2 px-4'>Top Reviews</h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
              {product.reviews.map((review, index) => (
                <Reviews review={review} index={index} key={index} />
              ))}
            </div>
          </div>

          {/* explore like this */}
          <div className='w-full mt-4'>
            <h2 className='text-2xl mb-2 px-4'>Explore more like this</h2>
            <div className="w-full grid grid-cols-2 lg:grid-cols-5 p-2 gap-2">
              {randomNum.map((indexNum, index) => (
                <MoreProduct indexNum={indexNum} index={index} key={index} />
              ))}
            </div>
          </div>

        </div>) : (
        <div>something went wrong</div>
      )}

    </section>
  )
}

export default ProductDetails

