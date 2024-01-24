import { experiences } from "@/utilities/Experience";
import { useTheme } from "@/context/ThemeContext";
export default function Experience() {
  const { theme, setTheme } = useTheme();

  changeThemHadler = () => {
    setTheme(theme == "Light" ? "Dark" : "Light");
  };
  return (
    <div className="px-20 py-24  flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-[16px]">
        <p className="w-[115px] h-7 px-5 py-1 bg-gray-200 rounded-xl justify-center items-center text-gray-600 text-sm font-medium ">
          Experience
        </p>
        <p className="text-center text-gray-600 text-xl font-normal font-Inter leading-7 pb-[48px]">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div className="flex flex-col items-center gap-[48px]">
        {experiences.map((exp) => {
          return (
            <div className=" flex justify-between w-[896px] h-[264px] p-8 rounded-xl shadow">
              <div className="w-[102px] h-7 ">{exp.logo}</div>
              <div className="w-96 text-xl font-semibold items-center font-Inter leading-7">
                <div className=" text-gray-900 text-xl font-semibold font-Inter leading-7">
                  {exp.position}
                </div>
                <li className="w-96 text-gray-600 text-base font-normal font-Inter leading-normal">
                  {exp.experiences}
                </li>
              </div>
              <div>{exp.dates}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
