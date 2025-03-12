import Link from "next/link";
import { volumes } from "../lib/data";
import Image from "next/image";

const volume = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);

export default function FirstBook() {
  return (
    <>
      <Link href="/volumes">All Volumes</Link>

      <h1> {volume.title}</h1>
      <p> {volume.description} </p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            <h3>{book.ordinal}</h3>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        width={140}
        height={230}
        alt="A picture of a book"
      />
      <Link href="/volumes/the-return-of-the-king">Next Book</Link>
    </>
  );
}
