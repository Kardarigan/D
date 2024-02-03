import Sidebar from './Sidebar'
import '../style/App.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <span className='tags tags-top'>
                <span>&lt;html&gt;</span>
                <br />
                <span className='tags-top-body'>&lt;body&gt;</span>
            </span>

            <Outlet />

            <span className='tags tags-bottom'>
                <span className='tags-bottom-body'>&lt;/body&gt;</span>
                <br />
                <span>&lt;/html&gt;</span>
            </span>
        </div>
    )
}

export default Layout