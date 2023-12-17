"use client";

import { useRouter } from "next/navigation";
import styles from "./Modal.module.css";

const Modal = ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.primaryContainer}>
        <div onClick={() => router.back()} className={styles.close}>
          Close
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
