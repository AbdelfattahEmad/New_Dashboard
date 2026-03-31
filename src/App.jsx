import "./App.css";
import DashboardLayout from "./Layouts/DashboardLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/Dashboard/about";
import NotFound from "./Pages/NotFound";
import DasboardHome from "./Pages/Dashboard/DasboardHome";
import Login from "./Auth/Login";
import AuthLayout from "./Auth/AuthLayout";
import Register from "./Auth/Register";
import GlobalLoader from "./Components/Loader/GlobalLoader";

function App() {
  return (
    <>
    <GlobalLoader />
    
    <BrowserRouter>
      <Routes>
        {/* Authuntecation Routes  */}

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* Dashboard Routes */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DasboardHome />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>

  );
}

export default App;
