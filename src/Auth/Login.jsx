import { NavLink } from "react-router-dom";
import "../assets/Styles/_auth.scss";
import InputField from "../Components/Ui/Inputs/InputField";


const Login = () => {
  return  <>
    <div className="login_page">
      <div className="login_card">
        <h2>Welcome </h2>
        <p>Please login to your account</p>

        <InputField
          type="email"
          placeholder="Enter your email"
        />

        <InputField
          type="password"
          placeholder="Enter your password"
        />

        <button className="login_btn">Login</button>

        <div className="signup_link">
          Don't have an account? <NavLink to="/register" className="signup_link">Sign Up</NavLink>
        </div>
      </div>
    </div>
  </>
};

export default Login;
