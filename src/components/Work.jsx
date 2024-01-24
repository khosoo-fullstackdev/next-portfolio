import { WorkCard } from "./WorkCard";
import { useTheme } from "@/context/ThemeContext";
export default function Work() {
  const { theme, setTheme } = useTheme();

  changeThemHadler = () => {
    setTheme(theme == "Light" ? "Dark" : "Light");
  };
  return (
    <div className="px-20 py-24 flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-[16px]">
        <p className="w-[75px] h-7 px-5 py-1 bg-gray-200 rounded-xl justify-center text-center ">
          Work
        </p>
        <p className="text-center text-gray-600 text-xl font-normal font-Inter leading-7 pb-[48px]">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <div>
        <WorkCard />
      </div>
    </div>
  );
}
