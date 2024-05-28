import React, { Fragment, useContext, useState } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import HeaderMobile from './HeaderMobile';
import FooterMobile from './FooterMobile';
import { AuthContext } from '../context/auth';

function LayoutMobile() {
  const { token } = useContext(AuthContext);
  const isAuthenticated = token || localStorage.getItem('authToken');


    return isAuthenticated ? 
    <div className="bg-slate-100">
      <div className="flex flex-col bg-white shadow-sm main-container w-96 mx-auto min-h-screen">
        <HeaderMobile />
        <div className="py-6 px-4 overflow-y-auto" style={{ height: 'calc(100vh - 132px)' }}>
          <Outlet/>
        </div>
        <FooterMobile />
      </div>
    </div> : <Navigate to="/login" />;
}

export default LayoutMobile