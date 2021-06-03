import { useRouter } from "next/router";
import Link from "next/link";

const Client = () => {
  const router = useRouter();
  console.log(router.query);

  const toHome = () => {
    // router.push("/");
    router.push({
      pathname: "/",
    });
  };

  return (
    <div>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link
          href={{
            pathname: "/client/[all]/[id]",
            query: { all: 221, id: 4 },
          }}
        >
          Client Id
        </Link>
      </li>
      <button onClick={toHome}>Homepage</button>
      <p>This is a Client</p>
    </div>
  );
};

export default Client;
