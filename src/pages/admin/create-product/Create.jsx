import React, { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePostProductMutation } from '../../../context/api/productApi'

const initialState = {
    title: "BMW i series i5",
    img: "https://i.pinimg.com/originals/92/b3/d2/92b3d2df6a93f7caffa3c27018914f13.jpg",
    info: "Решетка радиатора BMW c подсветкой Iconic Glow придает автомобилю уникальный вид - особенно в темное время суток. Белая подсветка подчеркивает ee контуры и в статике, и в движении.",
    price: "118000",
    category: "cars"
}

const Create = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialState)
    const [createNewData, { isSuccess }] = usePostProductMutation()
    const handleCreateProduct = e => {
        e.preventDefault();
        createNewData(formData);
    }

    useEffect(() => {
        if(isSuccess) {
            navigate('/admin/manage')
        }
    }, [isSuccess])

    return (
        <section className='mt-20 text-black'>
            <form onSubmit={handleCreateProduct} className="w-[540px] py-10 p-4 gap-4 flex flex-col">
                <h1 className='font-bold text-3xl mb-4'>Create Product</h1>
                <input required value={formData.title} onChange={(e) => setFormData(p => ({ ...p, title: e.target.value }))}
                    className='input input-primary w-[400px] font-semibold text-black bg-white'
                    type="text" name="title" id="" placeholder='Title' />
                <input required value={formData.price} onChange={(e) => setFormData(p => ({ ...p, price: e.target.value }))}
                    className='input input-primary w-[400px] font-semibold text-black bg-white'
                    type="text" name="price" id="" placeholder='Price' />
                <input required value={formData.category} onChange={(e) => setFormData(p => ({ ...p, category: e.target.value }))}
                    className='input input-primary w-[400px] font-semibold text-black bg-white'
                    type="text" name="category" id="" placeholder='Category' />
                <input required value={formData.info} onChange={(e) => setFormData(p => ({ ...p, info: e.target.value }))}
                    className='input input-primary w-[400px] font-semibold text-black bg-white'
                    type="text" name="info" id="" placeholder='Info' />
                <input required value={formData.img} onChange={(e) => setFormData(p => ({ ...p, img: e.target.value }))}
                    className='input input-primary w-[400px] font-semibold text-black bg-white'
                    type="text" name="image" id="" placeholder='Image' />
                <button type='submit' className='w-[400px] btn btn-success'>Create</button>
            </form>
        </section>
    )
}

export default memo(Create)