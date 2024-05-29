import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonText, ButtonTextSmall, Div, Span } from '../Components/StyledComponents'
import Logo from '../assets/images/minato_logo.png'
import { AuthContext } from '../context/auth';

function HeaderMobile() {
  const { logout, userInfo } = useContext(AuthContext);
  console.log({'userrr' : userInfo});
  
  return (
    <header className="bg-white flex justify-between items-center p-3 border-b-2">
      <Div className="flex items-center">
        <Link to="/" className="mr-2"><img className="h-6 w-auto" src={Logo} alt="" /></Link>
        <h1 className="font-bold"><Link to="/">Minato | Team</Link></h1>
      </Div>
      <Div className="text-xs">
        <Span className="text-gray-500">Signed in as</Span> <ButtonTextSmall onClick={logout}>Log Out</ButtonTextSmall>
        <Span className="block text-gray-900">{userInfo.username}</Span>
      </Div>
    </header>
  )
}

export default HeaderMobile