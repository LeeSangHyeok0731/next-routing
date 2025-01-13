"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleClickHome = () => {
    router.push("/");
  };

  return (
    <>
      <h1>로그인</h1>
      <button onClick={handleClickHome}>홈으로 가기</button>
    </>
  );
}
