import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import WorkInProgress from "./Pages/WorkInProgress";
import Error from "./Pages/Error";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:user" element={<Dashboard />} />
          <Route path="/:user/profile" element={<WorkInProgress />} />
          <Route path="/:user/settings" element={<WorkInProgress />} />
          <Route path="/:user/community" element={<WorkInProgress />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
