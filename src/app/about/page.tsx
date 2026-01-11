
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
              {/* <div className="text-4xl mb-4">🎯</div> */}
              <h3 className="text-2xl font-bold text-[#0b3b7a]">Our Mission</h3>
              <p className="mt-4 text-lg text-slate-600">
                “To deliver strategic guidance in federal complexity with transparency
                and accountability”
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl bg-white p-10 shadow-lg text-center">
              {/* <div className="text-4xl mb-4">⭐</div> */}
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

          <div className="mt-16 flex justify-center">
            {/* Full Blue Gradient Card */}
            <div className="relative max-w-4xl w-full bg-gradient-to-br from-[#0b3b7a] to-[#274d7a] rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
                
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
              
              {/* Decorative pattern */}
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Stephanie McKoy
                </h3>

                <p className="mt-2 text-xl font-medium text-white/90">
                  Executive Director &amp; CEO
                </p>

                <div className="mt-2 mb-6 w-20 h-1 bg-white/40 rounded"></div>

                <p className="text-lg md:text-xl leading-relaxed text-white/95">
                  Over 30 years of experience overseeing federally funded programs,
                  specializing in compliance, program integrity, and contract
                  administration.
                </p>
              </div>
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
