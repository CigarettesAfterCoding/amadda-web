import Link from "next/link";

function HomePage() {
  return (
    <div>
      Welcome to Amadda
      <Link href="/sign-up">회원가입</Link>
      <Link href="/sign-in">로그인</Link>
    </div>
  );
}

export default HomePage;
