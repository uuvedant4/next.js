import Link from "next/link";
import styles from "./page.module.css";

const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
};

export default async function Home() {
  const { products } = await getProducts();

  return (
    <div className={styles.container}>
      {products.length > 0 &&
        products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className={styles.imgContainer}
            >
              <img className={styles.img} src={product.thumbnail} />
            </Link>
          );
        })}
    </div>
  );
}
