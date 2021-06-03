import { useRouter } from "next/router";

const ClientDynamic = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <p>This is inside Client dynamic route</p>
    </div>
  );
};

export default ClientDynamic;
