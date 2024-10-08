import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { GrPowerReset } from "react-icons/gr";
import { FaDice } from "react-icons/fa";
import Die from "./Die";
import Confetti from "react-confetti";

export default function TenziesApp() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
    };
  }

  function allNewDice() {
    let newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }

    //const randNumArray = [...Array(10)].fill().map(() => Math.floor(Math.random() * 6) + 1);
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  const diceElement = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <>
      <div className="flex justify-center items-center font-karla bg-[#0b2434] p-[20px] h-svh">
        {tenzies && (
          <div>
            <Confetti />
          </div>
        )}
        <div className="flex flex-col gap-[20px] justify-center items-center bg-[#f5f5f5] rounded-sm max-w-[800px] aspect-square h-[80%] p-[20px]">
          <div className="font-bold text-[40px]">Tenzies</div>
          <div className="text-center">
            {tenzies
              ? "You won!!!"
              : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-[20px] w-[350px]">
            {diceElement}
          </div>
          <button
            onClick={rollDice}
            className="active:shadow-[inset_5px_5px_10px_-3px_rgba(0,0,0,0.7)] font-karla text-[1.2rem] text-white bg-[#5035ff] rounded-sm py-1 px-7"
          >
            {tenzies ? (
              <div className="flex justify-center items-center gap-2">
                <GrPowerReset />
                New game
              </div>
            ) : (
              <div className="flex justify-center items-center gap-2">
                <FaDice />
                Roll
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
