import { useRouter } from "next/router";

const Client = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <p>This is a Client</p>
    </div>
  );
};

export default Client;
