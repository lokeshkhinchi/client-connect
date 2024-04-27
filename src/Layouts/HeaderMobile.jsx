import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
function HeaderMobile() {

  return (
    <header className="bg-white flex justify-between items-center p-4 border-b-2">
      <Link to="/"><img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /></Link>
      <h1>MINATO | Team</h1>
    </header>
  )
}

export default HeaderMobile