"use client";

import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      {products.map(({ title, id }: { title: string; id: number }) => (
        <div key={id}>{title}</div>
      ))}
    </div>
  );
}
