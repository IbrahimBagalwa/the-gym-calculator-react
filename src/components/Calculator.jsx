import { useState } from "react";

const Calculator = () => {
  const [num, setNum] = useState(0);
  const [oldNumber, setOldNumber] = useState(0);
  const [operator, setOperator] = useState();

  const inputNum = (e) => {
    let input = e.target.value;
    if (num.length > 16) return;
    if (input === "." && num.toString().indexOf(".") !== -1) {
      return;
    }
    if (input === "." && num.toString().indexOf(".") === -1 && num) {
      input = ".";
    } else if (!num && input === "." && num.toString().indexOf(".") === -1) {
      input = "0.";
    }
    if (input === "0" && num === 0) {
      setNum(num);
    } else if (num === 0) {
      setNum(input);
      return;
    } else {
      setNum(num + input);
    }
  };
  const handleOperator = (e) => {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    if (operatorInput === "X") operatorInput = "*";
    setOldNumber((prev) => {
      if ((prev === 0 && operatorInput === "*") || operatorInput === "/") {
        prev = 1;
      }
      // eslint-disable-next-line no-eval
      return eval(num + operatorInput + prev);
    });
    setNum(0);
  };
  const calculate = () => {
    switch (operator) {
      case "/":
        setNum(parseFloat(oldNumber) / parseFloat(num));
        break;
      case "X":
        setNum(parseFloat(oldNumber) * parseFloat(num));
        break;
      case "-":
        setNum(parseFloat(oldNumber) - parseFloat(num));
        break;
      case "+":
        setNum(parseFloat(oldNumber) + parseFloat(num));
        break;
      default:
        setNum(0);
    }
  };
  const changeSign = () => {
    return num > 0 ? setNum(-num) : setNum(Math.abs(num));
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-4 md:w-3/12 md:h-3/4 bg-[#DCDBDC]">
        <div className="col-span-4 text-end px-4 bg-[#7B7A89] text-white md:text-4xl font-medium text-xl flex items-center justify-end">
          <p>{num}</p>
        </div>
        <button
          className="border-[#7B7A89] border"
          onClick={() => {
            setNum(0);
            setOperator("");
            setOldNumber(0);
          }}
        >
          AC
        </button>
        <button className="border-[#7B7A89] border" onClick={changeSign}>
          +/-
        </button>
        <button
          className="border-[#7B7A89] border"
          onClick={() => setNum(num / 100)}
        >
          %
        </button>
        <button
          className="border-[#7B7A89] border bg-[#F48637]"
          onClick={handleOperator}
          value={"/"}
        >
          /
        </button>
        <button
          className="border-[#7B7A89] border flex items-center justify-center md:text-4xl text-xl font-normal md:font-bold text-center"
          onClick={inputNum}
          value={7}
        >
          7
        </button>
        <button
          className="border-[#7B7A89] border flex items-center justify-center md:text-4xl text-xl font-normal md:font-bold text-center"
          onClick={inputNum}
          value={8}
        >
          8
        </button>
        <button
          className="border-[#7B7A89] border flex items-center justify-center md:text-4xl text-xl font-normal md:font-bold text-center"
          onClick={inputNum}
          value={9}
        >
          9
        </button>
        <button
          className="border-[#7B7A89] bg-[#F48637] border"
          onClick={handleOperator}
          value={"X"}
        >
          X
        </button>
        <button
          className="border-[#7B7A89] border flex items-center justify-center md:text-4xl text-xl font-normal md:font-bold text-center"
          onClick={inputNum}
          value={4}
        >
          4
        </button>
        <button
          className="border-[#7B7A89] border flex items-center justify-center md:text-4xl text-xl font-normal md:font-bold text-center"
          onClick={inputNum}
          value={5}
        >
          5
        </button>
        <button
          className="border-[#7B7A89] border flex items-center justify-center md:text-4xl text-xl font-normal md:font-bold text-center"
          onClick={inputNum}
          value={6}
        >
          6
        </button>
        <button
          className="bg-[#F48637] border-[#7B7A89] border"
          onClick={handleOperator}
          value={"-"}
        >
          -
        </button>
        <button
          className="border-[#7B7A89] border flex items-center justify-center md:text-4xl text-xl font-normal md:font-bold text-center"
          onClick={inputNum}
          value={1}
        >
          1
        </button>
        <button
          className="border-[#7B7A89] border flex items-center justify-center md:text-4xl text-xl font-normal md:font-bold text-center"
          onClick={inputNum}
          value={2}
        >
          2
        </button>
        <button
          className="border-[#7B7A89] border flex items-center justify-center md:text-4xl text-xl font-normal md:font-bold text-center"
          onClick={inputNum}
          value={3}
        >
          3
        </button>
        <button
          className="bg-[#F48637] border-[#7B7A89] border"
          onClick={handleOperator}
          value={"+"}
        >
          +
        </button>
        <button
          className="border-[#7B7A89] border col-span-2 flex items-center justify-center md:text-4xl text-xl font-normal md:font-bold text-center"
          onClick={inputNum}
          value={0}
        >
          0
        </button>
        <button
          className="border-[#7B7A89] border flex items-center justify-center md:text-4xl text-xl font-normal md:font-bold text-center"
          onClick={inputNum}
          value={"."}
        >
          .
        </button>
        <button
          className="bg-[#F48637] border-[#7B7A89] border"
          onClick={calculate}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
