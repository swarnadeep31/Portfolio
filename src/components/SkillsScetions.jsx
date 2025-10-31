import { useState } from "react";
import { cn } from "../lib/utils";
const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend
  { name: "MongoDB", category: "backend" },
  { name: "SQL", category: "backend" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "VS Code", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSections = () => {
  const [activeCategory, setSelectedCategory] = useState("all");

  const filteredSkills = skills.filter((skill) =>
    activeCategory === "all" ? true : skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/10">
      <div className="conatiner mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/20 rounded-full overflow-hidden ">
                {/* <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                /> */}
              </div>

              <div className="text-right mt-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
