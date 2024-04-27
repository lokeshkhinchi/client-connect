import React, { useEffect, useState } from 'react'
import { orders } from '../Data/dataCafe'
import OrderItem from '../Components/OrderItem'
import Pagination from '../Components/Pagination'

function Order() {

  return (<>
  <ul role="list" className="divide-y divide-gray-100">
    {orders.map((order, index) => <OrderItem key={`order_item_${order}${index}`} />)}
  </ul>
  <Pagination />
  </>)
}

export default Order