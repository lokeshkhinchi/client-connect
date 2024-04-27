import React, { useEffect, useState } from 'react'
import { ArrowDownIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { ButtonText, Div, H3, Li, P, Span, Ul } from './StyledComponents'
import { orders } from '../Data/dataCafe';

function OrderItem() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen)

  return (<li
    className="relative  py-3 gap-x-4"
  >
    <Div className="flex justify-between gap-x-3">
      <div className=" min-w-0 min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">
          <a href="{cafe.href}">
            Cafe  Name
          </a>
        </p>
        <p className="text-sm leading-6 text-gray-900">user name</p>
      </div>
      <div className="flex shrink-0 flex-col items-end">
        <p className="mt-1 flex text-xs leading-5 text-gray-500">
          Qty : 10 Box
        </p>
        <ButtonText onClick={toggleOpen} type="button">
          {isOpen ? 
            <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
          :
            <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
          }
        </ButtonText>
      </div>
    </Div>

    {isOpen && <Div className="text-sm mt-2">
      <P className="flex items-center mb-1"><Span>+91-99999999</Span> <ButtonText className="ml-auto" type="button">Location</ButtonText></P>
      <H3 className="text-sm font-medium text-gray-900 mb-2">Order Summary</H3>
      <Ul role="list" className="space-y-2 text-sm">
        {orders.map((item, index)=> <Li key={`order_item_${item}${index}`} className="text-gray-400 flex">
          <Span className="mr-2">1.</Span>
          <Span className="text-gray-600 mr-auto">chocolate * 4</Span>
          <Span className>Rs: 600</Span>
        </Li>)}
      </Ul>

      <Div className="text-right mt-2">Total : 3000 Rs</Div>
    </Div>}
  </li>)
}

export default OrderItem