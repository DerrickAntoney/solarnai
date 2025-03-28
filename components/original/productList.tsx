"use client";

import useSWR from "swr"; // Import SWR
import { Product } from "../../types";
import { supabase } from "../../lib/supabaseClient";  // Import the Supabase client
import Link from 'next/link'
import Image from "next/image";
import { cache } from "react";
import { useCart } from "@/context/cartContext";
import { Skeleton } from "@mui/material";


// Fetcher function for SWR
const fetchProducts = cache(async () => {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw new Error(error.message); // Throw error to be handled by SWR
  }

  return data; // Return fetched data
});

export default function ProductList() {

  const { addToCart } = useCart();
  // Use SWR to fetch the products
  const { data: products, error, isLoading } = useSWR<Product[]>('/api/products', fetchProducts);

  // Show loading state while data is being fetched
  if (isLoading) {
    return <Skeleton/>;
  }

  // Show error state if the request fails
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // If no products are found
  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

  
  return (
    <div className="mb-4 mt-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
  {products.map((product) => ( 
    <div
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
      key={product.id}
    >
      <div className="relative h-56 w-full">
        <Link href={`/${product.id}`}>
          <Image
            src={product.img || product.images[0]} // Assuming product.img is a valid image URL
            alt={product.title}
            fill
        style={{
          objectFit: 'contain',
        }}
          />
        </Link>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
            Up to 35% off
          </span>

          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              data-tooltip-target="tooltip-quick-look"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Quick look</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
          </div>
        </div>

        <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
          {product.title}
        </a>

        <div className="mt-2 flex items-center gap-2">
          {/* Star rating */}
          {Array(5).fill("").map((_, index) => (
            <svg key={index} className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
            </svg>
          ))}
          <p className="text-sm font-medium text-gray-900 dark:text-white">5.0</p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(455)</p>
        </div>

        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
            </svg>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fast Delivery</p>
          </li>
          <li className="flex items-center gap-2">
            <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
          </li>
        </ul>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-xl font-extrabold leading-tight text-gray-900 dark:text-white">Ksh {product.price}</p>

          <button onClick={() => addToCart(product)} type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div> 
  ))}
</div>

  );
}
