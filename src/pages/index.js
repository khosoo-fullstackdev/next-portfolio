import Portfolio from "./Portfolio";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme == "Light" ? "Dark" : "Light");
  };

  const rootBg = theme == "bg-white" ? "bg-black" : "bg-white";
  return (
    <div className={`flex ${rootBg}`}>
      <Portfolio />
    </div>
  );
}
