import styles from "./page.module.css";

const getProduct = async (id) => {
  const response = await fetch(
    `http://localhost:3000/api/product/${id}?page=1`
  );
  return response.json();
};

export default async function Product({ params }) {
  const product = await getProduct(params.id);
  return (
    <div className={styles.container}>
      <img src={product.thumbnail} />
    </div>
  );
}
