"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      {status === "success" ? (
        <div className="flex items-center gap-3 px-5 py-4 rounded-xl border border-[#FF6B00]/40 bg-[#FF6B00]/10">
          <svg
            className="w-5 h-5 text-[#FF6B00] shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="text-[#F0EDE6] text-sm font-display">
            You&apos;re on the list. We&apos;ll notify you at launch.
          </p>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="Enter your email address"
            required
            className={`flex-1 px-4 py-3 rounded-xl bg-[#13131A]/80 border text-[#F0EDE6]
                        placeholder:text-[#6B6B80] text-sm outline-none transition-all font-display
                        focus:border-[#FF6B00]/70 focus:ring-1 focus:ring-[#FF6B00]/30
                        ${status === "error" ? "border-red-500/60" : "border-[#2A2A38]"}`}
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-[#FF6B00] hover:bg-[#FF8533] active:bg-[#CC5500]
                       text-[#0B0B0F] font-semibold text-sm tracking-wide transition-all font-display
                       whitespace-nowrap cursor-pointer"
          >
            Notify Me
          </button>
        </div>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs text-red-400 font-display">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
