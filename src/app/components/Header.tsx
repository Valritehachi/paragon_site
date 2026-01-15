// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";

// const nav = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about" },
//   { label: "Capabilities", href: "/capabilities" },
//   { label: "Services", href: "/services" },
//   { label: "Contact Us", href: "/contact" },
// ];


// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     // <header className="w-full border-b bg-white">
//     <header className="sticky top-0 z-50 w-full border-b bg-white">

//       <div className="mx-auto flex w-full  items-center justify-between px-4 py-0">

//         {/* LOGO */}
//         <div className="relative h-24 w-[360px] md:h-28 md:w-[460px] lg:h-32 lg:w-[520px]">
//           <Image
//             src="/images/logo_2.png"
//             alt="Paragon Federal Strategies Corporation"
//             fill
//             priority
//             className="object-contain object-left"
//             sizes="(max-width: 768px) 360px, (max-width: 1024px) 460px, 520px"
//           />
//         </div>


//           {/* Desktop nav (pushed right) */}
//           <nav className="hidden items-center gap-10 text-base font-medium text-slate-700 md:flex">
//           {nav.map((item) => (
//               <a
//               key={item.label}
//               href={item.href}
//               className="group relative text-md font-medium text-slate-700 transition-colors duration-200 hover:text-[#0b3b7a]"
//               >
//               <span className="inline-block transition-all duration-200 group-hover:-translate-y-[2px] group-hover:scale-110">
//                 {item.label}
//               </span>

//               <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#0b3b7a] transition-transform duration-200 group-hover:scale-x-100" />
//               </a>
//           ))}
//           </nav>

//           {/* Mobile menu button (right side on mobile) */}
//           <button
//           className="md:hidden rounded-lg border px-3 py-2 text-sm font-medium text-slate-700"
//           onClick={() => setOpen((v) => !v)}
//           aria-expanded={open}
//           aria-label="Toggle menu"
//           >
//           Menu
//           </button>
//         </div>

//       {/* Mobile nav */}
//       {open && (
//         <div className="md:hidden border-t bg-white">
//           <div className="mx-auto max-w-6xl px-6 py-3">
//             <nav className="flex flex-col gap-2 text-sm font-medium">
//               {nav.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50"
//                   onClick={() => setOpen(false)}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

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
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      {/* Stacked layout: logo (centered) then menu (below) */}
      <div className="mx-auto w-full px-4">
        {/* LOGO AREA */}
        <div className="flex justify-center pt-2 pb-6">
          {/* pt-12 ≈ 48px (in the 40–60px range), pb-6 ≈ 24px (in the 20–30px range) */}
          <div className="relative w-[200px] max-w-full">
            <Image
              src="/images/logo_2.png"
              alt="Paragon Federal Strategies Corporation"
              width={700}
              height={220}
              priority
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 92vw, 700px"
            />
          </div>
        </div>

        {/* DESKTOP NAV (below logo) */}

        <nav className="hidden justify-center pb-4 md:flex">
          <div className="flex items-center gap-10 font-medium text-slate-700">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative font-medium text-slate-700 transition-colors duration-200 hover:text-[#0b3b7a]"
              >
                <span className="text-xl inline-block transition-all duration-200 group-hover:-translate-y-[2px] group-hover:scale-110">
                  {item.label}
                </span>

                <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#0b3b7a] transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </div>
        </nav>

        {/* MOBILE MENU BUTTON (below logo) */}
        <div className="flex justify-center pb-4 md:hidden">
          <button
            className="rounded-lg border px-3 py-2 text-sm font-medium text-slate-700"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </div>

      {/* MOBILE NAV (dropdown under header) */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-3">
            <nav className="flex flex-col gap-2 text-2xl font-large">
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
