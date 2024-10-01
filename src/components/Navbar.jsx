export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-between items-center text-white bg-gradient-to-r to-[#FFC719] from-[#BF033B] shadow-md p-[10px] pl-5 pr-10">
        <div className="flex items-center gap-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/7/73/Trollface.png"
            className="w-[50px] h-[50px]"
          />
          <div className="text-[30px] font-bold">Meme Generator</div>
        </div>
        <ul className="flex gap-5 items-center text-white">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Products</li>
          <li>Contact</li>
          <li>
            <label className="cursor-pointer">
              <input type="checkbox" id="themeToggle" value="" className="w-0 h-0 hidden peer" />
              {/* sr-only peer */}
              <div htmlFor="themeToggle" className="relative after:absolute w-[80px] after:w-[28px] h-[32px] after:h-[28px] after:top-[2px] after:left-[2px] peer-checked:after:left-[78px] peer-checked:after:translate-x-[-100%] bg-[#ebebeb] after:bg-[linear-gradient(180deg,#ffcc89,#d8860b)] pe peer-checked:bg-[#242424] rounded-full after:rounded-full shadow-[inset_0_5px_5px_rgba(0,0,0,0.4),_inset_0_-5px_5px_rgba(255,255,255,0.4)] after:shadow-[0_5px_10px_rgba(0,0,0,0.2)] after:content-['']"></div>
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}
