import "../components/css/navbar.css"
import navbar_icon from "../components/assets/feather-pen.png"
import { Link } from "react-router-dom";
export default function Navbar({ display, name, setIsLogOut}) {
  const display_status = display;
  //const display_status_rev=display_status=="none"?"flex":"none";
  //const display_name = name
    return (
      <nav className="navigation">
        <img className="brand-icon" style={{width: 50, height: 50}} src={navbar_icon} alt="Logo" />

        <a href="" className="brand-name">
         BlogMate
        </a>
        <div
          className="navigation-menu">
          {
            display_status==='none' &&
            <ul className="Before-login" >
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/signup">Signup</Link>
            </li>
            
          </ul>
          }
          {
            display_status!=='none' &&
            <ul className="after-login" >
            {<li >
              <Link style={{color:"#5659C9"}} to="/home">Logged in as {name}</Link>
            </li> }
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
                 <Link to="/my-stories">My Stories</Link>
            </li>
            
            <li>
                 <Link to="/logout">Logout</Link>
            </li>
          </ul>
          }
        </div>
      </nav>
    );
  }