import React, { useState } from 'react'
import { contacts, followUpHistory } from '../../Data/dataCafe';
import CafeDetailHeader from '../../Components/CafeDetailHeader';
import CafeDetailContacts from '../../Components/CafeDetailContacts';
import { Button } from '../../Components/StyledComponents';
import NewFollowUpForm from '../../Components/NewFollowUpForm';
import Modal from '../../Components/Modal';

function CafeDetail() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <CafeDetailHeader />

      <CafeDetailContacts contacts={contacts} />

      {/* Left Table */}
      <div className="">
        <h2 className="text-lg font-semibold mb-4 mt-5">Follow Up</h2>
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                Header 1
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                Header 2
              </th>
              {/* Add more headers if needed */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                Data 1
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                Data 2
              </td>
              {/* Add more rows and data cells if needed */}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Right Table */}
      <div className="b mb-4">
        <h2 className="text-lg font-semibold mb-4 mt-5">Order History</h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 border border-gray-300">S.No.</th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-300">Contact Person</th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-300">Reason</th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-300">Sales Executive</th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-300">Status</th>
          </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>

      <Button onClick={handleOpenModal}>New Follow Up</Button>

      <Modal isOpen={isOpen} onClose={handleCloseModal} title="Follow Up Action">
        <NewFollowUpForm />
      </Modal>
    </>
  )
}

export default CafeDetail