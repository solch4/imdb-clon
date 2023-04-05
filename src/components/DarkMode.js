"use client";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const toggleTheme = () =>
    currentTheme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <>
      <button onClick={toggleTheme} className="text-xl hover:text-amber-500">
        {currentTheme === "dark" ? <MdLightMode /> : <BsMoonStarsFill />}
      </button>
    </>
  );
};

export default DarkMode;
