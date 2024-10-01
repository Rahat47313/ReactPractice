import round from "../assets/green_circle.png"
export default function Notification() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center bg-black border border-[#1a1a1a] text-sm text-[#A1A0A7] p-[5px] max-w-[380px] gap-[0.5px]">
        <div className="flex items-center justify-between bg-[#141414] w-full px-4 py-[20px] rounded-t-lg">
          <div>Your export is ready to download</div>
          <div className="flex items-center gap-3">
            <div>
                <img src={round}></img>
            </div>
            <div>now</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start bg-[#141414] w-full px-4">
          <div className="flex justify-between w-full">
            <p>
              <span className="text-white">Vincent</span> invited you to
              <span className="text-white">Design exploration</span>
            </p>
            <p>5m ago</p>
          </div>
          <div className="flex w-full gap-3 pt-[10px]">
            <button className="bg-white text-black py-2 px-4 rounded">
              Accept
            </button>
            <button className="bg-[#202020] text-white py-2 px-4 rounded">
              Decline
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between bg-[#141414] w-full px-4 py-[20px] rounded-b-lg">
          <div>
            You can now edit <span className="text-white">Roadmap</span>
          </div>
          <div>4d ago</div>
        </div>
      </div>
    </>
  );
}
