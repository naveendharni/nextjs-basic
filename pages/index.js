import path from "path";
import fs from "fs/promises";
import Link from "next/link";

function HomePage(props) {
  console.log({ props });
  const { products } = props;
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          <Link href={`/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  console.log({ filePath });
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    // redirect: {
    //   destination: "/blog",
    // },
    // notFound: true // when no data found you cann add
  };
}

export default HomePage;
