import Link from "next/link";
import styles from "./page.module.css";
import { cookies, headers } from "next/headers";

const getProducts = async () => {
  const response = await fetch("http://localhost:3000/api/");
  return response.json();
};

export default async function Home() {
  const cookieStore = cookies();
  const headersList = headers();
  // console.log(cookieStore.get("next-auth.session-token"));
  // console.log(headersList);
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
