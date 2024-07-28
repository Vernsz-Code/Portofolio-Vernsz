import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import NavbarComponents from "./components/NavbarComponents";
import ProjectComponent from "./components/ProjectComponent";
import RewardComponent from "./components/RewardComponent";
import AboutComponent from "./components/AboutComponent";
import FooterComponent from "./components/FooterComponent";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  return (
    <div className=" bg-white h-screen max-w-full p-3 sm:p-0 overflow-x-hidden relative flex flex-col gap-5">
      <div id="home"></div>
      <NavbarComponents />
      <HeaderComponent />
      <ProjectComponent />
      <RewardComponent />
      <AboutComponent />
      <div className="m-[-12px] sm:mx-[-12px] sm:px-3">
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
