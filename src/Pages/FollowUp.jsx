import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const cafeList = [
  {
    id: 1,
    cafeName: 'Cafe Name',
    name: 'Manager Name',
    phone: '999999999',
    role: 'Manager',
    locationLink: "",
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    meetTime: 'Today First Half',
    priority: 'medium',
  },
  {
    id: 1,
    cafeName: 'Cafe Name',
    name: 'Manager Name',
    phone: '999999999',
    role: 'Manager',
    locationLink: "",
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    meetTime: 'Today First Half',
    priority: 'medium',
  },
  {
    id: 1,
    cafeName: 'Cafe Name',
    name: 'Manager Name',
    phone: '999999999',
    role: 'Manager',
    locationLink: "",
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    meetTime: 'Today First Half',
    priority: 'medium',
  },
  {
    id: 1,
    cafeName: 'Cafe Name',
    name: 'Manager Name',
    phone: '999999999',
    role: 'Manager',
    locationLink: "",
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    meetTime: 'Today First Half',
    priority: 'medium',
  }
]
function FollowUp() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {cafeList.map((cafe) => (
        <li
          key={cafe.email}
          className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8"
        >
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={cafe.imageUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                <a href={cafe.href}>
                  {cafe.cafeName}
                </a>
              </p>
              <p className="mt-1 flex text-xs leading-5 text-gray-500">
                  {cafe.meetTime} : {cafe.priority}
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{cafe.name} ({cafe.role})</p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
              <a href={`mailto:${cafe.email}`} className="relative truncate hover:underline">{cafe.phone}</a>
                </p>
            </div>
            <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default FollowUp