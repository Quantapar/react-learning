import { useState, useCallback, useRef, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  // useRef Hook
  const passwordRef = useRef<HTMLInputElement | null>(null);

  // generate password useCallback
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) chars += "0123456789";
    if (charAllowed) chars += "!@#$%^&*()_+?><.,";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // copy password
  const copyPassword = () => {
    passwordRef.current?.select();
    if (!password) return;
    navigator.clipboard.writeText(password);
  };

  //useEffect
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <main
      className={`min-h-screen flex items-center justify-center transition-colors ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`w-full max-w-md px-6 py-8 space-y-6 rounded-xl border transition-colors ${
          darkMode ? "border-white/10 bg-black" : "border-black/10 bg-white"
        }`}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium tracking-tight">
            Password Generator
          </h1>

          <button
            onClick={() => setDarkMode((p) => !p)}
            className={`text-xs px-3 py-1 rounded border cursor-pointer transition active:scale-95
              ${
                darkMode
                  ? "border-white/30 hover:bg-white hover:text-black"
                  : "border-black/30 bg-black/5 hover:bg-black hover:text-white"
              }`}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>

        <div className="relative">
          <input
            ref={passwordRef}
            type="text"
            value={password}
            readOnly
            placeholder="••••••••"
            className={`w-full px-3 py-2 text-sm rounded font-mono border outline-none ${
              darkMode
                ? "bg-white/5 border-white/10 text-white"
                : "bg-black/5 border-black/10 text-black"
            }`}
          />

          <button
            onClick={copyPassword}
            className={`absolute right-2 top-1/2 -translate-y-1/2
              text-xs px-2 py-1 rounded border cursor-pointer transition active:scale-95
              ${
                darkMode
                  ? "border-white/30 hover:bg-white hover:text-black"
                  : "border-black/30 bg-black/5 hover:bg-black hover:text-white"
              }`}
          >
            Copy
          </button>
        </div>

        <div className="space-y-2">
          <div
            className={`flex justify-between text-xs ${
              darkMode ? "text-white/60" : "text-black/60"
            }`}
          >
            <span>Length</span>
            <span>{length}</span>
          </div>

          <input
            type="range"
            min="4"
            max="25"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-current cursor-pointer"
          />
        </div>

        <div className="space-y-2 text-sm">
          <label className="flex items-center justify-between cursor-pointer">
            <span className={darkMode ? "text-white/70" : "text-black/70"}>
              Include numbers
            </span>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((p) => !p)}
              className="accent-current cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between cursor-pointer">
            <span className={darkMode ? "text-white/70" : "text-black/70"}>
              Include symbols
            </span>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((p) => !p)}
              className="accent-current cursor-pointer"
            />
          </label>
        </div>

        <button
          onClick={passwordGenerator}
          className={`w-full py-2 text-sm rounded border cursor-pointer transition active:scale-95
            ${
              darkMode
                ? "border-white/30 hover:bg-white hover:text-black"
                : "border-black/30 bg-black text-white hover:bg-black/80"
            }`}
        >
          Generate
        </button>
      </div>
    </main>
  );
}

export default App;
