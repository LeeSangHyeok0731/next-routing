import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const handleClickHome = () => {
    router.push("/");
  };

  return (
    <>
      <p>Post ID: {id}</p>
      <button onClick={handleClickHome}>홈으로 가기</button>;
    </>
  );
};

export default Post;
