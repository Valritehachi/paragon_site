
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* ABOUT INTRO */}
      <section className="w-full bg-white from-[#0b3b7a]/35 via-[#0b3b7a]/20 to-transparent py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          
          <h1 className="text-4xl font-extrabold text-[#0b3b7a] md:text-5xl">
            About Us
          </h1>

          {/* divider */}
          <div className="mx-auto mt-6 h-2 w-64 rounded-full bg-[#0b3b7a]/80 animate-divider" />

          <p className="mx-auto mt-6 max-w-3xl text-xl font-bold leading-relaxed text-slate-700">
            Paragon Federal Strategies Corporation provides disciplined oversight,
            compliance governance, and strategic program management for federal
            benefit programs. We help agencies strengthen accountability,
            transparency, and performance while meeting complex regulatory
            requirements.
          </p>

        </div>
      </section>


      {/* MISSION & VISION */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-extrabold text-[#0b3b7a] md:text-5xl">
            Mission & Vision
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-3xl bg-white p-10 shadow-lg text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-[#0b3b7a]">Our Mission</h3>
              <p className="mt-4 text-lg text-slate-600">
                “To deliver strategic guidance in federal complexity with transparency
                and accountability”
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl bg-white p-10 shadow-lg text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-[#0b3b7a]">Our Vision</h3>
              <p className="mt-4 text-lg text-slate-600">
                “To be the trusted federal partner recognized for excellence in
                oversight, compliance, and program integrity.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
        <section className="py-24 bg-slate-50">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-center text-4xl font-extrabold text-[#0b3b7a] md:text-5xl">
                Leadership
                </h2>

                <div className="mt-16 flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-center">
                
                    {/* Photo / Avatar */}
                    <div className="h-72 w-72 rounded-3xl bg-gradient-to-b from-[#0b3b7a] to-[#274d7a] flex items-center justify-center text-white text-7xl shadow-xl">
                        👤
                    </div>

                    {/* Bio */}
                    <div className="max-w-xl text-center text-[#0b3b7a] md:text-left">
                        <h3 className="text-3xl font-bold text-slate-700">
                        Stephanie McKoy,
                        </h3>

                        <p className="mt-1 text-lg font-medium text-slate-700">
                        Executive Director &amp; CEO
                        </p>

                        <p className="mt-6 text-lg leading-relaxed text-slate-600">
                        Over 30 years of experience overseeing federally funded programs,
                        specializing in compliance, program integrity, and contract
                        administration.
                        </p>

                    </div>
                </div>
            </div>
        </section>

      {/* CORE VALUES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-extrabold text-[#0b3b7a] md:text-5xl">
            Our Core Values
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {[
              { icon: "🛡️", title: "Integrity", desc: "Unwavering commitment to ethical practices and transparency." },
              { icon: "📋", title: "Compliance", desc: "Strict adherence to regulations and requirements." },
              { icon: "💡", title: "Transparency", desc: "Clear reporting and open communication with stakeholders." },
              { icon: "⚖️", title: "Accountability", desc: "Ownership of outcomes, performance, and continuous improvement." },
              { icon: "🤝", title: "Service Commitment", desc: "Dedicated partnership focused on mission success and public trust." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-slate-50 p-10 text-center shadow-md"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-4 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
