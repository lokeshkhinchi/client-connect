import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { name: 'Total Subscribers', stat: '71,897' },
  { name: 'Avg. Open Rate', stat: '58.16%' },
  { name: 'Avg. Click Rate', stat: '24.57%' },
]

function Home() {
  return(<>
  <h2 className="text-lg font-semibold mb-2">Important Links</h2>
  <nav className="flex flex-1 flex-col">
    <ul role="list" className="-mx-2 space-y-1">
    <Link to="/admin/cart" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold">
        Create Order
      </Link>

      <Link to="/admin/cafes" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold">
        Cafe Lists
      </Link>

      <Link to="/admin/onboarding" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold">
        New Onboarding
      </Link>

      
    </ul>
  </nav>

  <div>
    <h3 className="text-base font-semibold leading-6 text-gray-900 mt-6">Todays Info</h3>
    <dl className="mt-3 grid grid-cols-1 gap-5">
      {stats.map((item) => (
        <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
        </div>
      ))}
    </dl>
  </div>
  </>)
}

export default Home