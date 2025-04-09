import { useEffect,useRef } from "react";
import { connectionWithSocket } from "./utils/wssConnection/wssConnection";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashBoard from "./pages/Dashboard/DashBoard";
function App() {
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    connectionWithSocket();
  },[]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
      </Routes>
    </Router>
  );
}

export default App;
