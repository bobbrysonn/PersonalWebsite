import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <Link href="/login/github">Sign In with Github</Link>
    </div>
  );
}
