import "./App.css";

function App(props) {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "950px",
        margin: "0 auto",
        border: "1px solid #e6e6e6",
        padding: "40px 25px",
        marginTop: "50px",
      }}
    >
      <h1>Hello {props.name}!</h1>
    </div>
  );
}

export default App;
