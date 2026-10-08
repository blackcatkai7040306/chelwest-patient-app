import { problems } from "@/lib/content";
import { iconMap } from "./icons";

export function ProblemStats() {
  return (
    <section className="border-b border-brand-line/70 bg-brand-mist/50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[12.5px] font-semibold uppercase tracking-wide text-brand-magenta">
            Why this matters
          </p>
          <h2 className="mt-2 text-[1.9rem] font-bold tracking-tight text-foreground sm:text-[2.2rem]">
            The hardest parts of hospital care aren&apos;t always the treatment.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground/60">
            Today this information is spread across letters, leaflets, phone
            calls and the website. The NHS App already covers booking,
            letters and records — this app covers the practical, day-to-day
            support it doesn&apos;t.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => {
            const Icon = iconMap[p.icon];
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-brand-line bg-white p-5 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-indigo/10 text-brand-indigo">
                  <Icon width={20} height={20} />
                </div>
                <p className="mt-4 text-[14.5px] font-semibold text-foreground">{p.title}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-foreground/60">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
