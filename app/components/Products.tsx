const getProducts = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hi");
    }, 2000);
  });
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};

export default async function Products() {
  const products = await getProducts();

  return (
    <div>
      {products.map(({ title, id }: { title: string; id: number }) => (
        <div key={id}>{title}</div>
      ))}
    </div>
  );
}
