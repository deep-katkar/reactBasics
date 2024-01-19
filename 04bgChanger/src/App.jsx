import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200 bg-{color}"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center bottom-12 
      inset-x-0 px-2 "
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-xl px-4 py-3 rounded-3xl bg-white">
          <button
            className="outline-none px-3 py-1 rounded-full border-solid border-2 border-gray-700 text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full border-solid border-2 border-gray-700 text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full border-solid border-2 border-gray-700 text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full border-solid border-2 border-gray-700 text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full border-solid border-2 border-gray-700 text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full border-solid border-2 border-gray-700 text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
