
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../styles/product.css'


const ProductComponent = () => {

    const product = useSelector((state) => state.productReducer.product)
    // const { id, title, image } = product[0]  
    // console.log(title)

    const renderList = product.map((produc) => {
        const { id, category, image, price, title } = produc
        return (
            <Link to={`/product/${id}`}>
                <div className='card' key={produc.id}>
                    <div className='img'><img src={image} /></div>
                    <div className='contnent'>
                        <div className='headers'>{title}</div>
                        <div className='headers'>Price: ₹ {price}</div>
                        <div className='category'>Category : {category}</div>
                        <button className='cart_btn'>Add To Cart</button>
                    </div>
                </div>
            </Link>
        )
    })
    return (
        <div className='Product_card'>
            <div className='allCard'>
                {renderList}
            </div>
        </div>
    )
}
export default ProductComponent