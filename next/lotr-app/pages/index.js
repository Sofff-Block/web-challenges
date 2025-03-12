import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Hi Hello!</h1>
      <Link href="/volumes">All Volumes</Link>
    </>
  );
}
