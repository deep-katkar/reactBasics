import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "Deep",
    age: 23,
  };

  let myArr = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test!
      </h1>
      <Card channelName="chai aur react" someObj={myObj} someArr={myArr} />
      <Card channelName="chai aur code" />
    </>
  );
}

export default App;
