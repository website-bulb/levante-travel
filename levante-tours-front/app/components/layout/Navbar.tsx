"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Tours & experiences", href: "/tours" },
  { label: "Transfers", href: "/transfers" },
  { label: "Corporate", href: "/corporate" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#0a2749]/95 backdrop-blur-md" : "bg-transparent",
      ].join(" ")}
    >
      {/* ── Header principal ── */}
      <div className="flex items-center justify-between px-[120px] py-3">

        {/* Logo */}
        <Link href="/" aria-label="Levante Tours" className="shrink-0">
          <Image
            src="/images/logo_img_1.png"
            alt="Levante Tours"
            width={164}
            height={57}
            priority
            className="h-[57px] w-auto"
          />
        </Link>

        {/* Tabs pill — desktop */}
        <div className="hidden md:flex items-center gap-0.5 bg-[#fffefa] rounded-[24px] px-2 py-1">
          {NAV_ITEMS.map((item) => {
            const isCurrent = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={[
                  "relative px-3 py-1.5 rounded-[24px] text-sm font-medium whitespace-nowrap transition-all duration-150",
                  "font-[var(--font-poppins)] tracking-[0px] leading-5",
                  isCurrent
                    ? "bg-white text-[#0a2749] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]"
                    : "text-[#0a2749]/60 hover:text-[#0a2749] hover:bg-white/50",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Botón Book & buy — desktop */}
        <Link
          href="/book"
          className="hidden md:flex items-center bg-white/15 backdrop-blur-sm text-white font-[var(--font-poppins)] font-medium text-sm rounded-[32px] pl-5 pr-1.5 h-10 gap-0 hover:bg-white/25 transition-colors shrink-0"
        >
          <span>Book &amp; buy</span>
          <div className="flex items-center justify-center ml-2 size-8 shrink-0">
            <div className="flex items-center justify-center size-8 bg-white rounded-full">
              <HiArrowUpRight className="size-4 text-[#0a2749]" />
            </div>
          </div>
        </Link>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX className="size-6" /> : <HiMenuAlt3 className="size-6" />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a2749] px-6 pb-8 pt-2 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={[
                "text-white text-base font-medium py-3 border-b border-white/10 last:border-0",
                "font-[var(--font-poppins)]",
                pathname === item.href ? "opacity-100" : "opacity-70 hover:opacity-100",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center bg-[#fffefa] text-[#0a2749] font-[var(--font-poppins)] font-medium text-sm rounded-full h-12"
          >
            Book &amp; buy
          </Link>
        </div>
      )}
    </nav>
  );
}
