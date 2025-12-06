import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  //eliminar el level
  { name: "HTML/CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "C#", category: "Backend" },
  { name: "Mysql", category: "Backend" },
  { name: "SqlServer", category: "Backend" },
  { name: "Python", category: "Backend" },
  

  // Tools
  { name: "Git/GitHub", category: "Herramientas" },
  { name: "Microsoft 365", category: "Herramientas" },
  { name: "Figma", category: "Herramientas" },
  { name: "Trello", category: "Herramientas" },
];

const categories = ["Todo", "Frontend", "Backend", "Herramientas"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todo");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "Todo" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Habilidades<span className="text-primary"> Tech</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
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
              <div className="text-center mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};