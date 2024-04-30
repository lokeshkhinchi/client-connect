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

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutMobile />}>
          <Route index element={<Home />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="follow-up" element={<FollowUp />} />
          <Route path="follow-up/:cafeId" element={<FollowUpDetail />} />
          <Route path="cafes" element={<Cafes />} />
          <Route path="cafe/:cafeId" element={<CafeDetail />} />
          <Route path="order" element={<Order />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="log-in" element={<LogIn />} />
    </Routes>
  </Router>
  )
}

export default App
