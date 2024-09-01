import React from 'react'

const InfiniteScroller = () => {
    const brandLogos = [
        "brandLogos/adidas.png",
        "brandLogos/PARAGON.webp",
        "brandLogos/puma.png",
        "brandLogos/skechers.png",
        "brandLogos/sparx.png",
        "brandLogos/woodland.png",
        "brandLogos/skechers.png",
      ]
    
    return (
        <div className="brandsInfinite w-full mt-10 overflow-hidden whitespace-nowrap hidden lg:block">
            <div className=" inline-block whitespace-nowrap animation">
                {brandLogos.map((image, index) => (
                    <img src={image} key={index} alt="" className='h-10 contrast-0 inline-block mx-4' />
                ))}
            </div>
            <div className=" inline-block whitespace-nowrap animation">
                {brandLogos.map((image, index) => (
                    <img src={image} key={index} alt="" className='h-10 contrast-0 inline-block mx-4' />
                ))}
            </div>
        </div>
    )
}

export default InfiniteScroller