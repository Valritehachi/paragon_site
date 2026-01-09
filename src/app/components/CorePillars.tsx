type Pillar = {
  number: string;
  title: string;
  desc: string;
};

const pillars: Pillar[] = [
  {
    number: "1",
    title: "Federal Contract Management & CO Interface",
    desc: "Expert navigation of federal contracting requirements with seamless collaboration and compliance documentation.",
  },
  {
    number: "2",
    title: "PBM Oversight, Claims & Compliance Governance",
    desc: "Comprehensive benefit management oversight ensuring claims accuracy and regulatory alignment.",
  },
  {
    number: "3",
    title: "24/7/365 Federal Escalation Availability",
    desc: "Round-the-clock support for critical needs with immediate escalation protocols.",
  },
];

export default function CorePillars() {
  return (
    <section className="bg-white">
      {/* <div className="mx-auto max-w-6xl px-6 py-20"> */}
      <div className="mx-auto max-w-[1400px] px-6 py-20">
    
        <h2 className="text-center text-4xl font-extrabold text-[#0b3b7a] md:text-5xl">
          Core Pillars
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.number}
              className="relative rounded-3xl bg-white p-10 shadow-[0_18px_60px_rgba(2,6,23,0.12)]"
            >
              {/* left accent */}
              <div className="absolute left-0 top-0 h-full w-2 rounded-l-3xl bg-[#0b3b7a]" />

              {/* number badge */}
              <div className="mb-10">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-[#0b3b7a] text-4xl font-extrabold text-white">
                  {p.number}
                </div>
              </div>

              {/* title */}
              <h3 className="text-3xl font-extrabold leading-tight text-[#0b3b7a]">
                {p.title}
              </h3>

              {/* description */}
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
