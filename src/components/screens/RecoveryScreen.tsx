"use client";

import { useState } from "react";
import { Sparkline } from "../Sparkline";

const vitals = {
  bp: {
    label: "Blood pressure",
    value: "118/76",
    unit: "mmHg",
    color: "#3D2170",
    trend: [128, 124, 122, 120, 121, 119, 118],
  },
  hr: {
    label: "Heart rate",
    value: "72",
    unit: "bpm",
    color: "#E6197E",
    trend: [80, 78, 76, 75, 74, 73, 72],
  },
  temp: {
    label: "Temperature",
    value: "36.6",
    unit: "°C",
    color: "#00A99D",
    trend: [37.4, 37.1, 36.9, 36.8, 36.7, 36.6, 36.6],
  },
  spo2: {
    label: "Oxygen level",
    value: "98",
    unit: "%",
    color: "#5A37A0",
    trend: [95, 96, 96, 97, 97, 98, 98],
  },
} as const;

type VitalKey = keyof typeof vitals;

export function RecoveryScreen() {
  const [active, setActive] = useState<VitalKey>("bp");
  const current = vitals[active];

  return (
    <div className="flex flex-col gap-4 px-4 pb-6 pt-2">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] text-foreground/50">Day 4 of recovery</p>
          <p className="text-[15px] font-semibold text-foreground">Your readings</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-brand-teal/10 px-2.5 py-1 text-[10px] font-semibold text-brand-teal">
          Synced &middot; Apple Health
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {(Object.keys(vitals) as VitalKey[]).map((key) => {
          const v = vitals[key];
          const isActive = key === active;
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`rounded-2xl border p-3 text-left transition-colors ${
                isActive
                  ? "border-brand-indigo bg-brand-mist"
                  : "border-brand-line bg-white hover:border-brand-indigo/40"
              }`}
            >
              <p className="text-[10px] font-medium text-foreground/55">{v.label}</p>
              <p className="mt-0.5 text-[16px] font-bold leading-none text-foreground">
                {v.value}
                <span className="ml-1 text-[10px] font-medium text-foreground/45">
                  {v.unit}
                </span>
              </p>
              <div className="mt-1.5">
                <Sparkline data={[...v.trend]} color={v.color} width={100} height={24} />
              </div>
            </button>
          );
        })}
      </div>

      <div className="rounded-2xl border border-brand-line p-4">
        <div className="flex items-center justify-between">
          <p className="text-[12.5px] font-semibold text-foreground">
            {current.label} &middot; 7 days
          </p>
          <span className="text-[11px] font-semibold" style={{ color: current.color }}>
            {current.value} {current.unit}
          </span>
        </div>
        <div className="mt-3">
          <Sparkline data={[...current.trend]} color={current.color} width={260} height={64} />
        </div>
        <div className="mt-1 flex justify-between text-[9.5px] text-foreground/40">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Today</span>
        </div>
      </div>

      <button className="w-full rounded-xl bg-brand-indigo py-2.5 text-[12.5px] font-semibold text-white transition-colors hover:bg-brand-indigo-light">
        Log today&apos;s reading
      </button>
    </div>
  );
}
