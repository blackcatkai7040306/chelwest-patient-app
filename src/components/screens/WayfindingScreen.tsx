"use client";

import { useState } from "react";
import { BrandMark } from "../BrandMark";

export function WayfindingScreen() {
  const [showRoute, setShowRoute] = useState(false);
  const [remind, setRemind] = useState(true);

  return (
    <div className="flex flex-col gap-4 px-4 pb-6 pt-2">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] text-foreground/50">Good morning</p>
          <p className="text-[15px] font-semibold text-foreground">Alex Morgan</p>
        </div>
        <BrandMark size={24} />
      </div>

      <div className="rounded-2xl border border-brand-line bg-brand-mist p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-indigo">
          Today, 2:30 PM
        </p>
        <p className="mt-1 text-[14px] font-semibold text-foreground">
          Cardiology Outpatients
        </p>
        <p className="text-[12px] text-foreground/60">Lift Wing &middot; Level 3 &middot; Room 3.12</p>
        <p className="mt-2 text-[11px] text-foreground/55">
          Bring: referral letter, current medication list
        </p>

        <button
          onClick={() => setShowRoute((v) => !v)}
          className="mt-3 w-full rounded-xl bg-brand-indigo py-2 text-[12.5px] font-semibold text-white transition-colors hover:bg-brand-indigo-light"
        >
          {showRoute ? "Hide directions" : "Get directions"}
        </button>
      </div>

      <div className="relative h-36 overflow-hidden rounded-2xl border border-brand-line bg-white">
        <svg viewBox="0 0 280 150" className="h-full w-full">
          <rect width="280" height="150" fill="#F4F3FA" />
          <rect x="18" y="16" width="70" height="40" rx="4" fill="#E6E3F1" />
          <rect x="18" y="66" width="70" height="68" rx="4" fill="#E6E3F1" />
          <rect x="192" y="16" width="70" height="118" rx="4" fill="#E6E3F1" />
          <text x="24" y="30" fontSize="9" fill="#3D2170" fontWeight={600}>
            Car Park B
          </text>
          <text x="198" y="30" fontSize="9" fill="#3D2170" fontWeight={600}>
            Lift Wing
          </text>
          <circle cx="40" cy="46" r="4" fill="#00A99D" />
          <circle cx="226" cy="46" r="5" fill="#E6197E" />
          {showRoute && (
            <path
              d="M40 46 L40 100 L140 100 L140 50 L226 50 L226 46"
              fill="none"
              stroke="#3D2170"
              strokeWidth={3}
              strokeDasharray="6 5"
              strokeLinecap="round"
              className="animate-fade-up"
            />
          )}
        </svg>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-brand-line px-4 py-3">
        <div>
          <p className="text-[12.5px] font-medium text-foreground">Car Park B</p>
          <p className="text-[11px] text-foreground/55">10 min walk &middot; £3.20/hr</p>
        </div>
        <span className="rounded-full bg-brand-teal/10 px-2.5 py-1 text-[10.5px] font-semibold text-brand-teal">
          Available
        </span>
      </div>

      <label className="flex items-center justify-between rounded-2xl border border-brand-line px-4 py-3">
        <span className="text-[12.5px] text-foreground">Notify me 45 min before</span>
        <button
          role="switch"
          aria-checked={remind}
          onClick={() => setRemind((v) => !v)}
          className={`relative h-6 w-11 rounded-full transition-colors ${
            remind ? "bg-brand-teal" : "bg-foreground/20"
          }`}
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
              remind ? "translate-x-5" : "translate-x-0.5"
            }`}
          />
        </button>
      </label>
    </div>
  );
}
