import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { ButtonText, Div, H3, Li, P, Span, Ul } from './StyledComponents';

function OrderItem({ order }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const { sales_person, delivery_info, status, SKU, cafe } = order.attributes;

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    SKU.forEach((skuItem) => {
      const offeredPrice = cafe.data.attributes.offered_pricing.find(
        (offer) => offer.flavour === skuItem.flavour
      );
      if (offeredPrice) {
        totalPrice += offeredPrice.quantity * skuItem.quantity;
      }
    });
    return totalPrice;
  };

  const totalPrice = calculateTotalPrice();

  const openMapUrl = () => {
    window.open(`https://www.google.com/maps?q=${cafe.data.attributes.location.latitude},${cafe.data.attributes.location.longitude}&z=14`, '_blank');
  }

  return (
    <li className="relative py-3 gap-x-4">
      <Div className="flex justify-between gap-x-3">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            <a href={cafe.data.attributes.location}>
              {cafe.data.attributes.name}
            </a>
          </p>
          <p className="text-sm leading-6 text-gray-900">{sales_person.name}</p>
        </div>
        <div className="flex shrink-0 flex-col items-end">
          <p className="mt-1 flex text-xs leading-5 text-gray-500">
            Status: {status}
          </p>
          <ButtonText onClick={toggleOpen} type="button">
            {isOpen ? (
              <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </ButtonText>
        </div>
      </Div>

      {isOpen && (
        <Div className="text-sm mt-2">
          <P className="flex items-center mb-1">
            <Span>+91-99999999</Span> {/* Replace with actual contact if available */}
            <ButtonText className="ml-auto" type="button" onClick={openMapUrl}>
              Location
            </ButtonText>
          </P>
          <H3 className="text-sm font-medium text-gray-900 mb-2">Order Summary</H3>
          <Ul role="list" className="space-y-2 text-sm">
            {SKU.map((item, index) => (
              <Li key={`order_item_${index}`} className="text-gray-400 flex">
                <Span className="mr-2">{index + 1}.</Span>
                <Span className="text-gray-600 mr-auto">{item.flavour} * {item.quantity}</Span>
              </Li>
            ))}
          </Ul>
          <Div className="text-right mt-2">Total: Rs {totalPrice}</Div>
        </Div>
      )}
    </li>
  );
}

export default OrderItem;
