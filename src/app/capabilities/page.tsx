import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const coreCompetencies = [
  "Federal contract management",
  "Compliance oversight",
  "Claims adjudication review",
  "PBM performance monitoring",
  "Network adequacy oversight",
  "Eligibility & formulary governance",
  "Audit documentation & reporting",
  "Financial reconciliation",
];

const differentiators = [
  "24/7 federal escalation availability",
  "Secure digital audit-ready documentation",
  "API-based interoperability via subcontractors",
  "Vendor risk governance",
  "Federal benefit program experience",
];

const naics = ["524292", "524298", "541611", "541612", "541618"];

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* PAGE INTRO */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center">
            <h1 className="text-4xl font-extrabold text-[#0b3b7a] md:text-5xl">
              Capabilities
            </h1>

            <div className="mx-auto mt-6 h-2 w-84 rounded-full bg-[#0b3b7a]/80 animate-divider" />

            <p className="mx-auto mt-8 max-w-3xl text-lg font-bold leading-relaxed text-slate-800">
              Paragon Federal Strategies Corporation supports federal benefit programs
              with disciplined oversight, governance, and audit-ready operational
              controls—designed to strengthen compliance, accountability, and measurable
              performance.
            </p>
          </div>
        </section>

        {/* CORE COMPETENCIES */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-4xl font-extrabold text-[#0b3b7a] md:text-5xl">
              Core Competencies
            </h2>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {coreCompetencies.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-slate-50 p-8 shadow-[0_18px_60px_rgba(2,6,23,0.08)]"
                >
                  <div className="mb-5 h-1.5 w-12 rounded-full bg-[#0b3b7a]" />
                  <p className="text-lg font-bold text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFFERENTIATORS */}
        <section className="py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl bg-gradient-to-r from-[#0b3b7a] via-[#0a4a92] to-[#0b3b7a] p-10 md:p-14 text-white shadow-[0_20px_70px_rgba(2,6,23,0.18)]">
              <h2 className="text-center text-4xl font-extrabold md:text-5xl">
                Differentiators
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-center text-white/90 text-lg">
                Proven operational discipline and governance built for high-stakes federal
                environments.
              </p>

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {differentiators.map((d) => (
                  <div
                    key={d}
                    className="rounded-2xl bg-white/10 p-6 backdrop-blur border border-white/15"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-white" />
                      <p className="text-lg font-semibold">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NAICS + CERTIFICATIONS */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* NAICS */}
              <div className="rounded-3xl bg-slate-50 p-10 shadow-[0_18px_60px_rgba(2,6,23,0.08)]">
                <h3 className="text-3xl font-extrabold text-[#0b3b7a]">
                  NAICS Codes
                </h3>

                <div className="mt-8 flex flex-wrap gap-3">
                  {naics.map((code) => (
                    <span
                      key={code}
                      className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-800"
                    >
                      {code}
                    </span>
                  ))}
                </div>
              </div>

              {/* CERTIFICATIONS */}
              <div className="rounded-3xl bg-slate-50 p-10 shadow-[0_18px_60px_rgba(2,6,23,0.08)]">
                <h3 className="text-3xl font-extrabold text-[#0b3b7a]">
                  Certifications
                </h3>

                <div className="mt-8 rounded-2xl bg-white p-6 border border-slate-200">
                  <p className="text-lg font-bold text-slate-900">SAM.gov Active</p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
