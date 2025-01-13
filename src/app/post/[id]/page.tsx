"use client";

import { useRouter } from "next/navigation";

interface PostPageProps {
  params: { id: string };
}

const Post = ({ params }: PostPageProps) => {
  const router = useRouter();

  const handleClickHome = () => {
    router.push("/");
  };

  return (
    <>
      <p>Post ID: {params.id}</p>
      <button onClick={handleClickHome}>홈으로 가기</button>
    </>
  );
};

export default Post;
