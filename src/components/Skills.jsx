import { skills } from "@/utilities/skills";
export default function Skills() {
  return (
    <div className="px-20 py-24 bg-white flex-col justify-center items-center">
      <div>
        <p></p>
        <p></p>
      </div>
      {skills.map((a) => {
        return (
          <div>
            {a.image}
            <p> {a.name}</p>
          </div>
        );
      })}
      <div></div>
    </div>
  );
}
