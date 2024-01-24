import { work } from "@/utilities/work";
import Image from "next/image";
export function WorkCard() {
  return (
    <div className="flex flex-col items-center gap-[48px]">
      <div className="flex flex-col gap-[48px]">
        {work.map((a) =>
          a.id == "reverse" ? (
            <div className="flex flex-col sm:flex-row max-w-[1152px] rounded-[12px] shadow-md justify-center">
              <div className="flex p-[48px] flex-col items-center gap-[24px] flex-[1 0 0] self-stretch rounded-[12px 0 0 12px] w-[576px] h-[480px]">
                <div className="flex w-[100%] justify-start items-start">
                  <h2 className="text-[#111827] font-sans text-[20px] not-italic font-semibold leading-7">
                    {a.workTitle}
                  </h2>
                </div>
                <p className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-6">
                  {a.workDescription}
                </p>
                <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                  {a.workSkills.map((skills) => (
                    <button className="flex px-[20px] py-1 justify-center items-center rounded-xl bg-[#E5E7EB] text-[#4B5563] font-sans text-[14px] not-italic font-medium leading-5">
                      {skills}
                    </button>
                  ))}
                </div>
                <div className="flex items-center self-stretch ">
                  {<Image src={a.workIcon} width={24} height={24} />}
                </div>
              </div>
              <div className=" flex p-[48px] justify-center items-center flex-[1 0 0] self-stretch rounded-r-lg border-r-[#F3F4F6] bg-[#F9FAFB] w-[576px] h-[480px]">
                {
                  <Image
                    src={a.image}
                    width={480}
                    height={384}
                    objectFit="cover"
                    style={{
                      borderRadius: "12px",
                      boxShadow:
                        "0px 10px 8px 0px rgba(0, 0, 0, 0.04), 0px 4px 3px 0px rgba(0, 0, 0, 0.10)",
                    }}
                  />
                }
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row max-w-[1152px] rounded-[12px] shadow-md justify-center">
              <div className=" flex p-[48px] justify-center items-center flex-[1 0 0] self-stretch rounded-l-lg border-r-[#F3F4F6] bg-[#F9FAFB] w-[576px] h-[480px]">
                {
                  <Image
                    src={a.image}
                    width={480}
                    height={384}
                    objectFit="cover"
                    style={{
                      borderRadius: "12px",
                      boxShadow:
                        "0px 10px 8px 0px rgba(0, 0, 0, 0.04), 0px 4px 3px 0px rgba(0, 0, 0, 0.10)",
                    }}
                  />
                }
              </div>
              <div className="flex p-[48px] flex-col items-center gap-[24px] flex-[1 0 0] self-stretch rounded-[12px 0 0 12px] w-[576px] h-[480px]">
                <div className="flex w-[100%] justify-start items-start">
                  <h2 className="text-[#111827] font-sans text-[20px] not-italic font-semibold leading-7">
                    {a.workTitle}
                  </h2>
                </div>
                <p className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-6">
                  {a.workDescription}
                </p>
                <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                  {a.workSkills.map((skills) => (
                    <button className="flex px-[20px] py-1 justify-center items-center rounded-xl bg-[#E5E7EB] text-[#4B5563] font-sans text-[14px] not-italic font-medium leading-5">
                      {skills}
                    </button>
                  ))}
                </div>
                <div className="flex items-center self-stretch ">
                  {<Image src={a.workIcon} width={24} height={24} />}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
