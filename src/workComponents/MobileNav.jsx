import logo from "../assets/images/rectangleLogo.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
import { PiNotePencilFill } from "react-icons/pi";
import { useState } from "react";
export default function MobileNav({setTrayVisibility}) {
  const [arrowVisibility, setArrowVisibility] = useState(null);
  const buttonArray = ["Product", "Resource", "Docs", "Pricing"];
  return (
    <>
      <div className="mx-auto bg-gradient-to-b from-[#8C8C93] to-[#3F3F43]">
        <div className="bg-[#020202] w-screen h-screen text-white">
          <div className="flex justify-between w-[90%] pt-10 pl-10">
            <div>
              <img src={logo} className="" />
            </div>
            <button onClick={() => setTrayVisibility(false)} className="justify-center items-center text-xl text-[#999999]">
              <FaXmark className="text-3xl" />
            </button>
          </div>
          <div className="flex flex-col gap-2 w-[80%] pt-4 pl-10">
            <div className="w-full">
              {buttonArray.map((buttonTitle, index) => (
                <>
                  <button
                    key={index}
                    onMouseEnter={() => setArrowVisibility(index)}
                    onMouseLeave={() => setArrowVisibility(null)}
                    className="flex gap-2 pt-4 justify-between items-center  text-xl text-[#999999] w-full mt-2"
                  >
                    {buttonTitle}
                    <p
                      className={`${
                        arrowVisibility === index ? "block" : "hidden"
                      }`}
                    >
                      <IoIosArrowForward />
                    </p>
                  </button>
                </>
              ))}
            </div>
          </div>
          <div className="border-t-[0.1px] w-[85%] mx-auto border-[#3F3F43] mt-8"></div>
          <div className="flex justify-center gap-5 w-full pt-10 mx-auto">
            <button className="flex gap-2 justify-center items-center text-xl text-white bg-[#020202] rounded-md border-[2px] border-[#3F3F43] w-[150px] h-[50px]">
              <IoLogIn />
              Log in
            </button>
            <button className="flex gap-2 justify-center items-center text-xl text-white bg-[#18191d] rounded-md border-[2px] border-[#3F3F43] w-[150px] h-[50px]">
              <PiNotePencilFill />
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}