"use client";

import { useState } from "react";
import { CheckIcon } from "../icons";

const initialChecklist = [
  { id: 1, label: "Stop eating solid food by midnight", done: true },
  { id: 2, label: "Stop blood thinners (5 days prior)", done: true },
  { id: 3, label: "Arrange a ride home", done: true },
  { id: 4, label: "Remove nail polish & jewellery", done: false },
  { id: 5, label: "Wear loose, comfortable clothing", done: false },
  { id: 6, label: "Pack dressing gown & slippers", done: false },
];

const painLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function SurgeryScreen() {
  const [items, setItems] = useState(initialChecklist);
  const [pain, setPain] = useState(3);
  const [photoAdded, setPhotoAdded] = useState(false);

  const done = items.filter((i) => i.done).length;

  function toggle(id: number) {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, done: !i.done } : i))
    );
  }

  return (
    <div className="flex flex-col gap-4 px-4 pb-6 pt-2">
      <div>
        <p className="text-[11px] text-foreground/50">Your procedure</p>
        <p className="text-[15px] font-semibold text-foreground">
          Knee Arthroscopy &middot; Tue 14 Oct
        </p>
      </div>

      <div className="rounded-2xl bg-brand-indigo p-4 text-white">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-white/70">
          Fasting window
        </p>
        <p className="mt-1 text-[20px] font-bold leading-none">14h 20m</p>
        <p className="mt-1 text-[11px] text-white/70">remaining until stop-eating time</p>
      </div>

      <div className="rounded-2xl border border-brand-line p-4">
        <div className="flex items-center justify-between">
          <p className="text-[12.5px] font-semibold text-foreground">Preparation checklist</p>
          <span className="text-[11px] font-medium text-foreground/50">
            {done} of {items.length}
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-brand-line">
          <div
            className="h-full rounded-full bg-brand-teal transition-all duration-300"
            style={{ width: `${(done / items.length) * 100}%` }}
          />
        </div>

        <ul className="mt-3 flex flex-col gap-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => toggle(item.id)}
                className="flex w-full items-center gap-2.5 text-left"
              >
                <span
                  className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md border transition-colors ${
                    item.done
                      ? "border-brand-teal bg-brand-teal text-white"
                      : "border-foreground/25 text-transparent"
                  }`}
                >
                  <CheckIcon width={12} height={12} strokeWidth={3} />
                </span>
                <span
                  className={`text-[12.5px] ${
                    item.done ? "text-foreground/40 line-through" : "text-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-brand-line p-4">
        <p className="text-[12.5px] font-semibold text-foreground">Daily check-in</p>
        <p className="mt-2 text-[11px] text-foreground/55">Pain level today</p>
        <div className="mt-1.5 flex gap-1">
          {painLevels.map((level) => (
            <button
              key={level}
              onClick={() => setPain(level)}
              aria-label={`Pain level ${level}`}
              className={`h-6 flex-1 rounded-md text-[9px] font-semibold transition-colors ${
                level <= pain
                  ? "bg-brand-magenta/80 text-white"
                  : "bg-brand-line text-foreground/40"
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <p className="mt-3 text-[11px] text-foreground/55">Wound photo</p>
        <button
          onClick={() => setPhotoAdded(true)}
          className={`mt-1.5 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed py-3 text-[12px] font-medium transition-colors ${
            photoAdded
              ? "border-brand-teal bg-brand-teal/10 text-brand-teal"
              : "border-foreground/25 text-foreground/55 hover:border-brand-indigo hover:text-brand-indigo"
          }`}
        >
          {photoAdded ? "Photo uploaded — sent to care team" : "Tap to add a wound photo"}
        </button>
      </div>
    </div>
  );
}
