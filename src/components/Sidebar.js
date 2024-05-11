import { Link, NavLink } from "react-router-dom"
import "../style/App.scss"
import lcLogo from "../assets/images/lightCubeLogo.png"
import { sideIcons, sideLinks } from "./Constans"

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
        {sideLinks.map((item, index) => (
          <li key={index}>
            <a target="_blank" rel="noreferrer" href={item.link}>
              <i className={`fab ${item.icon}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
