import React, { memo } from 'react'
import { Outlet } from 'react-router-dom/dist'
import Header from './header'

const Layout = () => {
    return (
        <div>
            <Header />
            <main className='max-w-[1520px] mx-auto mt-2'> <Outlet /> </main>
        </div>
    )
}

export default memo(Layout)