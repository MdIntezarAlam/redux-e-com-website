import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { selectedProduct, removeSelectedProduct } from '../../action/productAction'
import '../../styles/productDetails.css'


//removeSelectedProduct it is for cleanup the function and dispatch in useeffect
//it uses in useEffect
const ProductDetails = () => {
  const { productId } = useParams()
  const product = useSelector((state) => state.selectedProductReducer)
  const { id, category, price, description, image, title } = product
  const dispatch = useDispatch()

  // console.log(product)

  const fetchProductDetails = async () => {
    const responce = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err)
      })
    // console.log(responce.data)
    dispatch(selectedProduct(responce.data))
  }
  // console.log(productId)

  useEffect(() => {
    if (productId && productId !== " ")
      fetchProductDetails();

    //cleanup the product return removeSelectedProduct

    return () => {
      dispatch(removeSelectedProduct())
    }

  }, [productId])

  return (
    <div className='pro_container'>
      {Object.keys(product).length === 0 ? (<div>please wait Loading...</div>) : (
        <div className='pro_box'>
          <div className='pro_left'>
            <img src={image} className="pro_img" />
          </div>
          <div className='pro_right'>
            <div className='pro_right_box'>
              <h1>{title}</h1>
              <div className='pro_price'>$ {price}</div>
              <div className='pro_category'>{category}</div>
              <div className='pro_description'>{description}</div>
              <Link to="/process">
                <button className='pro_btn'>Add to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails