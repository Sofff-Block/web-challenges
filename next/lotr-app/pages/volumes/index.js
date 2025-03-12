import Link from "next/link";
import { introduction } from "../lib/data";

export default function Overview() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/volume-1">Volume 1</Link>
        </li>
        <li>
          <Link href="/volumes/volume-2">Volume 2</Link>
        </li>
        <li>
          <Link href="/volumes/volume-3">Volume 3</Link>
        </li>
      </ul>
    </>
  );
}
