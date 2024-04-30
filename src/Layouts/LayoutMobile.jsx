import React, { Fragment, useState } from 'react'
import { Outlet } from "react-router-dom";
import HeaderMobile from './HeaderMobile';
import FooterMobile from './FooterMobile';

function LayoutMobile() {
  return (
    <div className="bg-slate-100">
      <div className="flex flex-col bg-white shadow-sm main-container w-96 mx-auto min-h-screen">
        <HeaderMobile />
        <div className="py-6 px-4 overflow-y-auto" style={{ height: 'calc(100vh - 132px)' }}>
          <Outlet/>
        </div>
        <FooterMobile />
      </div>
    </div>
  )
}

export default LayoutMobile