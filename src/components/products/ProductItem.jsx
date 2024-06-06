import React, { Fragment, memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useDeleteProductMutation } from '../../context/api/productApi'
import { FaHeart, FaPenToSquare, FaRegHeart, FaTrashCan } from "react-icons/fa6";
import { like } from '../../context/slice/wishlistSlice';
import { add } from '../../context/slice/cartSlice';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, admin }) => {
    const [show, setShow] = useState(false)
    const [deleteProduct, { isLoading: detetedLoading }] = useDeleteProductMutation()
    const likeCart = useSelector(state => state.wishlist.value)
    const cartData = useSelector(state => state.cart.value)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(likeCart))
    }, [likeCart])
    useEffect(() => {
        localStorage.setItem('cart-data', JSON.stringify(cartData))
    }, [cartData])

    return (
        <Fragment>
            <div key={product.id} className='product-item w-[280px] h-[420px] flex flex-col items-start justify-start gap-8 rounded-xl bg-gray-200'>
                <Link to={`/cart/${product.id}`}>
                    <img className='product-item-img w-[280px] h-[280px] object-cover rounded-lg' src={product.img} alt={product.title} />
                </Link>
                <div className="product-item-info ps-3 flex flex-col gap-2 text-black">
                    <p className='text-lg font-semibold text-blue-600'>{product.title}</p>
                    <p className='italic font-semibold text-black'>${(product.price)}</p>
                    {
                        admin ? (
                            <div className="flex items-center justify-start gap-4">
                                <button disabled={detetedLoading}
                                    className='p-2 rounded-md text-white bg-red-600'> <FaTrashCan /> </button>
                                <button className='p-2 rounded-md text-black bg-orange-500'> <FaPenToSquare /> </button>
                            </div>
                        ) : (
                            <div className="flex items-center justify-start gap-2">
                                <button disabled={detetedLoading} onClick={() => dispatch(like(product))} className='product-item-info-del'>
                                    {
                                        likeCart?.some(el => el.id === product.id) ?
                                            <FaHeart color='red' fontSize={20} /> : <FaRegHeart fontSize={20} />
                                    }
                                </button>
                                <button onClick={() => dispatch(add(product))}
                                    className='px-2 py-0.5 font-semibold rounded-md text-black bg-green-500'>
                                    Add
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default memo(ProductItem)