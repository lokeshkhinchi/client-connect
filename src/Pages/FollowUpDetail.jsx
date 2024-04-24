import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { followUpHistory } from '../Data/dataCafe';
import Modal from '../Components/Modal';
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
    <div className='cafe-info-heder'>{cafeId}</div>
    <div className='cafe-follow-up-wrap'>
      <div className='cafe-follow-up-body'></div>
      <div className='cafe-follow-up-body'>

        <table>
          <tr>
            <th>S.No.</th>
            <th>Contact Person</th>
            <th>Reason</th>
            <th>Sales Executive</th>
            <th>Status</th>
          </tr>

          {followUpHistory.map((row, index) => {
            return <tr key={index+row.id}>
             <td>{index+1}</td>
             <td>
                <div>{row?.contactPerson} ({row?.contactPersonRoll})</div>
                <div>{row?.contactPersonNumber}</div>
                <div>{row?.reason}</div>
             </td>
             <td>
                <div>{row?.reason}</div>
                {row?.comments ? <div>{row?.comments}</div> : ""}                
              </td>
              <td>
                <div>{row?.executive}</div>
                <div>{row?.executiveNumber}</div>
              </td>
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