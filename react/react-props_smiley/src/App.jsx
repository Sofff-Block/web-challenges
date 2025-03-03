export default function App() {
  return (
    <>
      <Smiley isHappy />
    </>
  );
}

function Smiley({ isHappy }) {
  return (
    <span aria-label={isHappy ? "A happy smiley" : "A sad smiley"}>
      {isHappy ? "😊" : "😭"}
    </span>
  );
}
