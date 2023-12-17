"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default async function Product({ params }) {
  const [product, setProduct] = useState(null);

  const getProduct = async (id) => {
    const response = await fetch(`https://dummyjson.com/product/${id}`);
    const product = await response.json();
    return product;
  };

  useEffect(() => {
    setProduct(getProduct());
  }, []);

  return (
    <Modal>
      <div className={styles.container}>
        <img src={product.thumbnail} />
      </div>
    </Modal>
  );
}
