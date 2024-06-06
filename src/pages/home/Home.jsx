import React, { memo, useEffect } from 'react'
import { useGetProductsQuery } from '../../context/api/productApi'
import ProductsWrapper from '../../components/products/ProductsWrapper';

const Home = () => {
    let { data, isError, isLoading } = useGetProductsQuery()

    useEffect(() => {
        if (isError) {
            alert("Error")
        }
    }, [isError])

    return isLoading ? (
        <section className='w-full h-[91.5vh] flex items-center justify-center'>
            <span className="loading loading-spinner text-secondary loading-lg"></span>
        </section>
    ) : (
        <ProductsWrapper data={data} title={'Products'} />
    )
}

export default memo(Home)