import { useEffect, useState } from "react";
// import MemesData from "./MemesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "",
  });

  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMeme(data.data.memes))
  }, [])
  function getMemeImg() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function handleSubmit(event){
    event.preventDefault()
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex  flex-col gap-4 p-10">
        <div className="flex justify-center items-center gap-28">
          <label className="">
            Top Text
            <input
              type="text"
              placeholder="Top Text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
              className="border border-black rounded-md indent-2 py-2"
            ></input>
          </label>

          <label>
            Bottom text
            <input
              type="text"
              placeholder="Bottom Text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
              className="border border-black rounded-md indent-2 py-2"
            ></input>
          </label>
        </div>
        <button
          onClick={getMemeImg}
          className="text-white bg-gradient-to-r to-[#FFC719] from-[#BF033B] rounded-md w-full py-2"
        >
          Get a new meme image 🖼
        </button>
      </form>

      <div className="p-10">
      <div className="flex justify-center relative">
        <img src={meme.randomImg} className="w-[50%]"></img>
        <div className="absolute text-center font-impact text-[2em] uppercase text-white tracking-[1px] memeText-shadow my-[15px] px-[5px] top-0">
          {meme.topText}
        </div>
        <div className="absolute w-[80%] text-center left-[50%] translate-x-[-50%] font-impact text-[2em] uppercase text-white tracking-[1px] memeText-shadow my-[15px] px-[5px] bottom-0">
          {meme.bottomText}
        </div>
      </div>
      </div>
    </>
  );
}
