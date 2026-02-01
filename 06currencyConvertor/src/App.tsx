import { useState } from "react";
import InputBox from "../src/components/input";
import useCurrencyInfo from "../src/hooks/userCurrencyInfo";

function App() {
  const [amount, setAmount] = useState<number>(0);
  const [from, setFrom] = useState<string>("usd");
  const [to, setTo] = useState<string>("inr");
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  const currencyInfo = useCurrencyInfo(from) as Record<string, number>;

  const options = Object.keys(currencyInfo);

  const swap = (): void => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = (): void => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-lg mx-auto rounded-2xl p-6 backdrop-blur-md bg-white/10 ring-1 ring-white/20 shadow-2xl">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                selectCurrency={from}
                onAmountChange={(value) => setAmount(value)}
                onCurrencyChange={(currency) => setFrom(currency)}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 text-blue-600 font-semibold rounded-full px-3 py-1 shadow-md hover:scale-105 transition-transform"
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className="w-full mt-4 mb-6">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                selectCurrency={to}
                onCurrencyChange={(currency) => setTo(currency)}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white font-medium px-4 py-3 rounded-xl shadow-lg hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-0.5 transition"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
