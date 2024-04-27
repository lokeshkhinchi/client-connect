import React from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom';

function CafeDetailHeader() {
  return (
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
  )
}

export default CafeDetailHeader