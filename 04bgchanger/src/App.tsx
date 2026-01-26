import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  return (
    <>
      <div
        className="w-full h-screen transition-colors duration-300"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-5 shadow-xl bg-white/70 backdrop-blur-md px-4 py-4 rounded-2xl border border-black/10">
            <button
              className="cursor-pointer text-sm font-semibold px-4 py-2 rounded-full bg-white text-black shadow-sm ring-1 ring-black/10 hover:bg-white hover:shadow-md hover:scale-105 active:scale-95 transition"
              onClick={() => setColor("white")}
            >
              white
            </button>

            <button
              className="cursor-pointer text-sm font-semibold px-4 py-2 rounded-full bg-rose-500/90 text-white shadow-sm ring-1 ring-black/10 hover:bg-rose-500 hover:shadow-md hover:scale-105 active:scale-95 transition"
              onClick={() => setColor("pink")}
            >
              pink
            </button>

            <button
              className="cursor-pointer text-sm font-semibold px-4 py-2 rounded-full bg-yellow-500/90 text-white shadow-sm ring-1 ring-black/10 hover:bg-yellow-500 hover:shadow-md hover:scale-105 active:scale-95 transition"
              onClick={() => setColor("yellow")}
            >
              yellow
            </button>

            <button
              className="cursor-pointer text-sm font-semibold px-4 py-2 rounded-full bg-blue-500/90 text-white shadow-sm ring-1 ring-black/10 hover:bg-blue-500 hover:shadow-md hover:scale-105 active:scale-95 transition"
              onClick={() => setColor("blue")}
            >
              blue
            </button>

            <button
              className="cursor-pointer text-sm font-semibold px-4 py-2 rounded-full bg-black text-white shadow-sm ring-1 ring-black/10 hover:bg-black hover:shadow-md hover:scale-105 active:scale-95 transition"
              onClick={() => setColor("black")}
            >
              black
            </button>

            <button
              className="cursor-pointer text-sm font-semibold px-4 py-2 rounded-full bg-green-500/90 text-white shadow-sm ring-1 ring-black/10 hover:bg-green-500 hover:shadow-md hover:scale-105 active:scale-95 transition"
              onClick={() => setColor("green")}
            >
              green
            </button>

            <button
              className="cursor-pointer text-sm font-semibold px-4 py-2 rounded-full bg-orange-500/90 text-white shadow-sm ring-1 ring-black/10 hover:bg-orange-500 hover:shadow-md hover:scale-105 active:scale-95 transition"
              onClick={() => setColor("orange")}
            >
              orange
            </button>

            <button
              className="cursor-pointer text-sm font-semibold px-4 py-2 rounded-full bg-violet-500/90 text-white shadow-sm ring-1 ring-black/10 hover:bg-violet-500 hover:shadow-md hover:scale-105 active:scale-95 transition"
              onClick={() => setColor("violet")}
            >
              violet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
