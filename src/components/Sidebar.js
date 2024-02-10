import { Link, NavLink } from 'react-router-dom'
import '../style/App.scss';
import lcLogo from '../assets/images/lightCubeLogo.png'

const Sidebar = () => {
    return (
        <div className='dnavbar'>
            <Link className='logo' to='/'>
                <img src={lcLogo} alt='logo' />
            </Link>
            <nav>
                <NavLink exact activeclassname="active" to="/">
                    <i className="fa-solid fa-house-blank"></i>
                    <span>Home</span>
                </NavLink>
                <NavLink exact activeclassname="active" to="/about">
                    <i className="fa-solid fa-user"></i>

                    <span>About</span>
                </NavLink>
                <NavLink exact activeclassname="active" to="/skills">
                    <i className="fa-solid fa-code"></i>
                    <span>Skills</span>
                </NavLink>
                <NavLink exact activeclassname="active" to="/contact">
                    <i className="fa-solid fa-envelope"></i>
                    <span>Contact</span>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Kardarigan'>
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Kardarigan'>
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://medium.com/@darigan'>
                        <i className="fab fa-medium"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
