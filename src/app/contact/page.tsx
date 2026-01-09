import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ContactForm from "@/app/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* INTRO */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center">
            <h1 className="text-4xl font-extrabold text-[#0b3b7a] md:text-5xl">
              Contact Us
            </h1>

            <div className="mx-auto mt-6 h-1 w-74 rounded-full bg-[#0b3b7a]/80 animate-divider" />

            <p className="mx-auto mt-8 max-w-3xl text-lg font-bold leading-relaxed text-slate-800">
              For contracting inquiries or partnership requests, please direct all
              correspondence to our corporate office.
            </p>

            <ContactForm />

            {/* Optional CTA */}
            <div className="mt-12">
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-[#0b3b7a] px-8 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0a4a92]"
                >
                  Return Home
                </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
