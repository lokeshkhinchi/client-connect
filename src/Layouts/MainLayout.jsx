import React, { Fragment, useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header';

function MainLayout() {
  return (
    <>
      <Header />
      <div className="main-container max-w-4xl mx-auto p-8">
        <Outlet/>
      </div>
    </>
  )
}

export default MainLayout