import Link from "next/link";
import { volumes } from "../lib/data";
const volume1 = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);

export default function FirstBook() {
  return (
    <>
      <Link href="/volumes">All Volumes</Link>

      <h1> {volume1.title}</h1>
      <h2>hello</h2>
    </>
  );
}
