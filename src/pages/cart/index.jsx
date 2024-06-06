import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
import ProductsWrapper from '../../components/products/ProductsWrapper'

const emptyImg = 'https://static.vecteezy.com/system/resources/previews/005/073/073/original/no-item-in-the-shopping-cart-add-product-click-to-shop-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg'

const Cart = () => {
    const cartData = useSelector(state => state.cart.value)
    console.log(cartData);

    return (
        <section className='h-[91.5vh] flex pt-[5rem] items-start justify-center text-black'>
            {
                cartData.length ? <ProductsWrapper key={nanoid()} data={cartData} title={'Cart products'} /> : (
                    <div className="flex flex-col items-center">
                        <img className='w-[500px]' src={emptyImg} alt="" />
                        <h1 className='text-3xl font-bold'>Savatingiz bo`sh</h1>
                    </div>
                )
            }
        </section>
    )
}

export default memo(Cart)