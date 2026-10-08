import { benefits } from "@/lib/content";

export function BusinessCase() {
  return (
    <section id="business-case" className="border-b border-brand-line/70">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-[12.5px] font-semibold uppercase tracking-wide text-brand-magenta">
              Business case
            </p>
            <h2 className="mt-2 text-[1.9rem] font-bold tracking-tight text-foreground sm:text-[2.2rem]">
              Measured in savings, capacity and experience — not profit
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-foreground/60">
              Every missed appointment, cancelled operation and extra night
              in a bed carries a real cost and delays care for someone else
              on the waiting list. The MVP won&apos;t prove these numbers on
              its own — its job is to show the app works, test it with
              patients and staff, and build the evidence to fund the full
              version.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-brand-line">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-brand-mist">
                  <th className="px-5 py-3.5 text-[11.5px] font-semibold uppercase tracking-wide text-foreground/55">
                    Benefit
                  </th>
                  <th className="hidden px-5 py-3.5 text-[11.5px] font-semibold uppercase tracking-wide text-foreground/55 sm:table-cell">
                    How the app helps
                  </th>
                  <th className="px-5 py-3.5 text-[11.5px] font-semibold uppercase tracking-wide text-foreground/55">
                    How we measure it
                  </th>
                </tr>
              </thead>
              <tbody>
                {benefits.map((b, i) => (
                  <tr
                    key={b.benefit}
                    className={i !== benefits.length - 1 ? "border-b border-brand-line" : ""}
                  >
                    <td className="px-5 py-4 align-top text-[13px] font-semibold text-foreground">
                      {b.benefit}
                    </td>
                    <td className="hidden px-5 py-4 align-top text-[13px] text-foreground/60 sm:table-cell">
                      {b.mechanism}
                    </td>
                    <td className="px-5 py-4 align-top text-[13px] text-brand-indigo">
                      {b.metric}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
