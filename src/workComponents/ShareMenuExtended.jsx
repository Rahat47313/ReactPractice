import { FaXmark } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import Web from "../assets/images/Web.svg";
import { useState } from "react";

export default function ShareMenuExtended() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center bg-white rounded-md font-medium text-[13px] pt-[8px] pb-[36px] w-[526px] h-[530px]">
        <div className="flex items-center w-full border-b border-[#e5e5e5] pb-[7px]  pl-[26px] pr-[28px] mb-[23px]">
          <p>
            <IoIosArrowBack />
          </p>
          <div className="flex items-center justify-between pl-[22px] w-full">
            <p>Share settings</p>
            <p>
              <FaXmark />
            </p>
          </div>
        </div>

        <div className="w-full  pl-[57px] pr-[28px]">
          <div className="flex flex-col gap-[24px]">
            <div>
              <p className="flex justify-start mb-[20px]">Who can Access</p>
              <div className="relative flex justify-between w-full">
                <div className="relative w-full">
                  <button
                    onClick={() => setMenuVisibility(!menuVisibility)}
                    className="w-full bg-[#F9FAFB] border border-[#e0e1e1] px-[13px] py-[9px] rounded-md flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <img
                        src={Web}
                        alt="Anyone"
                        className="w-[24px] h-[24px] mr-2"
                      />
                      <span>Anyone</span>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {menuVisibility && (
                    <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                      <div className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
                        <img src={Web} alt="Anyone" className="w-5 h-5 mr-2" />
                        <span>Anyone</span>
                      </div>
                      <div className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
                        <img src={Web} alt="Only me" className="w-5 h-5 mr-2" />
                        <span>Only me</span>
                      </div>
                      <div className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
                        <img
                          src={Web}
                          alt="Organization"
                          className="w-5 h-5 mr-2"
                        />
                        <span>Organization</span>
                      </div>
                    </div>
                  )}
                  <div className="text-[11px] text-[#8B8B8B] mt-[1px]">
                    Anyone, even those outside your organization, will be able
                    to access this file
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="flex justify-start mb-[10px]">What can they do</p>
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-[30px]">
                  <div className="flex items-center gap-[9px]">
                    <input
                      type="radio"
                      name="option"
                      value="view"
                      className="text-blue-500"
                    />
                    <p>View</p>
                  </div>
                  <div className="flex items-center gap-[9px]">
                    <input
                      type="radio"
                      name="option"
                      value="edit"
                      className="text-blue-500"
                    />
                    <p>Edit</p>
                  </div>
                </div>
              </div>
              <div className="text-[11px] text-[#8B8B8B] mt-[1px]">Can view and comment on this file.</div>
            </div>

            <div className="border-t border-b py-[14px]">
              <p className="flex justify-start mb-[10px]">Additional security</p>
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-[9px]">
                  <input
                    type="checkBox"
                    name="option"
                    className="text-blue-500"
                  />
                  <p>Password required</p>
                </div>
              </div>
            </div>

            <div>
              <p className="flex justify-start mb-[10px]">Advanced</p>
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-[9px]">
                  <input
                    type="checkBox"
                    name="option"
                    className="text-blue-500"
                  />
                  <p>Viewer can copy, share, and export from this file</p>
                </div>
              </div>
              <div className="text-[11px] text-[#8B8B8B] mt-[1px]">This setting applies to anyone in the file with access</div>
            </div>

            <div className="flex justify-end gap-[15px]">
            <button className="py-[4px] px-[13px]">
                Cancel
              </button>
              <button className="bg-black text-white rounded-md py-[8px] px-[14px]">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
