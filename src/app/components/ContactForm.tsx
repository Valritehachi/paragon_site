"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

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
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // ✅ store token from checkbox
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // ✅ block if not checked
    if (!recaptchaToken) {
      setStatus({ type: "error", message: "Please complete the reCAPTCHA." });
      return;
    }

    setStatus({ type: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone, 
          message,
          recaptchaToken, // ✅ send it
        }),
      });

      const data = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !data.ok) {
        // token often expires after a failure; reset it
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);

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
      setPhone("");
      setMessage("");

      // reset captcha too
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } catch {
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);

      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    }
  }

  const disabled = status.type === "sending";

  return (
    <section className="bg-white py-3">
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

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number (optional)"
              type="tel"
              className="h-16 w-full rounded-xl border-2 border-slate-800/80 px-6 text-xl text-slate-700 placeholder:text-slate-400 focus:border-[#0b3b7a] focus:outline-none"
              disabled={disabled}
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

            {/* ✅ REAL reCAPTCHA */}
            {siteKey ? (
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={siteKey}
                  onChange={(token) => setRecaptchaToken(token)}
                  onExpired={() => setRecaptchaToken(null)}
                />
              </div>
            ) : (
              <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY (Vercel env var)
              </div>
            )}

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

