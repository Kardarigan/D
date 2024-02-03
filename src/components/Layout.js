import Sidebar from './Sidebar'
import '../style/App.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <span className='tags tags-top'>
<<<<<<< HEAD
                <span>&lt;html&gt;</span>
=======
                <span className="tags-top-html">&lt;html&gt;</span>
>>>>>>> 7d38863b100fb045276b17cf9fee42c3a188bcaf
                <br />
                <span className='tags-top-body'>&lt;body&gt;</span>
            </span>

            <Outlet />

            <span className='tags tags-bottom'>
                <span className='tags-bottom-body'>&lt;/body&gt;</span>
                <br />
<<<<<<< HEAD
                <span>&lt;/html&gt;</span>
=======
                <span className="tags-bottom-html">&lt;/html&gt;</span>
>>>>>>> 7d38863b100fb045276b17cf9fee42c3a188bcaf
            </span>
        </div>
    )
}

export default Layout
