import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { contacts, followUpHistory } from '../Data/dataCafe';
import Modal from '../Components/Modal';
import CafeDetailHeader from '../Components/CafeDetailHeader';
import CafeDetailContacts from '../Components/CafeDetailContacts';
import FollowUpForm from '../Components/FollowUpForm';
const data = [{
  id: 1,

}]
function FollowUpDetail() {
  const { cafeId } = useParams();

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

  return (
    <>
    <CafeDetailHeader />
    <CafeDetailContacts contacts={contacts} />
    <FollowUpForm />
    <div className='cafe-follow-up-wrap'>
      <div className='cafe-follow-up-body'></div>
      <div className='cafe-follow-up-body overflow-x-auto'>

        <table className="w-full table-auto border-collapse border border-gray-300">
          <tr>
            <th className="px-4 py-2 bg-gray-200 border border-gray-300">S.No.</th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-300">Contact Person</th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-300">Reason</th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-300">Sales Executive</th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-300">Status</th>
          </tr>

          {followUpHistory.map((row, index) => {
            return <tr key={index+row.id}>
             <td className="px-4 py-2 border border-gray-300">{index+1}</td>
             <td className="px-4 py-2 border border-gray-300">
                <div>{row?.contactPerson} ({row?.contactPersonRoll})</div>
                <div>{row?.contactPersonNumber}</div>
                <div>{row?.reason}</div>
             </td>
             <td className="px-4 py-2 border border-gray-300">
                <div>{row?.reason}</div>
                {row?.comments ? <div>{row?.comments}</div> : ""}                
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <div>{row?.executive}</div>
                <div>{row?.executiveNumber}</div>
              </td>

              <td className="px-4 py-2 border border-gray-300">l</td>
          </tr>
          })}
          

        </table>
        <button onClick={handleOpenModal} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Open Modal</button>
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
      </div>
    </div>
    </>
  )
}

export default FollowUpDetail