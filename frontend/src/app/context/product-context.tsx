"use client";

import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

interface IProduct {
  name: string;
  price: string;
  description: string;
  size: string;
  images: string;
  isNew: boolean;
  _id: string;
  quantity: number;
  discount: number;
  category: string;
}

interface IproductContext {
  products: IProduct[];
  fetchProductData: () => void;
}

export const ProductContext = createContext<IproductContext>({
  products: [],
  fetchProductData: () => {},
});

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProductData = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products/getall`
      );
      setProducts(res.data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, fetchProductData }}>
      {children}
    </ProductContext.Provider>
  );
};
