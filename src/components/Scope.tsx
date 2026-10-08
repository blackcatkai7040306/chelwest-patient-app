import { outOfScope, afterMvp, buildOrder } from "@/lib/content";

export function Scope() {
  return (
    <section id="scope" className="border-b border-brand-line/70">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-[12.5px] font-semibold uppercase tracking-wide text-brand-indigo">
          Scope &amp; roadmap
        </p>
        <h2 className="mt-2 max-w-xl text-[1.9rem] font-bold tracking-tight text-foreground sm:text-[2.2rem]">
          Deliberately scoped, clearly sequenced
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-brand-line bg-white p-6">
            <p className="text-[14px] font-semibold text-foreground">Not in the MVP</p>
            <p className="mt-1 text-[12.5px] text-foreground/55">
              Kept out on purpose — the MVP runs on test data only.
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {outOfScope.map((item) => (
                <li key={item} className="flex gap-2.5 text-[13px] leading-relaxed text-foreground/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/25" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-line bg-brand-mist p-6">
            <p className="text-[14px] font-semibold text-foreground">After the MVP</p>
            <p className="mt-1 text-[12.5px] text-foreground/55">
              The phase that follows, once the MVP proves itself with patients and staff.
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {afterMvp.map((item) => (
                <li key={item} className="flex gap-2.5 text-[13px] leading-relaxed text-foreground/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-[14px] font-semibold text-foreground">Suggested build order</p>
          <p className="mt-1 text-[12.5px] text-foreground/55">
            Open to a different order, if there&apos;s a good reason for it.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {buildOrder.map((step, i) => (
              <div key={step.step} className="relative rounded-2xl border border-brand-line bg-white p-5">
                <span className="text-[11px] font-bold text-brand-magenta">{step.step}</span>
                <p className="mt-2 text-[13.5px] font-semibold text-foreground">{step.title}</p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-foreground/60">
                  {step.body}
                </p>
                {i < buildOrder.length - 1 && (
                  <span className="absolute right-[-18px] top-1/2 hidden -translate-y-1/2 text-foreground/20 lg:block">
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
