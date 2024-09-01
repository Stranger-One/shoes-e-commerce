import React, { useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { InfiniteScroller, NewArrivals, ProductCard, SwiperComp } from '../components';
import { products } from '../data/productData';
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/authSlice';

const Home = () => {
  // const userDetails = useSelector(state => state.auth.userDetails)
  

  const brands = [
    "Nike ",
    "Adidas ",
    "Puma ",
    "clarks ",
    "skecher",
    "sparx",
    "beta india",
    "relaxo",
    "paragon",
    "metro",
    "red chief",
    "woodland",
  ];

  const brandPoster = [
    "brandPosters/1577.jpg",
    "brandPosters/1636.jpg",
    "brandPosters/4035288.jpg",
    "brandPosters/47824785.jpg",
    "brandPosters/367845692.jpg",
    "brandPosters/465972849.jpg",
    "brandPosters/73456927845.jpg",
  ];

  const generateRandomNumArr = (prodNum) => {
    let randomIds = []; // Reset the array
    for (let i = 0; i < prodNum; i++) {
      const max = products.length;
      const randomNumber = Math.floor(Math.random() * max);
      randomIds.push(products[randomNumber].id);
    }
    return randomIds; // Return the array
  };

  const randomIds = useMemo(() => generateRandomNumArr(15), [products.length]);
  // console.log(randomIds);
  return (
    <section className='w-full px-4 lg:px-10 py-6'>
      <div className=" w-full hero grid grid-cols-1 lg:grid-cols-[20%_80%] h-60 lg:h-96">
        <div className="h-full overflow-auto relative pr-1 hidden lg:block">
          <h2 className='text-lg sticky top-0 bg-ground'>All Brands</h2>
          <ul className='flex flex-col gap-1'>
            {brands.map((brand, index) => (
              <Link key={index} className='text-[16px] flex justify-between items-center capitalize px-2 py-1 bg-surface rounded-lg group'>
                <span>{brand}</span>
                <IoIosArrowForward className='group-hover:translate-x-[2px] ' />
              </Link>
            ))}
          </ul>
        </div>
        <div className="w-full h-60 lg:h-96 lg:pl-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-96"
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-navigation-size": "20px",
            }}
          >
            {brandPoster.map((brand, index) => (
              <SwiperSlide key={index} className='h-96' >
                <img src={brand} className="h-full w-full object-cover" alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <InfiniteScroller />

      <div className="w-full mt-10">
        <h2 className='text-2xl font-semibold'>Top Sales</h2>
        <div className="w-full mt-3">
          <SwiperComp productArray={randomIds} />
          {/* send array of ids */}
        </div>
      </div>

      <div className="w-full h-[450px] mt-10">
        <img src="home-banner.jpg" alt="" className='w-full h-full object-cover object-center' />
      </div>

      <div className="w-full mt-10">
        <h2 className='text-2xl font-semibold'>Explore Our Products</h2>
        <div className="w-full mt-3 grid grid-cols-2 lg:grid-cols-5 gap-2">
          {randomIds.map((id, index) => (
            <ProductCard key={index} productId={id} />
          ))}
        </div>
      </div>

      <div className="w-full my-10">
        <h2 className='text-2xl font-semibold'>New Arrivals</h2>
        <NewArrivals />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 content-center my-10 gap-4 ">
        <div className='flex flex-col items-center border-surface border-[1px] py-10 rounded-lg justify-center'>
          <div className="h-12 w-12 rounded-full bg-secondary mb-4 flex items-center justify-center">
          <TbTruckDelivery  className='text-ground text-2xl'/>
          </div>
          <h2 className='uppercase text-lg'>free and fast delivery</h2>
          <p className='text-sm text-zinc-500'>free delivery for order over $78</p>
        </div>
        <div className='flex flex-col items-center border-surface border-[1px] py-10 rounded-lg justify-center'>
          <div className="h-12 w-12 rounded-full bg-secondary mb-4 flex items-center justify-center">
          <BiSupport  className='text-ground text-2xl'/>
          </div>
          <h2 className='uppercase text-lg'>free and fast delivery</h2>
          <p className='text-sm text-zinc-500'>free delivery for order over $78</p>
        </div>
        <div className='flex flex-col items-center border-surface border-[1px] py-10 rounded-lg justify-center'>
          <div className="h-12 w-12 rounded-full bg-secondary mb-4 flex items-center justify-center">
          <IoShieldCheckmarkOutline className='text-ground text-2xl ' />
          </div>
          <h2 className='uppercase text-lg'>free and fast delivery</h2>
          <p className='text-sm text-zinc-500'>free delivery for order over $78</p>
        </div>
      </div>


    </section>
  );
};

export default Home;
