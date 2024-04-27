import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonText, ButtonTextSmall, Div, Span } from '../Components/StyledComponents'
function HeaderMobile() {
  return (
    <header className="bg-white flex justify-between items-center p-3 border-b-2">
      <Div className="flex items-center">
        <Link to="/" className="mr-2"><img className="h-6 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /></Link>
        <h1 className="font-bold"><Link to="/">Minato | Team</Link></h1>
      </Div>
      <Div className="text-xs">
        <Span className="text-gray-500">Signed in as</Span> <ButtonTextSmall>Log Out</ButtonTextSmall>
        <Span className="block text-gray-900">lokesh@gmail.com</Span>
      </Div>
    </header>
  )
}

export default HeaderMobile