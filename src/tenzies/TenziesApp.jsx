import { useState } from "react";
import Die from "./Die";

export default function TenziesApp() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const randNumArray = [...Array(10)].fill().map(() => Math.floor(Math.random() * 6) + 1);
    return randNumArray;
  }

  function rollDice(){
    setDice(allNewDice())
  }

  const diceElement = dice.map((die, index) => <Die key={index} value={die} />);

  return (
    <>
      <div className="flex justify-center items-center font-karla bg-[#0b2434] p-[20px] h-svh">
        <div className="flex flex-col gap-[20px] justify-center items-center bg-[#f5f5f5] rounded-sm max-w-[800px] aspect-square h-[95%] p-[20px]">
          <div className="flex flex-wrap justify-center items-center gap-[20px] w-[350px]">
            {diceElement}
          </div>
          <button onClick={rollDice} className="active:shadow-[inset_5px_5px_10px_-3px_rgba(0,0,0,0.7)] font-karla text-[1.2rem] text-white bg-[#5035ff] rounded-sm py-1 px-7">Roll</button>
        </div>
      </div>
    </>
  );
}
