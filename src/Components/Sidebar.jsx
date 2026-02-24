import { NavLink } from "react-router-dom";
import "../assets/Styles/_sidebar.scss";
import "../assets/Styles/_layout.scss";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="Logo">$Logo$</div>
      <ul className="Sidebar_list">
        <li className="sidebar_list_item">
          <NavLink to="/" className="sidebar_list_item_NavLink">
            🏠 Home
          </NavLink>
        </li>

        <li className="sidebar_list_item">
          <NavLink to="about" className="sidebar_list_item_NavLink">
            👤 Users
          </NavLink>
        </li>

        <li className="sidebar_list_item">
          <NavLink to="settings" className="sidebar_list_item_NavLink">
            ⚙️Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
