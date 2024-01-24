import Image from "next/image";
export default function About() {
  return (
    <div className="flex flex-col gap-12 px-20 py-24 bg-gray-50 justify-between items-center">
      <div className="text-gray-600 text-sm font-medium font-Inter leading-tight w-[110px] h-7 px-5 py-1 bg-gray-200 rounded-xl justify-center items-center">
        About me
      </div>
      <div className="h-[694px] px-8 flex justify-between items-center gap-12 ">
        <div className="flex h-[100%] items-center w-1/2 relative">
          <div className="left-[40px] top-[40px] absolute bg-gray-200 border-8 border-white"></div>
          <Image
            class="absolute left-0 top-0 border-8 border-gray-200"
            width={400}
            height={480}
            src="/about-me.png"
            alt=""
          />
        </div>
        <div className="flex flex-col h-[100%] w-1/2 gap-[16px]">
          <p className="text-gray-900 text-3xl font-semibold font-Inter leading-9">
            Curious about me? Here you have it:
          </p>
          <p className="text-gray-600 text-base font-normal font-Inter leading-normal">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="text-gray-600 text-base font-normal font-Inter leading-normal">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="text-gray-600 text-base font-normal font-Inter leading-normal">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="text-gray-600 text-base font-normal font-Inter leading-normal">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p className="text-gray-600 text-base font-normal font-Inter leading-normal">
            Finally, some quick bits about me.
          </p>
          <div class="w-[584px] h-[58px] justify-start items-start gap-2.5 inline-flex">
            <div class="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
              <li class="self-stretch text-gray-600 text-base font-normal font-Inter leading-normal">
                B.E. in Computer Engineering
              </li>
              <li class="self-stretch text-gray-600 text-base font-normal font-Inter leading-normal">
                Full time freelancer
              </li>
            </div>
            <div class="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
              <li class="self-stretch text-gray-600 text-base font-normal font-Inter leading-normal">
                Avid learner
              </li>
              <li class="self-stretch text-gray-600 text-base font-normal font-Inter leading-normal">
                Aspiring indie hacker
              </li>
            </div>
          </div>
          <p className="text-gray-600 text-base font-normal font-Inter leading-normal">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
}
