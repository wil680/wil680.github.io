import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <Menu />
    </nav>
  );
}

function Logo() {
  return (
    <Link to="/">
      <h1 id="logo"> wil680.github.io</h1>
    </Link>
  );
}

function Menu() {
  return (
    <ul className="navbar-ul">
      <li>
        <NavLink className="navbar-a" to="/" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="navbar-a" to="/about">
          About me
        </NavLink>
      </li>
      <li>
        <NavLink className="navbar-a" to="/projects">
          Projects
        </NavLink>
      </li>
    </ul>
  );
}
