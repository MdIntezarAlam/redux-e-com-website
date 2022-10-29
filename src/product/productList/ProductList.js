import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from '../ProductComponent/ProductComponent'
import axios from 'axios'
import  {setProduct}  from '../../action/productAction'


const ProductList = () => {
    const product = useSelector((state) => state)
    const dispatch = useDispatch()

    //DISPATCH THE ACTIONS

    const fetchProduct = async () => {
        const responce = await axios.get("https://fakestoreapi.com/products")
            .catch((err) => {
                // console.log(err)
            })
        // console.log(responce.data)
        //DISPATCH THE ACTION AND SET IT TO THE ACTION FILE
        dispatch(setProduct(responce.data))
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    // console.log(product)
    return (
        <div className='ProductList'>
            <ProductComponent />
        </div>
    )
}
export default ProductList 