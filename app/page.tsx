'use client'

import Header from '@/components/header'
import ProductList from '@/components/productList'
import React from 'react'
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MessageIcon from '@mui/icons-material/Message';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';


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
    <CssBaseline />
    <div className="relative min-h-screen">
      <Header/>
      <ProductList/>
      <ProductList/>
      <ProductList/>
      <ProductList/>
      <Fab
        color="primary"
        aria-label="whatsapp"
        href="https://wa.me/+254740618520" // Replace with your WhatsApp link
        className="absolute bottom-20 right-10"
      >
        <WhatsAppIcon />
      </Fab>

      <Fab
        color="primary"
        aria-label="message"
        href="sms:+254740618520" // Replace with your message link
        className="absolute bottom-5 right-10"
      >
        <MessageIcon />
      </Fab>
    </div>
    </ThemeProvider>
  )
}

export default Home