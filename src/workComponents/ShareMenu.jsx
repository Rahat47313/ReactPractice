import { IoLink } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";

export default function ShareMenu() {
  return (
    <>
      <div className="flex flex-col items-center bg-white rounded-md font-medium text-[13px] pt-[8px] pb-[36px] w-[526px] h-[261px]">
        <div className="flex justify-between w-full border-b border-[#e5e5e5] pb-[7px] pl-[25px] pr-[11.38px] mb-[23px]">
          <p>Share these Project</p>
          <div className="flex items-center gap-[24px]">
            <div className="flex items-center gap-[6.37px]">
              <p className="rotate-[-39.54deg]">
                <IoLink />
              </p>
              <p>Copy link</p>
            </div>
            <p>
              <FaXmark />
            </p>
          </div>
        </div>

        <div className="w-full">
          <form className="flex justify-between px-[25px] mb-[17px]">
            <div className="flex-grow">
              <input
                placeholder="Invite others by name or email"
                className="border rounded-md w-[85%] h-full pl-[16px] py-[10px]"
              ></input>
            </div>

            <button className="bg-black text-white rounded-md py-[8px] px-[14px]">
              Invite
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-[17px] w-full px-[25px]">
          <p className="flex justify-start">Who can Access</p>
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-[9px]">
              <p className="text-[18px]">
                <CiGlobe />
              </p>
              <p>Anyone can view</p>
            </div>
            <button className="flex items-center gap-[13px]">
              <p>can view</p>
              <p>
                <IoIosArrowForward />
              </p>
            </button>
          </div>

          <div className="flex justify-between w-full">
            <div className="flex items-center gap-[9px]">
              <p className="text-[18px]">
                <CgProfile />
              </p>
              <p>UNI box ( you )</p>
            </div>
            <p>owner</p>
          </div>
        </div>
      </div>
    </>
  );
}
