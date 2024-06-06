import React from 'react'
import ProductsWrapper from '../../../components/products/ProductsWrapper'
import { useGetProductsQuery } from '../../../context/api/productApi'

const Manage = () => {
    let { data } = useGetProductsQuery()

    return (
        <section>
            <ProductsWrapper data={data} admin={true} title={'Management Products'} />
        </section>
    )
}

export default Manage