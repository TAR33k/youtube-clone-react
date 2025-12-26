import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile_icon from "../../assets/tarik.jpg";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import "./Navbar.css";

const Navbar = ({ setSidebar, user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchHandler = () => {
    if (query.trim().length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt=""
        />
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            value={query}
          />
          <img src={search_icon} alt="" onClick={searchHandler} />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <div className="user-dropdown">
          <img
            className="user-icon"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            src={profile_icon}
            alt=""
          />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <p>
                <strong>
                  {user.firstName} {user.lastName}
                </strong>
              </p>
              <p>@{user.username}</p>
              <Link to="/profile" onClick={() => setDropdownOpen(false)}>
                Profile
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
