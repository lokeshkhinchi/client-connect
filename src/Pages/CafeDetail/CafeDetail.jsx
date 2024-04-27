import React from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { contacts } from '../../Data/dataCafe';
import CafeDetailHeader from '../../Components/CafeDetailHeader';
import CafeDetailContacts from '../../Components/CafeDetailContacts';

function CafeDetail() {
  const { cafeId } = useParams();
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cafe Details */}
      <div className="container mx-auto mt-8">
        
        <CafeDetailHeader />

        <CafeDetailContacts contacts={contacts} />

        

        
        <div className="min-h-screen bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Table */}
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg font-semibold mb-4">Follow Up</h2>
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
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg font-semibold mb-4">Order History</h2>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default CafeDetail