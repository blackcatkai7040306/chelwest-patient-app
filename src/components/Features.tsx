import { acrossTheApp } from "@/lib/content";
import { iconMap } from "./icons";

export function Features() {
  return (
    <section className="border-b border-brand-line/70 bg-brand-mist/50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="text-[12.5px] font-semibold uppercase tracking-wide text-brand-indigo">
          Across the whole app
        </p>
        <h2 className="mt-2 max-w-xl text-[1.9rem] font-bold tracking-tight text-foreground sm:text-[2.2rem]">
          Foundations that hold up to NHS standards
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {acrossTheApp.map((f) => {
            const Icon = iconMap[f.icon];
            return (
              <div key={f.title} className="rounded-2xl border border-brand-line bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                  <Icon width={20} height={20} />
                </div>
                <p className="mt-4 text-[14.5px] font-semibold text-foreground">{f.title}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-foreground/60">{f.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
