import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout"
import Home from "./Pages/Home"
import Onboarding from "./Pages/Onboarding"
import FollowUp from "./Pages/FollowUp"
import Order from "./Pages/Order"
import NoMatch from "./Pages/NoMatch"
import LogIn from "./Pages/LogIn"
import './App.css'
import FollowUpDetail from './Pages/FollowUpDetail';
import Test from './Pages/Test';
import { CafeDetail } from './Pages/CafeDetail';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="follow-up" element={<FollowUp />} />
          <Route path="follow-up/:cafeId" element={<FollowUpDetail />} />
          <Route path="cafe/:cafeId" element={<CafeDetail />} />
          <Route path="order" element={<Order />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/test" element={<Test />} />
        </Route>
        <Route path="log-in" element={<LogIn />} />
    </Routes>
  </Router>
  )
}

export default App
