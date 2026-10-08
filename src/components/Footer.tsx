import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <BrandMark size={26} />
              <span className="text-[15px] font-semibold">CW Care</span>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-white/55">
              A concept demo built in response to the Patient Mobile App MVP
              scope of work shared by Chelsea and Westminster Hospital NHS
              Foundation Trust, Oct 2026.
            </p>
          </div>

          <div className="max-w-md rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-[12px] font-semibold uppercase tracking-wide text-brand-teal">
              Important
            </p>
            <p className="mt-2 text-[12.5px] leading-relaxed text-white/60">
              This is a non-functional concept demo for pitch purposes only.
              All names, readings and messages shown are fictional sample
              data. No real patient data is collected, stored or processed
              by this site, and it is not connected to any hospital system.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Demo only — not affiliated with or endorsed by the NHS.</p>
          <p>Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
