import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonText } from '../../Components/StyledComponents'
import Modal from '../../Components/Modal'
import NewFollowUpForm from '../../Components/NewFollowUpForm'

function CafeCard() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (<>
    <li key="person.email" className="col-span-1 divide-y divide-gray-200 rounded-lg bg-gray-5066 shadow hover:shadow-md">
      <div className="flex w-full items-center justify-between space-x-3 p-3">
        <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900"><Link to="/cafe/1">Cafe Name</Link></h3>
            <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Converted
            </span>

            <ButtonText onClick={handleOpenModal}>Follow Up</ButtonText>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">123 Main Street, Anytown, USA 12345</p>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          
        </div>
      </div>
    </li>

    {isOpen && <Modal isOpen={isOpen} onClose={handleCloseModal} title="Follow Up Action">
      <NewFollowUpForm />
    </Modal>}
    </>
  )
}

export default CafeCard