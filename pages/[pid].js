import path from "path";
import fs from "fs/promises";

function ProductId(props) {
  console.log({ props });
  const { data } = props;
  return (
    <div>
      <p>{data.title}</p>
      <p>{data.description}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log({ params, context });
  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const filterProduct = data.products.find((item) => item.id === productId);

  if (!filterProduct) {
    return { notFound: true };
  }

  return {
    props: {
      data: filterProduct,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: "p1" } }],
    fallback: "blocking", // false(when all values added), true(give loading state in component), blocking(no need to give loading state in component)
  };
}

export default ProductId;
