import TwitterI from "./icons/TwitterI";
import LocationI from "./icons/Locationi";
import Greendot from "./icons/Greendot";
import GitI from "./icons/GitI";
import FigmaI from "./icons/FigmaI";
import Image from "next/image";
export default function Bio() {
  return (
    <div className="px-20 py-24">
      <div className=" w-[768px] h-[100%] self-stretch flex-col justify-center items-start gap-12 inline-flex ">
        <div className="gap-[48px]">
          <div className="h-[152px] flex-col justify-center items-start gap-2 inline-flex">
            <p className="text-gray-900 text-6xl font-bold font-['Inter'] leading-[72px]">
              Hi, I’m Sagar 👋
            </p>
            <p className="text-gray-600 text-base font-normal font-['Inter'] leading-normal">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div>
            <p className="text-gray-600 text-base font-normal font-['Inter'] leading-normal">
              Ahmedabad, India
            </p>
            <p className="text-gray-600 text-base font-normal font-['Inter'] leading-normal">
              Available for new projects
            </p>
          </div>
          <div className="flex gap-[4px]">
            <div className="w-6 h-6 relative"></div>
            <div className="w-6 h-6 relative"></div>
            <div className="w-6 h-6 relative"></div>
          </div>
        </div>
      </div>
      {/* <Image
    class="w-[280px] h-80 relative border-8 border-white"
    width={280}
    height={320}
    src="/icons/sagar.jpg"
    alt=""
    /> */}
    </div>
  );
}
