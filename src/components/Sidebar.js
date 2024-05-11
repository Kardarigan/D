import { Link, NavLink } from "react-router-dom"
import "../style/App.scss"
import lcLogo from "../assets/images/lightCubeLogo.png"
import { sideIcons } from "./Constans"

const Sidebar = () => {
  return (
    <div className="dnavbar">
      <Link className="logo" to="/">
        <img src={lcLogo} alt="logo" />
      </Link>
      <nav>
        {sideIcons.map((item, index) => (
          <NavLink exact activeclassname="active" key={index} to={item.path}>
            <i className={`fa-duotone  ${item.icon}`}></i>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Kardarigan"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Kardarigan"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/@darigan"
          >
            <i className="fab fa-medium"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
