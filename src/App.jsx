import Navbar from "./components/Navbar";
// import MainContent from "./components/MainContent";
// import Meme from "./memeGenerator/Meme";
import NoteApp from "./markdownNote/NoteApp";
import { useState } from "react";
// import Notification from "./components/notification";
// import PricingCard from "./components/PricingCard";
// import MobileNav from "./workComponents/MobileNav";
// import Nav3 from "./workComponents/Nav3";
// import ShareMenuExtended from "./workComponents/ShareMenuExtended";
// import SiteSettingsDomains from "./workComponents/SiteSettingsDomains";
// import SiteSettingsGeneral from "./workComponents/SiteSettingsGeneral";

function App() {
  const [themeMode, setThemeMode] = useState(false)
  function toggleTheme(){
    setThemeMode(prevThemeMode => !prevThemeMode)
  }
  return (
    <>
      <div className={`${themeMode ? "bg-black" : "bg-white"} absolute z-[-1] transition duration-300 w-[100vw] h-[100vh]`}>
      <Navbar toggleTheme={toggleTheme} />
      {/* <MainContent /> */}
      {/* <Meme /> */}
      <NoteApp />
      {/* <Notification /> */}
      {/* <PricingCard /> */}
      {/* <Nav3 /> */}
      {/* <ShareMenuExtended /> */}
      {/* <SiteSettingsDomains />  */}
      {/* <SiteSettingsGeneral /> */}
      </div>
    </>
  );
}

export default App;