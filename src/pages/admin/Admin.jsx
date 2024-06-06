import React, { Fragment } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Admin = () => {

    return (
        <Fragment>
            <div className='admin flex'>
                <Sidebar />
                <div className="w-[1560px] mx-auto text-white">
                    <Outlet />
                </div>
            </div>
        </Fragment>
    )
}

export default Admin