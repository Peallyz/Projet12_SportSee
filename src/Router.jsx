import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import WorkInProgress from "./Pages/WorkInProgress";
import Error from "./Pages/Error";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:user" element={<Dashboard />} />
        <Route path="/:user/profile" element={<WorkInProgress />} />
        <Route path="/:user/settings" element={<WorkInProgress />} />
        <Route path="/:user/community" element={<WorkInProgress />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
