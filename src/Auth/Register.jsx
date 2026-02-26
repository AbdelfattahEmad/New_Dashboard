import { NavLink } from "react-router-dom";
import "../assets/Styles/_auth.scss";
import InputField from "../Components/Ui/Inputs/InputField";

const Register = () => {
  return (
    <div className="register_page">
      <div className="register_card">
        <h2>Create Account</h2>
        <p>Please fill in the details to register</p>

        <InputField type="text" placeholder="Enter your full name" />

        <InputField type="email" placeholder="Enter your email" />

        <InputField type="password" placeholder="Enter your password" />

        <InputField type="password" placeholder="Confirm your password" />

        <button className="register_btn">Register</button>

        <div className="login_link">
          Already have an account?{" "}
          <NavLink to="/login" className="login_link_text">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
