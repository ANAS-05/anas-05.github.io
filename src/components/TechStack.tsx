import type { ElementType } from "react";
import {
  Atom,
  Braces,
  Code2,
  Database,
  FileCode,
  Globe,
  Package,
  Server,
  Wind,
} from "lucide-react";

const technologies = [
  { name: "JavaScript", icon: FileCode, color: "text-yellow-400" },
  { name: "TypeScript", icon: FileCode, color: "text-sky-500" },

  { name: "React.js", icon: Atom, color: "text-cyan-400" },
  { name: "TailwindCSS", icon: Wind, color: "text-teal-400" },

  { name: "C++", icon: Code2, color: "text-blue-700" },
  { name: "C", icon: Code2, color: "text-indigo-600" },

  { name: "HTML", icon: Globe, color: "text-orange-500" },
  { name: "CSS", icon: Braces, color: "text-blue-400" },

  { name: "Python", icon: FileCode, color: "text-amber-400" },
  { name: "Flask", icon: FileCode, color: "text-gray-500" },
  { name: "Django", icon: FileCode, color: "text-emerald-600" },

  { name: "Node.js", icon: Server, color: "text-green-500" },
  { name: "Express", icon: Package, color: "text-stone-400" },

  { name: "PostgreSQL", icon: Database, color: "text-sky-400" },
  { name: "Sqlite", icon: Database, color: "text-violet-400" },

  { name: "AI", icon: Atom, color: "text-rose-500" },
];

export const TechStack = () => {
  // Split into two rows for the bi-directional effect
  const firstRow = technologies.slice(0, 10);
  const secondRow = technologies.slice(10);

  return (
    <section className="w-full border-l border-r border-b border-primary-border py-10 bg-white overflow-hidden flex flex-col justify-center">
      <div className="text-2xl px-4 md:px-6 font-medium font-sans tracking-tighter text-black mb-8 text-left">
        Tools that i have used
      </div>
      <div className="w-full relative bg-white">
        {/* Cool Blue Glow Right */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage: `
        radial-gradient(
          circle at top right,
          rgba(211, 235, 254, 1),
          transparent 70%
        )
      `,
            filter: "blur(80px)",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="w-full  px-4 md:px-6">
          <div className="flex flex-col gap-6">
            {/* First Marquee - Left to Right (Technically looks like R to L due to translate) */}
            <div className="flex w-full overflow-hidden ">
              <div className="flex w-max min-w-full shrink-0 animate-scroll pause gap-4">
                {/* Original Set */}
                {firstRow.map((tech, index) => (
                  <TechItem key={index} {...tech} />
                ))}
                {/* Duplicate Set for Loop */}
                {firstRow.map((tech, index) => (
                  <TechItem key={`dup-${index}`} {...tech} />
                ))}
              </div>
            </div>

            {/* Second Marquee - Reverse Direction */}
            <div className="flex w-full overflow-hidden ">
              <div className="flex w-max min-w-full shrink-0 animate-scroll-reverse pause gap-4">
                {/* Original Set */}
                {secondRow.map((tech, index) => (
                  <TechItem key={index} {...tech} />
                ))}
                {/* Duplicate Set for Loop */}
                {secondRow.map((tech, index) => (
                  <TechItem key={`dup-2-${index}`} {...tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function TechItem({
  icon: Icon,
  name,
  color,
}: {
  icon: ElementType;
  name: string;
  color: string;
}) {
  return (
    <div className="w-32 h-20 bg-white/50 border border-black/5 rounded-lg flex flex-col items-center justify-center gap-2 group shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 transition-all duration-300">
      <Icon className={`w-6 h-6 ${color} transition-colors duration-300`} />
      <span className="text-xs  group-hover:text-accent-foreground transition-colors">
        {name}
      </span>
    </div>
  );
}

