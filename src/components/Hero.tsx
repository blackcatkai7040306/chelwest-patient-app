import { BrandMark } from "./BrandMark";
import { PhoneFrame } from "./PhoneFrame";
import { WayfindingScreen } from "./screens/WayfindingScreen";

const badges = ["Flutter · iOS & Android", "UK-hosted", "WCAG 2.2 AA", "FHIR-ready"];

export function Hero() {
  return (
    <section id="top" className="diamond-grain relative overflow-hidden border-b border-brand-line/70">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white/70 px-3.5 py-1.5 text-[12px] font-medium text-foreground/60">
            <BrandMark size={16} />
            Concept demo &middot; response to the Patient Mobile App MVP scope
          </div>

          <h1 className="mt-6 text-[2.5rem] font-bold leading-[1.08] tracking-tight text-foreground sm:text-[3.25rem]">
            One app for the whole
            <span className="text-brand-indigo"> patient journey</span> — from
            the car park to recovery at home.
          </h1>

          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-foreground/65">
            CW Care brings wayfinding, surgery preparation, home-recovery
            monitoring and a grounded AI guidance assistant into a single,
            accessible app — built on Flutter and ready to connect to
            hospital systems when Chelsea &amp; Westminster is.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#demo"
              className="rounded-full bg-brand-indigo px-6 py-3 text-[14px] font-semibold text-white shadow-lg shadow-brand-indigo/20 transition-transform hover:-translate-y-0.5 hover:bg-brand-indigo-light"
            >
              Explore the interactive demo
            </a>
            <a
              href="#technical"
              className="rounded-full border border-brand-line bg-white px-6 py-3 text-[14px] font-semibold text-foreground/75 transition-colors hover:border-brand-indigo hover:text-brand-indigo"
            >
              View technical approach
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {badges.map((b) => (
              <span key={b} className="text-[12.5px] font-medium text-foreground/45">
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto">
          <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-brand-teal/10 via-transparent to-brand-magenta/10 blur-2xl" />
          <PhoneFrame>
            <WayfindingScreen />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
