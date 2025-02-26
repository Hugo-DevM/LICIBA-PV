import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Races from "../pages/Races";

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="races" element={<Races />} />
    <Route path="ranking" element={<div>Ranking</div>} />
    <Route path="events" element={<div>Ranking</div>} />
    <Route path="login" element={<div>Ranking</div>} />
  </Routes>
);

export default AppRoutes;
