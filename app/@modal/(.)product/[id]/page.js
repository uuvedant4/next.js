import styles from "./page.module.css";
import Modal from "@/app/components/Modal";

const getProduct = async (id) => {
  const response = await fetch(`https://dummyjson.com/product/${id}`);
  return response.json();
};

export default async function Product({ params }) {
  const product = await getProduct(params.id);

  return (
    <Modal>
      <div className={styles.container}>
        <img src={product.thumbnail} />
      </div>
    </Modal>
  );
}
