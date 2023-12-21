import styles from "./page.module.css";
import Modal from "@/app/components/Modal";

const getProduct = async (id) => {
  const response = await fetch(`http://localhost:3000/api/product/${id}`);
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
