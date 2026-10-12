import "./Navbar.css";

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
    <a href="https://williampang.com">
      <h1 id="logo"> williampang.com</h1>
    </a>
  );
}

function Menu() {
  function handleScroll(section) {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <ul className="navbar-ul">
      <li>
        <a className="navbar-a" onClick={() => handleScroll("page")}>
          Home
        </a>
      </li>
      <li>
        <a className="navbar-a" onClick={() => handleScroll("about")}>
          About me
        </a>
      </li>
      <li>
        <a className="navbar-a" onClick={() => handleScroll("experience")}>
          Experience
        </a>
      </li>
      <li>
        <a className="navbar-a" onClick={() => handleScroll("projects")}>
          {" "}
          Projects
        </a>
      </li>
    </ul>
  );
}
