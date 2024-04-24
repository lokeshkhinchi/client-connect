import React from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { contacts } from '../../Data/dataCafe';

function CafeDetail() {
  const { cafeId } = useParams();
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cafe Details */}
      <div className="container mx-auto mt-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-semibold">Cafe Name</h1>
            <p className="text-gray-600">Address, Onboarding Date</p>
          </div>
          <div className="text-right">
            <p>Contact Person: <span className="font-semibold">Name</span></p>
            <p>Phone: <span className="font-semibold">Number</span></p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              <Link to={`/location`}>Location</Link>
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">Cafe Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contacts.slice(0, 4).map((contact, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded">
                <p className="text-md font-semibold mb-2">{contact.name}</p>
                <p className="text-sm mb-2">{contact.role}</p>
                <p className="text-sm">{contact.number}</p>
              </div>
            ))}
          </div>
        </div>

        
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