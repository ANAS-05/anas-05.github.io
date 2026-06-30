import { site } from "@/config/site";

export function About() {
  return (
    <section
      id="about"
      className="w-full border-b border-l border-r border-primary-border bg-white"
    >
      <div className="px-6 py-20 md:px-12 md:py-24">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:gap-24">
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="mb-6 font-sans text-4xl font-medium tracking-tighter text-gray-900 md:text-5xl">
                About Me
              </h2>
              <p className="text-lg font-light leading-relaxed text-gray-500 md:text-xl">
                {site.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
