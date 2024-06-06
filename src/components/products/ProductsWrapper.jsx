import React, { memo } from 'react'
import { nanoid } from 'nanoid'
import ProductItem from './ProductItem'


const ProductsWrapper = ({ data, title, admin }) => {

    return (
        <div className='max-w-[1520px] py-8 flex flex-col items-start justify-center gap-5'>
            {title ? <h2 className='text-3xl font-bold text-black'>{title}</h2> : <></>}
            <div className="wrapper mt-5 grid grid-cols-5 gap-8">
                {
                    data?.map(el => (
                        <ProductItem key={nanoid()} admin={admin ? admin : ''} product={el} />
                    ))
                }
            </div>
        </div>
    )
}

export default memo(ProductsWrapper)