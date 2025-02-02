'use client'

import Header from '@/components/header'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import FloatingButton from '@/components/floatingButton';
import { CartProvider } from '@/context/cartContext';
import Cart from '@/components/cart';
import CartTwo from '@/components/cartTwo';
import TitlebarImageList from '@/components/banner';
import ScrollableTabsButtonForce from '@/components/tabs';
import ProductList from '@/components/productList';


const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA500', // Orange color for primary
    },
    secondary: {
      main: '#1976d2', // Blue color for secondary
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
    <CartProvider>
    <CssBaseline />
    <div>
      <Header/>
      <ScrollableTabsButtonForce/>
      <TitlebarImageList/>
      <ProductList/>
      <ProductList/>
      <ProductList/>
      <ProductList/>
      <Cart/>
      <CartTwo id={0} quantity={0} />
      <FloatingButton/>
    </div>
    </CartProvider>
    </ThemeProvider>
  )
}

export default Home