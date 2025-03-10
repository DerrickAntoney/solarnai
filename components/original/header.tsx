// components/Header.tsx
import { useState } from "react";
import Link from "next/link";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useCart } from "@/context/cartContext";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { getTotalQuantity } = useCart();

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const navLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Shops", href: "/shops" },
    { label: "Offers", href: "/offers" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Desktop Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleDrawer} className="text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Logo */}
          <div>
            <Link href="/" passHref>
              <span className="text-2xl font-semibold text-gray-800 cursor-pointer">
                Logo
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-gray-800 hover:text-blue-600">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Shopping Cart Icon */}
          <Link href='/cart'>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button>
                <ShoppingCartIcon className="text-gray-800" />
              </button>
              {getTotalQuantity() > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center z-20">
                  {getTotalQuantity()}
                </span>
              )}
            </div>
          </div>
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 md:hidden">
          <div className="absolute top-0 left-0 w-64 bg-white shadow-lg h-full">
            <div className="flex justify-end p-4">
              <Button onClick={toggleDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            </div>
            <div className="space-y-6 px-4 py-8">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="block text-gray-800 text-xl">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
