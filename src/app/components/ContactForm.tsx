"use client";

import { useState } from "react";

type Status =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });

      const data = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Message sent! We’ll get back to you shortly.",
      });

      // reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    }
  }

  const disabled = status.type === "sending";

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">
        
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-white p-10 shadow-[0_18px_60px_rgba(2,6,23,0.10)]">
          <form onSubmit={onSubmit} className="space-y-6">
            {/* First/Last row */}
            <div className="grid gap-6 md:grid-cols-2">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="h-16 w-full rounded-xl border-2 border-slate-800/80 px-6 text-xl text-slate-700 placeholder:text-slate-400 focus:border-[#0b3b7a] focus:outline-none"
                disabled={disabled}
                required
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="h-16 w-full rounded-xl border-2 border-slate-800/80 px-6 text-xl text-slate-700 placeholder:text-slate-400 focus:border-[#0b3b7a] focus:outline-none"
                disabled={disabled}
                required
              />
            </div>

            {/* Email */}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              type="email"
              className="h-16 w-full rounded-xl border-2 border-slate-800/80 px-6 text-xl text-slate-700 placeholder:text-slate-400 focus:border-[#0b3b7a] focus:outline-none"
              disabled={disabled}
              required
            />

            {/* Message */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="min-h-[220px] w-full resize-none rounded-xl border-2 border-slate-800/80 px-6 py-5 text-xl text-slate-700 placeholder:text-slate-400 focus:border-[#0b3b7a] focus:outline-none"
              disabled={disabled}
              required
            />

            {/* reCAPTCHA placeholder (UI only) */}
            <div className="rounded-xl border border-slate-300 bg-white p-4">
              <div className="flex items-center gap-4">
                <div className="h-7 w-7 rounded border-2 border-slate-600" />
                <div className="text-lg font-medium text-slate-700">
                  I&apos;m not a robot
                </div>
                <div className="ml-auto text-sm text-slate-400">
                  reCAPTCHA
                </div>
              </div>
            </div>

            {/* Status message */}
            {status.type === "error" && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {status.message}
              </div>
            )}
            {status.type === "success" && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {status.message}
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={disabled}
              className="mt-2 h-16 w-full rounded-xl bg-[#0b3b7a] text-xl font-semibold text-white shadow-md transition hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.type === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
