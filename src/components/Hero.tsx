import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

export function Hero() {
  return (
    <section
      id="home"
      className="w-full border-b border-l border-r border-primary-border bg-white"
    >
      <div className="border-b border-gray-200 bg-dot-pattern">
        <div className="px-4 pt-16 sm:px-6 lg:px-8">
          <div className="pb-16">
            <h1 className="mb-6 font-geologica text-5xl font-medium tracking-[-0.6px]">
              {site.name}
            </h1>

            <p className="mb-10 max-w-[72ch] text-xl font-medium leading-relaxed tracking-[-0.25px] text-gray-600">
              {site.description}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="primary_blue" className="rounded-[8px]">
                <a href="#projects">Start building with me</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-[8px] px-8 text-base font-semibold"
              >
                <a href={site.resumeUrl} download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
