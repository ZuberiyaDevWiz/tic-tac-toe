import { cn } from "../../lib/utils";
import { useState } from "react";

export default function TicTacToe() {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [win, setWin] = useState(false);
  const [winner, setWinner] = useState("");

  const toggle = (num: number) => {
    if (win || data[num] !== "") {
      return;
    }

    const updatedData = [...data];
    updatedData[num] = count % 2 === 0 ? "X" : "O";

    setCount(count + 1);
    setData(updatedData);
    checkWin(updatedData);
    setWinner(updatedData[num]);

    // if (updatedData.every((cell) => cell !== '')) {
    //   setWin(true);
    //   setWinner('Tie');
    // }
  };

  const checkWin = (updatedData: string[]) => {
    if (
      updatedData[0] === updatedData[1] &&
      updatedData[1] === updatedData[2] &&
      updatedData[2] !== ""
    ) {
      setWin(true);
    } else if (
      updatedData[3] === updatedData[4] &&
      updatedData[4] === updatedData[5] &&
      updatedData[5] !== ""
    ) {
      setWin(true);
    } else if (
      updatedData[6] === updatedData[7] &&
      updatedData[7] === updatedData[8] &&
      updatedData[8] !== ""
    ) {
      setWin(true);
    } else if (
      updatedData[0] === updatedData[3] &&
      updatedData[3] === updatedData[6] &&
      updatedData[6] !== ""
    ) {
      setWin(true);
    } else if (
      updatedData[1] === updatedData[4] &&
      updatedData[4] === updatedData[7] &&
      updatedData[7] !== ""
    ) {
      setWin(true);
    } else if (
      updatedData[2] === updatedData[5] &&
      updatedData[5] === updatedData[8] &&
      updatedData[8] !== ""
    ) {
      setWin(true);
    } else if (
      updatedData[0] === updatedData[4] &&
      updatedData[4] === updatedData[8] &&
      updatedData[8] !== ""
    ) {
      setWin(true);
    } else if (
      updatedData[0] === updatedData[2] &&
      updatedData[2] === updatedData[6] &&
      updatedData[6] !== ""
    ) {
      setWin(true);
    }
  };

  const resetGame = () => {
    // Reset the game state here
    setCount(0);
    setWin(false);
    setData(["", "", "", "", "", "", "", "", ""]);
  };

  return (
    <div className="mt-4 flex flex-col items-center justify-center space-y-4">
      {win ? (
        <h1 className="font-mono text-3xl  font-semibold">
          {winner === "Tie" ? (
            <span className="text-red-500">It's a Tie!</span>
          ) : (
            <span className="text-green-500">
              {" "}
              {`Congratulations, ${winner} wins!`}
            </span>
          )}
        </h1>
      ) : (
        <h1 className="font-mono text-3xl font-semibold">Tic Tac Toe Game</h1>
      )}
      <div className="grid grid-cols-3 gap-2 pt-3">
        {data.map((value, index) => (
          <button
            key={index}
            className={cn("h-16 w-16 rounded-md bg-gray-300 text-3xl", {
              "bg-green-400 ": value === "X",
              "bg-red-400": value === "O",
            })}
            onClick={() => toggle(index)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="pt-5">
        <button
          className="rounded-full bg-green-400 px-10 py-2 font-mono text-lg font-semibold"
          onClick={resetGame}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
