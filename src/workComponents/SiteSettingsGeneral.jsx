import Flag from "../assets/images/DarkNeutralFlag.png";
import Accessibility from "../assets/images/accessibility.svg";

export default function SiteSettingsGeneral() {
  return (
    <>
      <div className="text-[#CCCCCC] text-[12px] bg-[#111111] rounded-md w-[720px]">
        <div className="px-[30px]">
          <div className="flex justify-between text-white py-[30px] border-b border-[#252525]">
            <div className="font-bold text-[22px]">Site Settings</div>
            <div className="flex items-center gap-[7px]">
              <button className="font-semibold text-[13px] text-[#666666] rounded-md bg-[#333333] px-[17px] py-[7px]">
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-[30px] gap-[30px]">
          <div className="flex justify-between gap-[50px]">
            <div className="flex flex-col flex-grow gap-2">
              <div>Site Title</div>
              <input
                value={"My Framer Site"}
                className="text-[#EEEEEE] bg-[#2B2B2B] rounded-md py-[3px] indent-2 focus:outline-none"
              ></input>
            </div>
            <div className="flex flex-col flex-grow gap-2">
              <div>Site Language</div>
              <div className="flex gap-1 bg-[#2B2B2B] rounded-md pl-[5px] py-[3px]">
                <img src={Flag} />
                <input
                  placeholder="add..."
                  className="bg-transparent grow focus:outline-none"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Site Description</div>
            <textarea
              value={"Made with Framer"}
              className="text-[#EEEEEE] bg-[#2B2B2B] rounded-md focus:outline-none pt-[3px] indent-2 h-[100px]"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <div>Preview</div>
            <div className="flex flex-col justify-center gap-[10px] border border-[#252525] rounded-md p-[16px]">
              <div className="text-[#999999]">yoursite.url &nbsp;&nbsp;⁝</div>
              <div className="text-[#8AB4F8] text-[14px]">My Framer Site</div>
              <div className="text-[#EEEEEE]">Made with Framer</div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div>Accessibility</div>
            <div className="flex gap-3">
              <img src={Accessibility} />
              <div>
                Disable movement animations and custom cursors if the user
                prefers reduced motion
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>HTML Paste</div>
            <div className="flex gap-3">
              <img src={Accessibility} />
              <div>
                Opt out of the HTML to Framer{" "}
                <span className="text-[#0099FF]">Chrome Extension</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Navigation</div>
            <div className="flex gap-3">
              <img src={Accessibility} />
              <div>
                Preserve URL parameters (like{" "}
                <span className="font-menlo rounded-sm bg-[#2B2B2B] px-[4px] py-[2px]">
                  utm_source
                </span>
                ) when navigating between pages
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
