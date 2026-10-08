import { technical } from "@/lib/content";

export function Technical() {
  return (
    <section id="technical" className="border-b border-brand-line/70 bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-[12.5px] font-semibold uppercase tracking-wide text-brand-teal">
          Technical approach
        </p>
        <h2 className="mt-2 max-w-xl text-[1.9rem] font-bold tracking-tight sm:text-[2.2rem]">
          Built to NHS standards from day one
        </h2>
        <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-white/60">
          Built with DTAC, DCB0129 clinical safety and UK GDPR in mind.
          Formal assessment against these happens before any real patient
          uses the app, led by the trust&apos;s internal team.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {technical.map((t) => (
            <div key={t.area} className="bg-brand-navy p-5">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-magenta">
                {t.area}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/75">{t.requirement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
