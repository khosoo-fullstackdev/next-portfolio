export default function About() {
  return (
    <div className="flex flex-col gap-12 px-20 py-24 bg-gray-50 justify-between items-center">
      <div className="text-gray-600 text-sm font-medium font-['Inter'] leading-tight">
        About me
      </div>
      <div className=" h-[694px] px-8 flex justify-start items-center gap-12 ">
        <div className="w-[584px] items-start justify-start"></div>
        <div className="w-[584px] gap-[16px]">
          <p>Curious about me? Here you have it:</p>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p>Finally, some quick bits about me.</p>
          <div>
            <p>B.E. in Computer Engineering</p>
            <p>Avid learner</p>
            <p>Full time freelancer</p>
            <p>Aspiring indie hacker</p>
          </div>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
}
