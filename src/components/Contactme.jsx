import Copy from "@/utilities/icons/contact/copy";
import Mail from "@/utilities/icons/contact/mail";
import Phone from "@/utilities/icons/contact/phone";
import GitI from "./icons/GitI";
import FigmaI from "./icons/FigmaI";
import TwitterI from "./icons/TwitterI";
import { useTheme } from "@/context/ThemeContext";
export default function Contactme() {
  const { theme, setTheme } = useTheme();

  changeThemHadler = () => {
    setTheme(theme == "Light" ? "Dark" : "Light");
  };
  return (
    <div class="h-[560px] px-20 py-24 bg-white flex-col justify-center items-center flex gap-12">
      <div class="flex flex-col justify-center items-center gap-4">
        <p class="w-[125px] h-7 px-5 py-1 bg-gray-200 rounded-xl text-gray-600 text-center text-sm font-medium font-Inter leading-tight">
          Get in touch
        </p>
        <p class="w-[576px] text-center text-gray-600 text-xl font-normal font-Inter leading-7">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-5">
          <Mail />
          <p className="text-center text-gray-900 text-4xl font-semibold font-Inter leading-10">
            reachsagarshah@gmail.com
          </p>
          <Copy />
        </div>
        <div className="flex items-center justify-center gap-5">
          <Phone />
          <p className="text-center text-gray-900 text-4xl font-semibold font-Interleading-10">
            +91 8980500565
          </p>
          <Copy />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-gray-600 text-base font-normal font-Inter leading-normal">
          You may also find me on these platforms!
        </p>
        <div className="flex items-center justify-center gap-1">
          <div className="w-9 h-9 p-1.5 rounded-lg justify-center items-center">
            <GitI />
          </div>
          <div className="w-9 h-9 p-1.5 rounded-lg justify-center items-center">
            <TwitterI />
          </div>
          <div className="w-9 h-9 p-1.5 rounded-lg justify-center items-center">
            <FigmaI />
          </div>
        </div>
      </div>
    </div>
  );
}
