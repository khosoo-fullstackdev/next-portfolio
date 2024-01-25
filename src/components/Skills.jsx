import { skills } from "@/utilities/skills";
import { useTheme } from "@/context/ThemeContext";
export default function Skills() {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme == "Light" ? "Dark" : "Light");
  };
  return (
    <div className="flex flex-col px-20 py-24 w-[100%] m-auto justify-center items-center ">
      <div className="flex flex-col justify-center items-center gap-[16px]">
        <p class="text-gray-600 text-sm font-medium  w-[75px] h-7 px-5 py-1 flex bg-gray-200 rounded-xl ">
          Skills
        </p>
        <p className="w-[576px] text-center text-gray-600 text-xl font-normal font-Inter leading-7 pb-[48px]">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="flex flex-wrap m-auto gap-[72px] items-center">
        {skills.map((a) => {
          return (
            <div className="flex w-[88px] h-[100px] flex-col justify-center items-center gap-2">
              {a.image}
              <p className="text-gray-600 text-lg font-normal leading-7">
                {a.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
