'use client'

import Header from '@/components/header'
import ProductList from '@/components/productList'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header/>
      <ProductList/>
      <ProductList/>
      <ProductList/>
      <ProductList/>
    </div>
  )
}

export default Home