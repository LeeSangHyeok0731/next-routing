"use client"; // 클라이언트 컴포넌트 지시어 추가

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [count, setCount] = useState<number>(0);

  const handleClickPost = () => {
    router.push(`/post/${count}`); // '/next' 페이지로 이동
  };

  const handleClickLogin = () => {
    router.push("/login");
  };

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>라우팅 시험</h1>
      <div>{count}</div>
      <button onClick={countUp}>증가</button>
      <button onClick={countDown}>감소</button>
      <button onClick={handleClickPost}>Post 페이지 가기</button>
      <button onClick={handleClickLogin}>Login 페이지 가기</button>
    </>
  );
}
