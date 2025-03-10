'use client'

import Header from '@/components/original/header'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import FloatingButton from '@/components/original/floatingButton';
import { CartProvider } from '@/context/cartContext';
import Cart from '@/components/original/cart';
import CartTwo from '@/components/original/cartTwo';
import ProductList from '@/components/original/productList';
import { TopBanner } from '@/components/layout/top-banner';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { MobileBuyButton } from '@/components/layout/mobile-buy-button';
import { HeroCarousel } from '@/components/hero/hero-carousel';
import { FeaturedCategories } from '@/components/categories/featured-categories';
import { PromoBanners } from '@/components/promotions/promo-banners';
import { PopularProducts } from '@/components/products/popular-products';
import { DailyBestSells } from '@/components/products/daily-best-sells';
import { FeatureSection } from '@/components/features/feature-section';


const theme = createTheme({
  palette: {
    primary: {
      main: '#f97316', // Orange color for primary
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
    <div className="flex flex-col min-h-screen">
      {/* Top banner */}
      <TopBanner />
      <Header/>
      {/* Navigation */}
      <Navigation />
      <main className="flex-1">
      {/* Hero Banner Carousel */}
      <div className="container mx-auto px-4 py-6">
          <HeroCarousel />
      </div>
      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Promotional Banners */}
      <PromoBanners />

      {/* Popular Products */}
      <PopularProducts />

      {/* Daily Best Sells */}
      <DailyBestSells />

      {/* Features */}
      <FeatureSection />
      <ProductList/>
      <ProductList/>
      <ProductList/>
      <ProductList/>
      <Cart/>
      <CartTwo id={0} quantity={0} />
      </main>
      {/* Mobile Buy Button */}
      <MobileBuyButton />
      <FloatingButton/>
      {/* Footer */}
      <Footer />
      
    </div>
    </CartProvider>
    </ThemeProvider>
  )
}

export default Home