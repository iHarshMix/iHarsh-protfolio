import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/index.js'
import './index.scss'

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar></Sidebar>
            <div className='page'>
                <span className='top-tags'>&lt;body&gt;</span>

                <Outlet />

                {/* <div className="tags bottom-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </div> */}
            </div>
        </div>

    )
}

export default Layout