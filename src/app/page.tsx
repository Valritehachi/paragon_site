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
              {[{
                title: "Real-time Claims Adjudication Oversight",
                image: "/images/image_1.png",
              },
                {
                  title: "Comprehensive Eligibility & Formulary Review",
                  image: "/images/image_2.png",
                },
                {
                  title: "Compliance and Audit Readiness",
                  image: "/images/image_3.png",
                },
                {
                  title: "Transparent Financial Controls",
                  image: "/images/image_4.png",
                },
                {
                  title: "Vendor Oversight and Risk Mitigation",
                  image: "/images/image_5.png",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-3xl p-10
                  shadow-[0_18px_60px_rgba(2,6,23,0.10)]
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(2,6,23,0.25)]
                  ${item.image ? "text-white min-h-[320px] flex flex-col" : "bg-slate-50"}`}

                >
                  {/* ✅ background image only if provided */}
                  {item.image && (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      {/* ✅ dark overlay like your example */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                    </>
                  )}

                  {/* top accent */}
                  <div
                    className={`relative -mt-10 -mx-10 mb-40 h-1.5 rounded-t-3xl
                    ${item.image ? "bg-white/80" : "bg-[#0b3b7a]"}`}
                  />

                  <h3
                    className={`relative mt-auto text-2xl font-extrabold leading-snug md:text-3xl
                    ${item.image ? "text-white" : "text-[#0b3b7a]"}`}
                  >
                    {item.title}
                  </h3>

                  {/* <p
                    className={`relative mt-6 text-lg leading-relaxed
                    ${item.image ? "text-white/90" : "text-slate-600"}`}
                  >
                    {item.desc}
                  </p> */}
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

