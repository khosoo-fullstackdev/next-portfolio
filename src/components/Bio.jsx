import TwitterI from "./icons/TwitterI";
import LocationI from "./icons/Locationi";
import Greendot from "./icons/Greendot";
import GitI from "./icons/GitI";
import FigmaI from "./icons/FigmaI";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
export default function Bio() {
  const { theme, setTheme } = useTheme();

  changeThemHadler = () => {
    setTheme(theme == "Light" ? "Dark" : "Light");
  };
  return (
    <div className="h-[552px] flex justify-between px-20 py-24">
      <div className=" w-[768px] h-[100%] px-8 self-stretch flex-col justify-center items-start gap-12 inline-flex ">
        <div className="flex flex-col gap-[48px]">
          <div className="self-stretch h-[152px] flex-col justify-center items-start gap-2 inline-flex">
            <p className="text-gray-900 text-6xl font-bold font-Inter leading-[72px]">
              Hi, I’m Sagar 👋
            </p>
            <p className=" text-gray-600 text-base font-normal font-Inter leading-normal">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div>
            <div className="text-gray-600 flex text-base h-6 items-center gap-2 font-normal font-Inter leading-normal">
              <div>
                <LocationI />
              </div>{" "}
              <p>Ahmedabad, India</p>
            </div>
            <div className="text-gray-600 text-base flex h-6 items-center gap-2 font-normal font-Inter leading-normal">
              <div className="w-6 flex items-center justify-center">
                <Greendot />
              </div>
              <p>Available for new projects</p>
            </div>
          </div>
          <div className="flex gap-[4px]">
            <div className="w-6 h-6 relative">
              <GitI />
            </div>
            <div className="w-6 h-6 relative">
              <TwitterI />
            </div>
            <div className="w-6 h-6 relative">
              <FigmaI />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[400px] h-[100%] flex justify-center items-center relative">
        <div className="absolute"></div>
        <Image
          class="absolute w-[280px] h-80 border-8 border-white"
          width={280}
          height={320}
          src="/Pic.png"
          alt=""
        />
      </div>
    </div>
  );
}
