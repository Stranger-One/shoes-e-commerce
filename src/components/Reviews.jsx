import React from 'react'
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoMdStar } from "react-icons/io";

const Reviews = ({review, index}) => {
    // console.log(review, index);
    return (
        <div key={index} className="px-4 lg:py-2 boxShadow">
            <h2 className='text-xl'>{review.name}</h2>
            <div className='flex items-center gap-1 text-xl'>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                {review.rating}
            </div>
            <h2 className='text-light'>Reviews for: {review.review_for}</h2>
            <p className=' line-clamp-3 leading-tight my-2	'>{review.review} </p>
            <div className="flex gap-4 my-2">
                <button className='px-4 py-1 flex items-center gap-1 border-[1px] border-secondary rounded-lg '>{review.like} <BiSolidLike />
                </button>
                <button className='px-4 py-1 flex items-center gap-1 border-[1px] border-secondary rounded-lg '>{review.dislike} <BiSolidDislike />
                </button>
            </div>
            <h4>{review.date}</h4>
        </div>
    )
}

export default Reviews