import { Icons } from "@/components/icons";
import { site, socialLinks } from "@/config/site";

export function Footer() {
  return (
    <footer>
      <div className="flex justify-between border-b border-l border-r border-primary-border bg-white px-2 py-3 md:py-2">
        <p className="text-xs text-neutral-600">
          Built with love by {site.name}
        </p>
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = Icons[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="text-neutral-600 transition-colors hover:text-gray-900"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
