"use client";

import { useEffect, useState } from "react";

const LAUNCH_DATE = new Date("2026-09-01T00:00:00Z");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Segment({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div
        className="relative w-[72px] h-[72px] md:w-24 md:h-24 flex items-center justify-center rounded-2xl
                      border border-[#FF6B00]/20 bg-[#13131A]/90 backdrop-blur-sm overflow-hidden
                      shadow-[0_0_20px_rgba(255,107,0,0.08),inset_0_1px_0_rgba(255,255,255,0.04)]"
      >
        {/* Inner glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.05)_0%,transparent_70%)]" />
        <span
          className="relative font-mono text-[28px] md:text-[38px] font-bold text-[#FF6B00] tabular-nums font-display
                      drop-shadow-[0_0_8px_rgba(255,107,0,0.55)]"
          aria-label={`${value} ${label}`}
        >
          {display}
        </span>
        <div className="absolute inset-x-0 top-1/2 h-px bg-[#FF6B00]/8" />
      </div>
      <span className="text-[9px] tracking-[0.22em] uppercase text-[#6B6B80] font-medium font-display">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <Segment value={timeLeft.days} label="Days" />
      <div className="text-[#FF6B00]/30 text-2xl font-mono pb-6 font-display select-none">:</div>
      <Segment value={timeLeft.hours} label="Hours" />
      <div className="text-[#FF6B00]/30 text-2xl font-mono pb-6 font-display select-none">:</div>
      <Segment value={timeLeft.minutes} label="Mins" />
      <div className="text-[#FF6B00]/30 text-2xl font-mono pb-6 font-display select-none">:</div>
      <Segment value={timeLeft.seconds} label="Secs" />
    </div>
  );
}
