import React, { Fragment, memo, useState } from 'react'
import { useUpdateProductMutation } from '../../context/api/productApi';

const EditProductModal = ({ setShow, product }) => {
    const [updateProduct, { isLoading, isSuccess }] = useUpdateProductMutation()
    const { id, title, price, info, img, category, count } = product;
    const [data, setData] = useState({ title, info, price, img, category, count })

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        updateProduct({ id: id, body: data });
    }

    return (
        <Fragment>
            <div onClick={() => setShow(false)} className='fixed z-30 top-0 left-0 w-[100%] h-screen bg-[#0005]'></div>
            <div className='w-[500px] h-[560px] mx-auto top-[10%] left-[30%] z-50 translate-[-50%, -50%] text-black fixed bg-white'>
                <form onSubmit={handleUpdateProduct} className="w-[540px] py-10 p-4 gap-4 flex flex-col">
                    <h1 className='font-bold text-3xl mb-4'>Create Product</h1>
                    <input required value={data.title} onChange={(e) => setData(p => ({ ...p, title: e.target.value }))}
                        className='input input-primary w-[400px] font-semibold text-black bg-white'
                        type="text" name="title" id="" placeholder='Title' />
                    <input required value={data.price} onChange={(e) => setData(p => ({ ...p, price: e.target.value }))}
                        className='input input-primary w-[400px] font-semibold text-black bg-white'
                        type="text" name="price" id="" placeholder='Price' />
                    <input required value={data.category} onChange={(e) => setData(p => ({ ...p, category: e.target.value }))}
                        className='input input-primary w-[400px] font-semibold text-black bg-white'
                        type="text" name="category" id="" placeholder='Category' />
                    <input required value={data.info} onChange={(e) => setData(p => ({ ...p, info: e.target.value }))}
                        className='input input-primary w-[400px] font-semibold text-black bg-white'
                        type="text" name="info" id="" placeholder='Info' />
                    <input required value={data.img} onChange={(e) => setData(p => ({ ...p, img: e.target.value }))}
                        className='input input-primary w-[400px] font-semibold text-black bg-white'
                        type="text" name="image" id="" placeholder='Image' />
                    <button type='submit' className='w-[400px] btn btn-success'>Update</button>
                </form>
            </div>
        </Fragment>
    )
}

export default memo(EditProductModal)