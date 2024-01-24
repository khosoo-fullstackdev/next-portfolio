import ThemeIcon from "@/components/icons/ThemeIcon";
export default function Header() {
  return (
    <div className="flex justify-between items-center bg-white py-[16px] px-[80px] ">
      <div className="h-left ">
        <p
          className={
            "text-center text-gray-900 text-3xl font-bold font-'Inter' leading-9"
          }
        >
          {" "}
          &#60;SS/&#62;
        </p>
      </div>
      <div className="flex items-center gap-[24px] ">
        <p className="text-gray-600 text-base font-medium font-Inter leading-normal">
          About
        </p>
        <p className="text-gray-600 text-base font-medium font-Inter leading-normal">
          Work
        </p>
        <p className="text-gray-600 text-base font-medium font-Inter leading-normal">
          Testimonials
        </p>
        <p className="text-gray-600 text-base font-medium font-Inter leading-normal">
          Contact
        </p>
        <div className="w-6 h-[0px] -rotate-90 border border-gray-100"></div>
        <div className="flex items-center gap-[15px]">
          <button className="w-9 h-9 p-1.5 rounded-lg justify-center items-center inline-flex ">
            <ThemeIcon />
          </button>
          <button className="text-gray-50 font-medium font-Inter leading-normal  w-[136px] h-9 px-4 py-1.5 bg-gray-900 rounded-xl justify-center items-center gap-2 inline-flex">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
