import { Experiences } from "@/utilities/experience";
export default function Experience() {
  return (
    <div className="px-20 py-24 bg-gray-50 flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-[16px]">
        <p className="w-[115px] h-7 px-5 py-1 bg-gray-200 rounded-xl justify-center items-center text-gray-600 text-sm font-medium ">
          Experience
        </p>
        <p className="text-center text-gray-600 text-xl font-normal font-['Inter'] leading-7 pb-[48px]">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div className="flex flex-col gap-[48px] bg-gray-600">
        {Experiences.map((exp) => {
          return (
            <div className=" flex gap-[48px] justify-between items-center relative">
              <div className="w-[102px] h-7 left-0 top-0 absolute">
                {exp.logo}
              </div>
              <div className="">
                <div className=" text-gray-900 text-xl font-semibold font-['Inter'] leading-7">
                  {exp.position}
                </div>
                <div className="text-gray-600 text-base font-normal font-['Inter'] leading-normal">
                  {exp.experiences}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
