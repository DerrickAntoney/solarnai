'use client'

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { Product } from "../../types";
import {Button } from "@mui/material";
import Image from "next/image";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id && typeof id === "string") {
        const productId = parseInt(id, 10);

        try {
          const { data, error } = await supabase
            .from("products")
            .select("*")
            .eq("id", productId)
            .single();

          if (error) throw error;

          setProduct(data);
        } catch (err) {
          setError("Failed to load product details");
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <Image src={product.img} alt={product.title} width={300} height={200} className=" object-cover"/>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div>
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <p>Total Amount{product.price * quantity}</p>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
};

export default ProductDetail;
