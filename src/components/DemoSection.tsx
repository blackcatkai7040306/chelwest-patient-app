import { AppDemo } from "./AppDemo";

export function DemoSection() {
  return (
    <section id="demo" className="border-b border-brand-line/70">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12.5px] font-semibold uppercase tracking-wide text-brand-teal">
            Interactive demo
          </p>
          <h2 className="mt-2 text-[1.9rem] font-bold tracking-tight text-foreground sm:text-[2.2rem]">
            Four moments of care, one app
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground/60">
            Click through the tabs — every screen below responds, from
            checking off a surgery checklist to asking the AI helper a
            question.
          </p>
        </div>

        <div className="mt-14">
          <AppDemo />
        </div>
      </div>
    </section>
  );
}
