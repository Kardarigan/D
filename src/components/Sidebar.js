import { Link, NavLink } from 'react-router-dom'
import '../style/App.scss';
import lcLogo from '../assets/images/lightCubeLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGithubAlt, faLinkedinIn, faMedium } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className='navbar'>
            <Link className='logo' to='/'>
                <img src={lcLogo} />
                <h2>Darigan</h2>
            </Link>
            <nav>
                <NavLink exact activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} />
                    <span>Home</span>
                </NavLink>
                <NavLink exact activeclassname="active" id="aboutMe" to="/about">
                    <FontAwesomeIcon icon={faUser} />
                    <span>About</span>
                </NavLink>
                <NavLink exact activeclassname="active" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Contact</span>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Kardarigan'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Kardarigan'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://medium.com/@darigan'>
                        <FontAwesomeIcon icon={faMedium} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar