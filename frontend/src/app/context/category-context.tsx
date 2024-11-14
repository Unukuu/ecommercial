"use client";

import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

interface ICategory {
  name: string;
  description: string;
}

interface IcategoryContext {
  category: ICategory[];
  fetchCategoryData: () => void;
}

export const CategoryContext = createContext<IcategoryContext>({
  category: [],
  fetchCategoryData: () => {},
});

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [category, setCategory] = useState<ICategory[]>([]);

  const fetchCategoryData = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/category/add`
      );
      setCategory(res.data.categories);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <CategoryContext.Provider value={{ category, fetchCategoryData }}>
      {children}
    </CategoryContext.Provider>
  );
};
