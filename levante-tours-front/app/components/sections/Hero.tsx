"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FlipFadeText } from "@/components/ui/flip-fade-text";
import { Button } from "@heroui/react";
import { ArrowUpRight } from "lucide-react";

const FLIP_WORDS = ["Discover", "Explore", "Enjoy", "Uncover"];

const ANIMATED_WORD_WIDTH = "clamp(340px, 63vw, 800px)";

const DESTINATION_CARDS = [
  {
    id: "gibraltar",
    label: "LIVE NOW",
    title: "Gibraltar",
    description: "Tours, experiences and transfers available to book.",
    image: "/images/dest_img_1.png",
  },
  {
    id: "spain",
    label: "COMING SOON",
    title: "Spain",
    description: "Tours, experiences and transport options across southern Spain launching soon.",
    image: "/images/dest_img_2.png",
  },
  {
    id: "morocco",
    label: "COMING SOON",
    title: "Morocco",
    description: "Cross-border tours and family-friendly travel experiences launching soon.",
    image: "/images/dest_img_3.png",
  },
];

export default function Hero() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen">
      {/* ── CAPA 1 — Fondo fijo, z-index: 0 ── */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/hero_img_1.png"
          alt="Gibraltar hero background"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,39,73,0.6)] via-transparent to-transparent" />
      </div>

      {/* ── CAPA 2 — Texto mobile: columna / desktop: fila ── */}

      {/* MOBILE headline */}
      <div
        className="md:hidden absolute pointer-events-none select-none flex flex-col"
        style={{ left: "20px", top: "clamp(90px, 18vh, 160px)", zIndex: 1 }}
      >
        <FlipFadeText
          words={FLIP_WORDS}
          interval={3000}
          letterDuration={0.5}
          staggerDelay={0.06}
          exitStaggerDelay={0.04}
          className="min-h-0 min-w-0 items-start justify-start"
          textClassName="text-white !font-extrabold !leading-none tracking-tight !text-[52px] justify-start"
        />
        <span
          className="text-white font-extrabold leading-none tracking-tight"
          style={{ fontFamily: "var(--font-poppins)", fontSize: "52px", letterSpacing: "2px" }}
        >
          Gibraltar
        </span>
      </div>

      {/* DESKTOP headline */}
      <div
        className="hidden md:flex absolute pointer-events-none select-none items-baseline gap-5"
        style={{ left: "clamp(0px, 4.8vw, 61px)", top: "clamp(160px, 30vh, 240px)", zIndex: 1 }}
      >
        <div style={{ width: ANIMATED_WORD_WIDTH, flexShrink: 0 }}>
          <FlipFadeText
            words={FLIP_WORDS}
            interval={3000}
            letterDuration={0.5}
            staggerDelay={0.06}
            exitStaggerDelay={0.04}
            className="min-h-0 min-w-0 items-start justify-end pr-30"
            textClassName="text-white !font-extrabold !leading-none tracking-tight !text-[clamp(48px,7.8vw,100px)] justify-end"
          />
        </div>
        <span
          className="text-white font-extrabold leading-none tracking-tight whitespace-nowrap"
          style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(48px, 7.8vw, 100px)", letterSpacing: "4px" }}
        >
          Gibraltar
        </span>
      </div>

      {/* ── CAPA 3 — Peñón PNG, z-index: 2 — ENCIMA del texto ── */}
      <div
        className="fixed pointer-events-none select-none"
        style={{ inset: 0, zIndex: 2, left: "-20px" }}
      >
        <Image
          src="/images/hero_img_2.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          aria-hidden
        />
      </div>

      {/* ── Hero section — UI encima de todo ── */}
      <section style={{ position: "relative", zIndex: 10, minHeight: "100vh" }}>
        <div className="flex flex-col justify-end min-h-screen pb-10 md:pb-10">

          {/* ── MOBILE: card debajo del titulo ── */}
          <div className="md:hidden absolute left-0 right-0 px-4 mt-20" style={{ top: "clamp(250px, 42vh, 550px)" }}>

            {/* Card descripción + CTAs — mobile */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4">
              <p className="text-white text-xs leading-4 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
                Book guided tours, private transfers and memorable local experiences.
                Gibraltar live now — Spain and Morocco coming soon.
              </p>
              <div className="flex gap-2">
                <Button
                  onPress={() => router.push("/book")}
                  className="bg-white text-[#0a2749] font-semibold rounded-full px-4 h-10 text-sm hover:bg-white/90 gap-1"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Book &amp; buy
                  <ArrowUpRight className="!size-3.5" />
                </Button>
                <Button
                  onPress={() => router.push("/tours")}
                  className="bg-white/25 text-white font-semibold rounded-full px-4 h-10 text-sm hover:bg-white/35 border border-white/30"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Explore Gibraltar
                </Button>
              </div>
            </div>
          </div>

          {/* ── DESKTOP: layout original ── */}
          <div className="hidden md:flex items-end justify-between px-[clamp(16px,6.7vw,86px)]">

            {/* Card descripción + CTAs */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 max-w-[320px] md:max-w-[340px]">
              <p className="text-white text-sm leading-5 mb-5" style={{ fontFamily: "var(--font-inter)" }}>
                Book guided tours, private transfers and memorable local experiences.
                Gibraltar live now — Spain and Morocco coming soon.
              </p>
              <div className="flex gap-3">
                <Button
                  onPress={() => router.push("/book")}
                  className="bg-white text-[#0a2749] font-semibold rounded-full px-5 h-11 hover:bg-white/90 gap-1.5"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Book &amp; buy
                  <ArrowUpRight className="!size-4" />
                </Button>
                <Button
                  onPress={() => router.push("/tours")}
                  className="bg-white/25 text-white font-semibold rounded-full px-5 h-11 hover:bg-white/35 border border-white/30"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Explore Gibraltar
                </Button>
              </div>
            </div>

            {/* Cards destinos — desktop */}
            <div className="flex gap-4 lg:gap-6 -mb-40 z-50">
              {DESTINATION_CARDS.map((card) => (
                <div
                  key={card.id}
                  className="relative w-[180px] h-[220px] lg:w-[220px] lg:h-[253px] rounded-3xl overflow-hidden flex flex-col p-4 cursor-pointer"
                  onClick={() => card.label === "LIVE NOW" && router.push(`/destinations/${card.id}`)}
                >
                  <div className="absolute inset-0">
                    <Image src={card.image} alt={card.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <div className="relative z-10 flex flex-col flex-1">
                    <span className="text-white text-[10px] font-medium leading-4" style={{ fontFamily: "var(--font-inter)" }}>
                      {card.label}
                    </span>
                    <span className="text-white font-medium text-2xl leading-tight mt-0.5" style={{ fontFamily: "var(--font-poppins)" }}>
                      {card.title}
                    </span>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[40%] rounded-b-3xl"
                    style={{
                      background: "linear-gradient(to top, rgba(6,6,7,0.5) 0%, transparent 100%)",
                      backdropFilter: "blur(5px)",
                      WebkitBackdropFilter: "blur(5px)",
                      maskImage: "linear-gradient(to top, black 50%, transparent 100%)",
                      WebkitMaskImage: "linear-gradient(to top, black 50%, transparent 100%)",
                    }}
                  />
                  <div className="relative z-10">
                    <p className="text-white text-xs font-medium leading-4" style={{ fontFamily: "var(--font-inter)" }}>
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
