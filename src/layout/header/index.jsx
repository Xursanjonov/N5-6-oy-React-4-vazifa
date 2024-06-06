import React, { memo } from 'react'
import { Link } from 'react-router-dom/dist'
import { FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Header = () => {
    const likeCart = useSelector(state => state.wishlist.value).length
    const cartData = useSelector(state => state.cart.value).length

    return (
        <header className='w-full sticky top-0 z-50 text-black bg-gray-400'>
            <nav className='py-3 max-w-[1520px] mx-auto flex items-center justify-between'>
                <Link to={'/'} className='text-3xl font-extrabold'>Logo</Link>
                <div className="flex items-center justify-center gap-8 font-bold text-lg">
                    <Link to={'/wishlist'} >
                        <span>Wishlist</span>
                        {likeCart ? <sup className='ps-1'>{likeCart}</sup> : <></>}
                    </Link>
                    <Link to={'/cart'} >
                        <span>Carts</span>
                        {cartData ? <sup className='ps-1'>{cartData}</sup> : <></>}
                    </Link>
                </div>
                <div className='w-[600px] flex items-center bg-white rounded-xl'>
                    <input className='w-[95%] input bg-white' type="search" placeholder="Search..." />
                    <FaSearch fontSize={20} />
                </div>
                <Link to='/admin/create' className='w-[100px] btn btn-primary text-lg font-bold'>Admin</Link>
            </nav>
        </header>
    )
}

export default memo(Header)