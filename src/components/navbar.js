import "../components/css/navbar.css"
import navbar_icon from "../components/assets/feather-pen.png"
import { Link } from "react-router-dom";
export default function Navbar(props) {
    const display_status = props.display;
    const display_status_rev=display_status=="none"?"flex":"none";
    return (
      <nav className="navigation">
        <img className="brand-icon" style={{width: 50, height: 50}} src={navbar_icon} alt="Logo" />

        <a href="/" className="brand-name">
         BlogMate
        </a>
        <div
          className="navigation-menu">
          <ul className="Before-login" style={{display:display_status_rev}}>
            <li>
             
              <Link to="/login">Login</Link>

            </li>
            <li>
            <Link to="/signup">Signup</Link>

            </li>
            <li>
                 <Link to="/login">About us</Link>

            </li>
          </ul>
          <ul className="after-login" style={{display:display_status}}>
            <li>
             
              <Link to="/login">Welcome</Link>

            </li>
           
            <li>
                 <Link to="/login">About us</Link>

            </li>
          </ul>
        </div>
      </nav>
    );
  }