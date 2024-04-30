import React, { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { ButtonText, Div, Span } from '../Components/StyledComponents'
import Pagination from '../Components/Pagination'
import { followUpList } from '../Data/dataCafe';
import Modal from '../Components/Modal';
import CafeDetailHeader from '../Components/CafeDetailHeader';
import FollowUpForm from '../Components/FollowUpForm';
import { Link } from 'react-router-dom';


function FollowUp() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
    setIsOpen(false);
  };
  return (<>
    <ul role="list" className="divide-y divide-gray-100">
      {followUpList.map((cafe, index) => (
        <li
          key={`followup_list_item_${index}`}
          className="relative flex gap-x-4 justify-between gap-x-3 py-3"
        >
          <div className=" min-w-0 min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              <Link to="/cafe/1">
                {cafe.cafeName}
              </Link>
            </p>
            <p className="text-sm leading-6 text-gray-900">{cafe.name} ({cafe.role})</p>
          </div>
          <div className="flex shrink-0 flex-col items-end">
            <p className="mt-1 flex text-xs leading-5 text-gray-500">
              {cafe.meetTime} : {cafe.priority}
            </p>
            <ButtonText type="button" onClick={handleOpenModal}>Action</ButtonText>
          </div>
        </li>
      ))}
    </ul>
    <Pagination />


    <Modal isOpen={isOpen} onClose={handleCloseModal} title="Follow Up Action" onSubmit={handleSubmit}>
      <FollowUpForm />
    </Modal>
    </>
  )
}

export default FollowUp