import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <p>This is a Blog cache all post</p>
    </div>
  );
};

export default Blog;
