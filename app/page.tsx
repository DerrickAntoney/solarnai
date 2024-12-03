'use client'

import Header from '@/components/header'
import ProductList from '@/components/productList'
import React from 'react'


const Home = () => {
  return (
    <div className='mx-20'>
      <Header/>
      <ProductList/>
      <ProductList/>
      <ProductList/>
      <ProductList/>
    </div>
  )
}

export default Home