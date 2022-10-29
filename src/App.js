import React from 'react'
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import ProductList from './product/productList/ProductList'
import ProductDetails from './product/productDetails/ProductDetails'
import Processing from './component/Processing/Processing'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<ProductList />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/process' element={<Processing />} />
        <Route>Page Not Found</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App