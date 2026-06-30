import { Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, navItems } from "@/config/site";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary-border bg-[#f9fafb]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="group flex items-center gap-2">
              <div className="text-primary-600 transition-transform group-hover:scale-105">
                <Anchor size={32} strokeWidth={2.5} />
              </div>
              <span className="sr-only">{site.name} — Home</span>
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary-600"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 sm:flex">
              <Button
                asChild
                variant="outline"
                className="rounded-[4px] font-medium"
              >
                <a href={site.resumeUrl} target="_blank" rel="noreferrer">
                  View Resume
                </a>
              </Button>
              <Button asChild variant="primary_blue" className="rounded-[4px]">
                <a href="#contact">Let&apos;s Talk</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
