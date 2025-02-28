export default function App() {
  return <Greeting name="Fleur" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name === "Sofia" ? "Coach" : name}!</h1>;
}
