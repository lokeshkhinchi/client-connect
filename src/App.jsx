import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Onboarding from "./Pages/Onboarding"
import FollowUp from "./Pages/FollowUp"
import Order from "./Pages/Order"
import NoMatch from "./Pages/NoMatch"
import LogIn from "./Pages/LogIn"
import './App.css'
import FollowUpDetail from './Pages/FollowUpDetail';
import { CafeDetail } from './Pages/CafeDetail';
import LayoutMobile from './Layouts/LayoutMobile';
import { Cafes } from './Pages/Cafes';
import LandingPage from "./Pages/LandingPage";

function App() {

  return (
    <Router>
      <Routes>
          <Route index element={<LandingPage />} />
        <Route path="/admin" element={<LayoutMobile />}>
          <Route path="/admin" element={<Home />} />
          <Route path="/admin/onboarding" element={<Onboarding />} />
          <Route path="/admin/follow-up" element={<FollowUp />} />
          <Route path="/admin/follow-up/:cafeId" element={<FollowUpDetail />} />
          <Route path="/admin/cafes" element={<Cafes />} />
          <Route path="/admin/cafe/:cafeId" element={<CafeDetail />} />
          <Route path="/admin/order" element={<Order />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/admin/log-in" element={<LogIn />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
