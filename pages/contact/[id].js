import { useRouter } from "next/router";

const ContactPage = () => {
  const router = useRouter();

  console.log(router);
  console.log(router.query);

  return (
    <div>
      <p>ContactPage id</p>
    </div>
  );
};

export default ContactPage;
