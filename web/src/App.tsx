interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return <button>{props.title}</button>;
}

function App() {
  return (
    <>
      <Button title="Ok" />
    </>
  );
}

export default App;
