import InputField from "../Components/Ui/Inputs/InputField";
import "../assets/Styles/_auth.scss";

export default function Register() {
  return (
    <div className="register_page">
      <div className="register_card">
        <h2>Create Account</h2>
        <p>Sign up to get started</p>

        <InputField type="text" placeholder="Username" icon={<FaUser />} />
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <InputField
          type="password"
          placeholder="Confirm Password"
          icon={<FaLock />}
        />

        <button className="register_btn">Register</button>

        <div className="login_link">
          Already have an account? <span>Login</span>
        </div>
      </div>
    </div>
  );
}
