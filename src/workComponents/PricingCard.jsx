import check from "../assets/check.svg";

export default function PricingCard() {
  return (
    <div className="flex justify-center flex-wrap font-inter">
      <div className="flex flex-col bg-white border border-[#E3E2E4] rounded-[16px] h-[650px]">
        <div className="flex flex-col justify-between bg-[#FBFBFC] w-full border-b rounded-t-[16px]  px-[16px] pt-[20px] pb-[21px]">
          <div className="font-[600] text-[16px]">FOSS + Basic</div>
          <div className="font-[400] text-[15px] text-[#8E8D91]">
            Open-Source under MIT license.
          </div>
          <div className="font-[600] text-[26px] text-[#121212] pt-[8px]">
            Free forever
          </div>
        </div>

        <div className="flex flex-col px-[16px] pt-[12px] pb-[30px] gap-[8px] h-[454px]">
          <div className="font-[500] text-[12px] text-[#8E8D91]">
            Include in FOSS:
          </div>
          <div className="flex flex-col gap-[10px] text-[14px] text-[#424149]">
            <div className="flex items-start gap-[8px]">
              <div className="pt-[5.17px] pb-[2.83px]">
                <img src={check}></img>
              </div>
              <p>Unlimited Local Workspace</p>
            </div>
            <div className="flex items-start gap-[8px]">
              <div className="pt-[5.17px] pb-[2.83px]">
                <img src={check}></img>
              </div>
              <p>Unlimited use and Customization</p>
            </div>
            <div className="flex items-start gap-[8px]">
              <div className="pt-[5.17px] pb-[2.83px]">
                <img src={check}></img>
              </div>
              <p>Unlimited Doc and Edgeless editing</p>
            </div>
          </div>
          <div className="font-[500] text-[12px] text-[#8E8D91]">
            Include in Basic:
          </div>
          <div className="flex flex-col gap-[10px] text-[14px] text-[#424149]">
            <div className="flex items-start gap-[8px]">
              <div className="pt-[5.17px] pb-[2.83px]">
                <img src={check}></img>
              </div>
              <p>10 GB of Cloud Storage</p>
            </div>

            <div className="flex items-start gap-[8px]">
              <div className="pt-[5.17px] pb-[2.83px]">
                <img src={check}></img>
              </div>
              <p>10 MB of Maximum file size</p>
            </div>

            <div className="flex items-start gap-[8px]">
              <div className="pt-[5.17px] pb-[2.83px]">
                <img src={check}></img>
              </div>
              <p>Up to 3 members per Workspace</p>
            </div>

            <div className="flex items-start gap-[8px]">
              <div className="pt-[5.17px] pb-[2.83px]">
                <img src={check}></img>
              </div>
              <p className="w-[90%]">
                7-days Cloud Time Machine file version history
              </p>
            </div>

            <div className="flex items-start gap-[8px]">
              <div className="pt-[5.17px] pb-[2.83px]">
                <img src={check}></img>
              </div>
              <p>Up to 3 login devices</p>
            </div>
          </div>
        </div>

        <div className="px-[16px] py-[12px]">
          <button className="bg-gradient-to-t from-[#2A64BB] to-[#AD7EE1] text-white py-[11px] px-32 border rounded-[8px]">
            <span className="flex w-full text-white rounded-[8px]">Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
}