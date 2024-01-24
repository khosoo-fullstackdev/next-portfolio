import Portfolio from "./Portfolio";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme == "Light" ? "Dark" : "Light");
  };

  return (
    <div className="flex bg-white">
      <Portfolio />
    </div>
  );
}
