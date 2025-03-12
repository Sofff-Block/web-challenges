import Link from "next/link";
import { volumes } from "../lib/data";
import Image from "next/image";

const volume = volumes.find(({ slug }) => slug === "the-two-towers");
export default function ThirdBook() {
  return (
    <>
      <Link href="/volumes">All Volumes</Link>

      <h1>{volume.title}</h1>
      <p>{volume.description} </p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            <h3>{book.ordinal}</h3>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
      <Image
        src={volume.cover}
        alt={volume.title}
        width={140}
        height={230}
      ></Image>
      <Link href="/volumes/the-fellowship-of-the-ring">Prev Book</Link>
      <Link href="/volumes/the-return-of-the-king">Next Book</Link>
    </>
  );
}
