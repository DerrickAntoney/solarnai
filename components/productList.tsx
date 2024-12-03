"use client";

import { useState, useEffect } from "react";
import { Product } from "../types";
import { supabase } from "../lib/supabaseClient";  // Import the Supabase client
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);  // Initialize state to hold products
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState<string | null>(null);  // Track error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from("products")  // Replace with your Supabase table name
          .select("*");

        if (error) {
          throw error;
        }

        setProducts(data);  // Set fetched products to state
      } catch (error) {
        setError("Failed to load products");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);  // Empty dependency array ensures this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;  // Show loading state
  }

  if (error) {
    return <div>{error}</div>;  // Show error message
  }

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              <img
                src={product.img}
                srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Typography level="body-xs">Bluetooth Headset</Typography>
            {/* Move the Link to only wrap the product name */}
            <Link
              href={`/products/${product.id}`}
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
              sx={{ fontWeight: 'md' }}
            >
              {product.title}
            </Link>

            <Typography
              level="title-lg"
              sx={{ mt: 1, fontWeight: 'xl' }}
              endDecorator={
                <Chip component="span" size="sm" variant="soft" color="success">
                  Lowest price
                </Chip>
              }
            >
              Kshs {product.price}
            </Typography>
            <Typography level="body-sm">
              (Only <b>7</b> left in stock!)
            </Typography>
          </CardContent>
          <CardOverflow>
            <Button variant="solid" color="danger" size="lg">
              Add to cart
            </Button>
          </CardOverflow>
        </Card>
      ))}
    </div>
  );
}
