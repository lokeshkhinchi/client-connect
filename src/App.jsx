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

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="follow-up" element={<FollowUp />} />
          <Route path="order" element={<Order />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="log-in" element={<LogIn />} />
    </Routes>
  </Router>
  )
}

export default App
