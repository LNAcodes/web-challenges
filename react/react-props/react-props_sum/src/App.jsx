function Sum({ valueA, valueB }) {
  return (
    <p>
      {valueA} + {valueB} = {valueA + valueB}
    </p>
  );
}
/*
export default function App() {
  return <Sum valueA={3} valueB={5} />;
}
 */

export default function App() {
  return (
    <div>
      <Sum valueA={3} valueB={5} />
      <Sum valueA={10} valueB={20} />
      <Sum valueA={7} valueB={13} />
    </div>
  );
}
