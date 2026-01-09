import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import CorePillars from "@/app/components/CorePillars";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <Hero />
        <CorePillars />

        {/* WHY PFSC */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="text-center text-4xl font-extrabold text-[#0b3b7a] md:text-6xl">
              Why PFSC
            </h2>

            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {[
                {
                  title: "Real-time Claims Adjudication Oversight",
                  desc: "Continuous monitoring and validation of claims processing",
                },
                {
                  title: "Comprehensive Eligibility & Formulary Review",
                  desc: "Thorough verification of eligibility and coverage",
                },
                {
                  title: "Compliance and Audit Readiness",
                  desc: "Maintained documentation ensuring federal audit preparedness",
                },
                {
                  title: "Transparent Financial Controls",
                  desc: "Clear oversight of financial operations and reconciliation",
                },
                {
                  title: "Vendor Oversight and Risk Mitigation",
                  desc: "Proactive management of vendor relationships and risk factors",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-slate-50 p-10 shadow-[0_18px_60px_rgba(2,6,23,0.10)]"
                >
                  {/* top accent */}
                  <div className="-mt-10 -mx-10 mb-8 h-1.5 rounded-t-3xl bg-[#0b3b7a]" />

                  <h3 className="text-2xl font-extrabold leading-snug text-[#0b3b7a] md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* CALL TO ACTION */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#0b3b7a] via-[#0a4a92] to-[#0b3b7a] px-10 py-16 text-center text-white shadow-[0_20px_70px_rgba(2,6,23,0.18)]">
            <h2 className="text-4xl font-extrabold md:text-5xl">
              Ready to Partner With Us?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
              Let’s discuss how we can support your federal program management needs.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold text-[#0b3b7a] shadow-sm transition hover:bg-white/90"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

