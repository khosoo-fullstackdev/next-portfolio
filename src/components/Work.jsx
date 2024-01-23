import { work } from "@/utilities/work";
export default function Work() {
  return (
    <div className="px-20 py-24 bg-gray-50 flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-[16px]">
        <p className="w-[115px] h-7 px-5 py-1 bg-gray-200 rounded-xl justify-center items-center text-gray-600 text-sm font-medium ">
          Work
        </p>
        <p className="text-center text-gray-600 text-xl font-normal font-['Inter'] leading-7 pb-[48px]">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <div className="flex flex-col items-center gap-[48px]">
        {work.map((w) => {
          return;
        })}
      </div>
    </div>
  );
}
