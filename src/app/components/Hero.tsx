
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

      <div className="relative max-w-7xl px-4 md:px-8 py-10 md:py-12">
        <div className="max-w-none">
          <h1 className="md:text-4xl font-extrabold leading-tight tracking-tight text-white ">
            Trusted Federal Partner for
            <br />
            Compliance, Governance &amp; Oversight
            <br />
            Strategic Program Management
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
            Delivering disciplined oversight, transparent operations, and
            measurable performance across federal benefit programs.
          </p>
        </div>
      </div>
    </section>
  );
}
