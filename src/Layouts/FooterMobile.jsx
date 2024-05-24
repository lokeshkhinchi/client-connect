import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, HomeIcon, HomeModernIcon, UserGroupIcon, InboxStackIcon } from '@heroicons/react/24/outline'
// import { HomeIcon } from '@heroicons/react/20/solid';

const navigation = [
  { id: 1, name: 'Home', icon: <HomeIcon className="h-6 w-6" aria-hidden="true" />, href: '/admin' },
  { id: 2, name: 'Follow Up', icon: <UserGroupIcon className="h-6 w-6" aria-hidden="true" />, href: '/admin/follow-up' },
  { id: 3, name: 'Order', icon: <InboxStackIcon className="h-6 w-6" aria-hidden="true" />, href: '/admin/order' },
]

function FooterMobile() {

  return (
    <footer className="flex border-t-2 mt-auto p-2 bottom-0 left-0 right-0">
      {navigation.map((nav, index) => 
      <NavLink className={({isActive}) => isActive ? "flex flex-1 flex-col items-center text-indigo-600" : "flex flex-1 flex-col items-center"} key={`nav_item_${nav.id}_${index}`} to={nav.href}>
        {nav.icon} <span className="text-xs font-semibold mt-2">{nav.name}</span>
        
      </NavLink>)}
    </footer>
  )
}

export default FooterMobile