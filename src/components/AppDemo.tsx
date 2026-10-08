"use client";

import { useState } from "react";
import { PhoneFrame } from "./PhoneFrame";
import { WayfindingScreen } from "./screens/WayfindingScreen";
import { SurgeryScreen } from "./screens/SurgeryScreen";
import { RecoveryScreen } from "./screens/RecoveryScreen";
import { AiHelperScreen } from "./screens/AiHelperScreen";

const tabs = [
  {
    id: "wayfinding",
    label: "Visit & wayfinding",
    tagline: "Arriving, on time, without the stress",
    body:
      "Step-by-step directions to the right clinic, appointment details, travel and parking info, and a reminder before the day.",
    Screen: WayfindingScreen,
  },
  {
    id: "surgery",
    label: "Surgery companion",
    tagline: "Everything needed before the operating list",
    body:
      "A personal checklist, fasting and medicine reminders, and a daily post-op check-in with wound photo upload for the care team.",
    Screen: SurgeryScreen,
  },
  {
    id: "recovery",
    label: "Home recovery",
    tagline: "Visibility once the patient goes home",
    body:
      "Blood pressure, heart rate, temperature and oxygen readings — logged manually or synced automatically from Apple Health and Health Connect.",
    Screen: RecoveryScreen,
  },
  {
    id: "ai",
    label: "AI helper",
    tagline: "Instant answers, grounded in hospital guidance",
    body:
      "Patients ask in plain language and get answers sourced only from approved content. Medical questions are always routed to the care team.",
    Screen: AiHelperScreen,
  },
] as const;

export function AppDemo() {
  const [activeId, setActiveId] = useState<(typeof tabs)[number]["id"]>("wayfinding");
  const active = tabs.find((t) => t.id === activeId)!;
  const Screen = active.Screen;

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
      <div className="order-2 lg:order-1">
        <div className="flex flex-col gap-2">
          {tabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
                className={`group rounded-2xl border px-5 py-4 text-left transition-all ${
                  isActive
                    ? "border-brand-indigo bg-brand-mist shadow-sm"
                    : "border-brand-line bg-white hover:border-brand-indigo/35"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[13px] font-semibold ${
                      isActive ? "text-brand-indigo" : "text-foreground/70"
                    }`}
                  >
                    {tab.label}
                  </span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      isActive ? "bg-brand-magenta" : "bg-transparent"
                    }`}
                  />
                </div>
                {isActive && (
                  <div className="animate-fade-up mt-2">
                    <p className="text-[13px] font-medium text-foreground">{tab.tagline}</p>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-foreground/60">
                      {tab.body}
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <div key={activeId} className="animate-fade-up">
          <PhoneFrame>
            <Screen />
          </PhoneFrame>
        </div>
      </div>
    </div>
  );
}
