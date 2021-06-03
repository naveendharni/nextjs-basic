import { useRouter } from "next/router";

const ClientId = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <p>This is a inside Client</p>
    </div>
  );
};

export default ClientId;
