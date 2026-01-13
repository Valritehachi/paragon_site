"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-12 py-6 md:py-8">
        {/* LOGO */}
        <div className="relative h-32 w-64 md:h-40 md:w-80">
          <Image
            src="/images/logo.png"
            alt="Paragon Federal Strategies Corporation"
            fill
            priority
            className="object-contain object-left-top"
            sizes="(max-width: 768px) 256px, 320px"
          />
        </div>

          {/* Desktop nav (pushed right) */}
          <nav className="hidden items-center gap-10 text-base font-medium text-slate-700 md:flex">
          {nav.map((item) => (
              <a
              key={item.label}
              href={item.href}
              className="group relative text-md font-medium text-slate-700 transition-colors duration-200 hover:text-[#0b3b7a]"
              >
              <span className="inline-block transition-all duration-200 group-hover:-translate-y-[2px] group-hover:scale-110">
                {item.label}
              </span>

              <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#0b3b7a] transition-transform duration-200 group-hover:scale-x-100" />
              </a>
          ))}
          </nav>

          {/* Mobile menu button (right side on mobile) */}
          <button
          className="md:hidden rounded-lg border px-3 py-2 text-sm font-medium text-slate-700"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          >
          Menu
          </button>
        </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-3">
            <nav className="flex flex-col gap-2 text-sm font-medium">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
