import type { ReactNode } from "react";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-[300px] select-none sm:w-[320px]">
      <div className="phone-shadow relative rounded-[46px] bg-brand-navy p-[10px]">
        <div className="absolute left-1/2 top-[14px] z-20 h-[22px] w-[108px] -translate-x-1/2 rounded-full bg-brand-navy" />
        <div className="relative h-[640px] w-full overflow-hidden rounded-[38px] bg-white">
          {/* status bar */}
          <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[11px] font-semibold text-foreground/80">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none" aria-hidden>
                <rect x="0" y="6" width="3" height="5" rx="0.5" fill="currentColor" />
                <rect x="4.5" y="4" width="3" height="7" rx="0.5" fill="currentColor" />
                <rect x="9" y="1.5" width="3" height="9.5" rx="0.5" fill="currentColor" />
              </svg>
              <svg width="16" height="11" viewBox="0 0 24 16" fill="none" aria-hidden>
                <rect x="1" y="1" width="19" height="10" rx="2.5" stroke="currentColor" />
                <rect x="21.5" y="4" width="2" height="4" rx="1" fill="currentColor" />
                <rect x="2.5" y="2.5" width="16" height="7" rx="1.2" fill="currentColor" />
              </svg>
            </div>
          </div>
          <div className="h-[calc(100%-32px)] overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
