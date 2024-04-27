import React, { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { ButtonText } from '../Components/StyledComponents'
import Pagination from '../Components/Pagination'
import { followUpList } from '../Data/dataCafe';
import Modal from '../Components/Modal';


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
      {followUpList.map((cafe) => (
        <li
          key={cafe.email}
          className="relative flex gap-x-4 justify-between gap-x-3 py-3"
        >
          <div className=" min-w-0 min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              <a href="{cafe.href}">
                {cafe.cafeName}
              </a>
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


    <Modal isOpen={isOpen} onClose={handleCloseModal} title="Modal Title" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
        <input type="text" id="name" className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md" required />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
        <input type="email" id="email" className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md" required />
      </div>

      {/* Add more form fields as children */}
    </Modal>
    </>
  )
}

export default FollowUp