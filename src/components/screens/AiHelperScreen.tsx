"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  id: number;
  from: "user" | "ai";
  text: string;
  source?: string;
};

const starter: Message[] = [
  {
    id: 1,
    from: "ai",
    text: "Hi Alex, I'm the CW Care assistant. Ask me about parking, directions, preparing for your visit, or recovering at home.",
  },
];

const suggestions: { label: string; reply: Message }[] = [
  {
    label: "Where do I park for an MRI?",
    reply: {
      id: 0,
      from: "ai",
      text: "Use Car Park B, the closest to the Imaging department — about a 5 minute walk. Charges are £3.20/hr, and Blue Badge holders park free in bays 1–12.",
      source: "Source: Patient Travel & Parking Guide",
    },
  },
  {
    label: "Can I take ibuprofen before surgery?",
    reply: {
      id: 0,
      from: "ai",
      text: "I can't advise on medication before surgery — that needs a clinician. Please contact your care team, or call 111 if it's urgent. You can also check the medicine section of your Surgery Companion checklist.",
      source: "Routed to care team — no clinical advice given",
    },
  },
  {
    label: "What should I bring to my appointment?",
    reply: {
      id: 0,
      from: "ai",
      text: "Bring your referral letter, a list of current medication, and any previous scan results if you have them. Reading glasses or hearing aids too, if you use them.",
      source: "Source: Outpatient Appointment Guidance",
    },
  },
];

export function AiHelperScreen() {
  const [messages, setMessages] = useState<Message[]>(starter);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(2);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function ask(label: string, reply: Message) {
    const userMsg: Message = { id: nextId.current++, from: "user", text: label };
    setMessages((prev) => [...prev, userMsg]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { ...reply, id: nextId.current++ }]);
    }, 700);
  }

  return (
    <div className="flex h-full flex-col px-4 pb-3 pt-2">
      <p className="text-[11px] text-foreground/50">AI helper</p>
      <p className="text-[15px] font-semibold text-foreground">Ask CW Care</p>

      <div ref={scrollRef} className="mt-3 flex-1 space-y-3 overflow-y-auto pr-1">
        {messages.map((m) => (
          <div key={m.id} className={m.from === "user" ? "flex justify-end" : "flex justify-start"}>
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[12px] leading-snug ${
                m.from === "user"
                  ? "rounded-br-sm bg-brand-indigo text-white"
                  : "rounded-bl-sm bg-brand-mist text-foreground"
              }`}
            >
              <p>{m.text}</p>
              {m.source && (
                <p className="mt-1.5 inline-flex items-center rounded-full bg-white/70 px-2 py-0.5 text-[9.5px] font-semibold text-brand-indigo">
                  {m.source}
                </p>
              )}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-brand-mist px-3.5 py-3">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/30 [animation-delay:-0.2s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/30 [animation-delay:-0.1s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/30" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {suggestions.map((s) => (
          <button
            key={s.label}
            onClick={() => ask(s.label, s.reply)}
            disabled={typing}
            className="rounded-full border border-brand-line bg-white px-2.5 py-1.5 text-[10.5px] font-medium text-foreground/70 transition-colors hover:border-brand-indigo hover:text-brand-indigo disabled:opacity-50"
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="mt-2 flex items-center gap-2 rounded-full border border-brand-line px-3 py-2">
        <span className="flex-1 text-[11.5px] text-foreground/35">Type your question…</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-indigo text-white">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}>
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}
