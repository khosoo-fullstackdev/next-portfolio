import C from "@/utilities/icons/contact/c";
import { useTheme } from "@/context/ThemeContext";
export default function Footer() {
  const { theme, setTheme } = useTheme();

  changeThemHadler = () => {
    setTheme(theme == "Light" ? "Dark" : "Light");
  };

  return (
    <div class="h-[68px] px-20 py-6 bg-gray-50 flex justify-center items-center gap-2">
      <div class="w-4 h-4"></div>
      <div>
        <C />
      </div>
      <p className="text-gray-600 text-sm font-normal font-Inter leading-tight">
        2023 | <span className="underline">Designed</span> and{" "}
        <span className="underline">coded</span> with ❤️️ by Sagar Shah
      </p>
    </div>
  );
}
