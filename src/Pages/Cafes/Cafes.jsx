import React from 'react'
import { orders } from '../../Data/dataCafe';
import CafeCard from './CafeCard';
import Pagination from '../../Components/Pagination';

function Cafes() {
  return (
    <>
      <ul role="list" className="grid grid-cols-1 gap-6 mb-5">
        {orders.map((order, index) => <CafeCard key={`cafe_order_item_${order}${index}`} />)}
      </ul>    
      <Pagination />
    </>
  )
}

export default Cafes