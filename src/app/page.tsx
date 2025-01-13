import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClickPost = () => {
    router.push("/post/[1]"); // '/next' 페이지로 이동
  };

  const handleClickLogin = () => {
    router.push("/login");
  };

  return (
    <>
      <h1>라우팅 시험</h1>
      <button onClick={handleClickPost}>Post 페이지 가기</button>
      <button onClick={handleClickLogin}>Login 페이지 가기</button>
    </>
  );
}
