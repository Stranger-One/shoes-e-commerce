import React from 'react'

const NewArrivals = () => {
    return (
        <div className="w-full mt-3 grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-[200px_200px] gap-4 text-ground ">
            <div className="lg:col-span-2 lg:row-span-2 bg-cover bg-center flex items-end p-4" style={{ backgroundImage: 'url(new-arrivals/shoesoct7.jpg)' }}>
                {/* <img src="new-arrivals/shoesoct7.jpg" alt="" className='h-full w-full' /> */}
                <div className="w-[200px] p-2" style={{ background: 'radial-gradient(black 30%, transparent )' }}>
                    <h2 className="text-xl font-bold ">New Arrivals</h2>
                    <p className='leading-4 tesxt-sm line-clamp-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, veniam?</p>
                    <button className='px-2 py-0 border-b-2 border-primary text-primary hover:translate-y-1 duration-150'>Shop Now</button>
                </div>
            </div>
            <div className="bg-cover bg-center flex items-end p-4" style={{ backgroundImage: 'url(new-arrivals/black-leather-shoes-.jpg)' }}>
                {/* <img src="new-arrivals/black-leather-shoes-.jpg" alt="" className='h-full w-full' /> */}
                <div className="w-[200px] p-2" style={{ background: 'radial-gradient(black 30%, transparent)' }}>
                    <h2 className="text-xl font-bold ">New Arrivals</h2>
                    <p className='leading-4 tesxt-sm line-clamp-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, veniam?</p>
                    <button className='px-2 py-0 border-b-2 border-primary text-primary hover:translate-y-1 duration-150'>Shop Now</button>
                </div>
            </div>
            <div className="bg-cover bg-center flex items-end p-4" style={{ backgroundImage: 'url(new-arrivals/view-football-shoes.jpg)' }}>
                {/* <img src="new-arrivals/view-football-shoes.jpg" alt="" className='h-full w-full' /> */}
                <div className="w-[200px] p-2" style={{ background: 'radial-gradient(black 30%, transparent)' }}>
                    <h2 className="text-xl font-bold ">New Arrivals</h2>
                    <p className='leading-4 tesxt-sm line-clamp-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, veniam?</p>
                    <button className='px-2 py-0 border-b-2 border-primary text-primary hover:translate-y-1 duration-150'>Shop Now</button>
                </div>
            </div>
            <div className="lg:col-span-2 overflow-hidden bg-cover bg-center flex items-end p-4" style={{ backgroundImage: 'url(new-arrivals/view-soccer-shoes.jpg)' }}>
                {/* <img src="new-arrivals/view-soccer-shoes.jpg" alt="" className=' w-full object-center object-cover relative ' /> */}
                <div className="w-[200px] p-2" style={{ background: 'radial-gradient(black 30%, transparent)' }}>
                    <h2 className="text-xl font-bold ">New Arrivals</h2>
                    <p className='leading-4 tesxt-sm line-clamp-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, veniam?</p>
                    <button className='px-2 py-0 border-b-2 border-primary text-primary hover:translate-y-1 duration-150'>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default NewArrivals