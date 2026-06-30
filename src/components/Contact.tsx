import { Icons } from "@/components/icons";
import { site } from "@/config/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="w-full border-b border-l border-r border-primary-border bg-white"
    >
      <div className="px-6 py-20 md:px-12 md:py-24">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:gap-24">
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="mb-6 font-sans text-4xl font-medium tracking-tighter text-gray-900 md:text-5xl">
                Get in touch
              </h2>
              <p className="text-lg font-light leading-relaxed text-gray-500 md:text-xl">
                Building something special? I&apos;m currently available for
                freelance work and open to discussing new opportunities.
              </p>
            </div>
          </div>

          <div className="flex h-full items-center pl-4">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Email Me
              </span>
              <a
                href={`mailto:${site.email}`}
                className="group flex w-max items-center gap-2 text-2xl font-medium text-gray-900 transition-colors hover:text-blue-600"
              >
                <Icons.gmail className="h-5 w-5" />
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
