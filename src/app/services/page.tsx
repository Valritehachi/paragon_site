import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const serviceGroups = [
  {
    title: "Federal Contract Management & Compliance",
    items: [
      "Contract onboarding",
      "Reporting & documentation",
      "Regulatory alignment",
      "Risk mitigation",
    ],
  },
  {
    title: "PBM Oversight & Program Governance",
    items: [
      "Claims review monitoring",
      "Hard/soft edit compliance",
      "Pharmacy network governance",
    ],
  },
  {
    title: "Escalation & Federal Liaison Support",
    items: [
      "24/7 escalation availability",
      "Coordination with PBM support services",
      "Incident tracking & documentation",
    ],
  },
  {
    title: "Audit Documentation Support",
    items: ["Exportable audit logs", "Secure digital records", "Federal-ready documentation"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* PAGE INTRO */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center">
            <h1 className="text-4xl font-extrabold text-[#0b3b7a] md:text-5xl">
              Services
            </h1>

            {/* <div className="mx-auto mt-6 h-2 w-64 rounded-full bg-[#0b3b7a]/80" /> */}
            <div className="mx-auto mt-6 h-2 w-64 rounded-full bg-[#0b3b7a]/80 animate-divider" />


            <p className="mx-auto mt-8 max-w-3xl text-lg font-bold leading-relaxed text-slate-800">
              Our services are designed to strengthen oversight, ensure compliance, and
              support audit-ready operations across federal benefit programs.
            </p>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-4xl font-extrabold text-[#0b3b7a] md:text-5xl">
              Service Areas
            </h2>

            <div className="mt-14 grid gap-10 md:grid-cols-2">
              {serviceGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-3xl bg-slate-50 p-10 shadow-[0_18px_60px_rgba(2,6,23,0.10)]"
                >
                  {/* top accent bar */}
                  <div className="-mt-10 -mx-10 mb-8 h-1.5 rounded-t-3xl bg-[#0b3b7a]" />

                  <h3 className="text-2xl font-extrabold text-[#0b3b7a] md:text-3xl">
                    {group.title}
                  </h3>

                  <ul className="mt-8 space-y-4 text-slate-800">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0b3b7a]" />
                        <span className="text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* FEDERAL PARTNERS & COMPLIANCE */}
        <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-4xl font-extrabold text-[#0b3b7a] md:text-5xl">
            Federal Partners & Compliance
            </h2>

           
            <div className="mt-16 grid gap-10 lg:grid-cols-3">
            
            {/* Who We Support */}
            <div className="rounded-3xl bg-white p-10 shadow-[0_18px_60px_rgba(2,6,23,0.10)]">
                <h3 className="text-2xl font-extrabold text-[#0b3b7a]">
                Who We Support
                </h3>

                <ul className="mt-6 space-y-4 text-slate-800">
                {["Federal agencies", "PBMs", "Prime contractors"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0b3b7a]" />
                    <span className="text-lg">{item}</span>
                    </li>
                ))}
                </ul>
            </div>

            {/* Compliance Statement */}
            <div className="rounded-3xl bg-white p-10 shadow-[0_18px_60px_rgba(2,6,23,0.10)]">
                <h3 className="text-2xl font-extrabold text-[#0b3b7a]">
                Compliance Statement
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-slate-800">
                PFSC operates in alignment with federal administrative,
                cybersecurity, and regulatory requirements.
                </p>
            </div>

            {/* Secure Data Protocols */}
            <div className="rounded-3xl bg-white p-10 shadow-[0_18px_60px_rgba(2,6,23,0.10)]">
                <h3 className="text-2xl font-extrabold text-[#0b3b7a]">
                Secure Data Protocols
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-slate-800">
                Data is maintained in encrypted, U.S.-based environments
                with NIST-aligned security controls.
                </p>
            </div>
            </div>
        </div>
        </section>

        {/* CTA */}
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
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold text-[#0b3b7a] shadow-sm transition hover:bg-white/90"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
