import { BrandMark } from "./BrandMark";

const links = [
  { href: "#demo", label: "Interactive demo" },
  { href: "#business-case", label: "Business case" },
  { href: "#technical", label: "Technical approach" },
  { href: "#scope", label: "Scope & roadmap" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-line/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3.5 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <BrandMark size={28} />
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight text-foreground">
              CW Care
            </span>
            <span className="text-[11px] text-foreground/50">
              Concept demo for Chelsea &amp; Westminster
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-foreground/65 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#demo"
          className="rounded-full bg-brand-indigo px-4 py-2 text-[13px] font-semibold text-white shadow-sm shadow-brand-indigo/20 transition-transform hover:-translate-y-0.5 hover:bg-brand-indigo-light"
        >
          View the demo
        </a>
      </div>
    </header>
  );
}
