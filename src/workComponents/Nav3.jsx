import { RxHamburgerMenu } from "react-icons/rx";
import MobileNav from "./MobileNav";
import Logo from "../assets/images/rectangleLogo.png";
import { useState } from "react";

export default function Nav3() {
    const [trayVisibiity, setTrayVisibility] = useState(false);
  return (
    <>
      <div className="relative w-full border-b-2 border-[#26272C] ">
        
        <div className="flex items-center justify-between container mx-auto py-4">
          <div className="flex justify-center items-center gap-2">
            <img src={Logo} alt="" />
            <div className="text-[#ffffff] text-[20px]">Websparks</div>
          </div>

          <div className="xxs:hidden md:block">
            <ul className="flex justify-center items-center gap-6">
              <li className="text-[#ffffff] font-medium text-[17px]">Home</li>
              <li className="text-[#ffffff] font-medium text-[17px]">
                Product
              </li>
              <li className="text-[#ffffff] font-medium text-[17px]">
                Resources
              </li>
              <li className="text-[#ffffff] font-medium text-[17px]">Docs</li>
              <li className="text-[#ffffff] font-medium text-[17px]">
                Pricing
              </li>
            </ul>
          </div>
          <div className="flex justify-start items-center xxs:hidden md:flex gap-4">
            <p className="text-[#ffffff] font-medium text-[17px] ">Log in</p>
            <div className="w-max bg-gradient-to-r from-[#FFFFFF2B] to-[#FFFFFF00] p-[3px] rounded-sm">
              <button className="flex gap-3 justify-center items-center rounded-sm text-[#B5B6BA] px-4 py-2 font-medium text-[17px] bg-[#1A1B1F] ">
                Signup
                <p className="bg-[#6B6B6E] text-[#1A1B1E] rounded font-semibold text-base px-2">
                  L
                </p>
              </button>
            </div>
          </div>
          <div className="xxs:block md:hidden">
            <button
            onMouseEnter={() => setTrayVisibility(true)}
            
            className="text-white font-medium text-[25px]"
            >
            <RxHamburgerMenu />
            </button>
          </div>
        </div>
        <div
        className = {`${trayVisibiity === true ? "block" : "hidden"} absolute top-0`}>
            <MobileNav setTrayVisibility={setTrayVisibility} />
        </div>
      </div>
    </>
  );
}
