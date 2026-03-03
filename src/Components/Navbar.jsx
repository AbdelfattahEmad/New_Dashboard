import { NavLink } from "react-router-dom";
import "../assets/Styles/_layout.scss";
import "../assets/Styles/_sidebar.scss";

function Navbar({ toggleSidebar }) {
  return (
    <div className="navbar">
      <div className="left">
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <h2 className="title">Dashboard</h2>
      </div>

      <div className="right">
        {/* <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div> */}

        <div className="icons">
          <span className="notification">🔔</span>
          <NavLink to="Login">
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="avatar"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
