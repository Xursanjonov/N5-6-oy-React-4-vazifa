import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../../context/api/productApi'
import { FaPlus, FaMinus } from "react-icons/fa";

const ProductDetails = () => {
    let { data } = useGetProductsQuery()
    const { id } = useParams()

    const cartData = data?.filter(el => {
        if (el.id === id) {
            return el
        }
    })

    const { id: cartId, title, category, info, price, img } = cartData[0]

    return (
        <section className='max-w-[1520px] w-[1480px] h-[91.5vh] mx-auto flex items-center justify-start'>
            <div key={cartId} className='flex items-center justify-center gap-20'>
                <img className='w-[700px] h-[500px] object-contain rounded-xl' src={img} alt={title} />
                <div className="flex flex-col items-start gap-3">
                    <h4 className='text-4xl font-bold'> {title} </h4>
                    <h4 className='text-2xl font-semibold text-blue-700'> {category} </h4>
                    <p className='text-xl font-semibold text-gray-600'> {info} </p>
                    <p className='text-xl font-bold text-red-500'> ${price} </p>
                    <div className="flex items-center justify-start gap-5 text-black">
                        <button className="btn bg-red-500 border-red-500 group"> <FaMinus className={`group-hover:text-white text-black`} /> </button>
                        <h1 className='w-[100px] text-center text-2xl font-semibold text-black'>1</h1>
                        <button className="btn btn-success"> <FaPlus /> </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(ProductDetails)