import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b3b7a] via-[#0a4a92] to-[#0b3b7a]" />

      {/* diagonals */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute -left-40 top-0 h-[120%] w-[55%] -skew-x-12 bg-white/10" />
        <div className="absolute left-[35%] top-0 h-[120%] w-[20%] -skew-x-12 bg-black/10" />
      </div>

      <div className="relative max-w-7xl px-4 md:px-30 py-15 md:py-18">
        <div className="max-w-none">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Trusted Federal Partner for
            <br />
            Compliance, Governance &amp; Oversight
            <br />
            Strategic Program Management
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            Delivering disciplined oversight, transparent operations, and
            measurable performance across federal benefit programs.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0b3b7a] shadow-sm hover:bg-white/90 transition"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

