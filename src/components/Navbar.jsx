import PropTypes from "prop-types";
import { IoIosSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";

export default function Navbar({ toggleTheme }) {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center text-white bg-gradient-to-r to-[#FFC719] from-[#BF033B] shadow-md p-[10px] pl-5 pr-10">
          <div className="flex items-center gap-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/73/Trollface.png"
              className="w-[50px] h-[50px]"
            />
            <div className="text-[30px] font-bold">Practice</div>
          </div>
          <ul className="flex gap-5 items-center text-white">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Products</li>
            <li>Contact</li>
            <li>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only toggle-check"
                  onClick={toggleTheme}
                />
                {/* sr-only peer */}
                <div className="toggle-button flex items-center">
                  <div className="sun absolute z-[100] text-[22px]">
                    <IoIosSunny />
                  </div>
                  <div className="moon absolute z-[100] text-[22px]">
                    <IoIosMoon />
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

Navbar.propTypes = {
  toggleTheme: PropTypes.func,
};