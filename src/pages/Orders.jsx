import React from 'react'
import { Order } from '../components'

const Orders = () => {
  return (
    <div className='w-full flex flex-col gap-2 px-10 pb-10'>
      <Order productId={'1391487434023925615'} />
      <Order productId={'1391487434023925615'} />
      <Order productId={'1391487434023925615'} />
      <Order productId={'1391487434023925615'} />
    </div>
  )
}

export default Orders