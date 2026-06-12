"use client";

import React, { useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import { DiagonalCarousel, type DiagonalCarouselItem } from "@/components/ui/diagonal-carousel";

const TOUR_CATEGORIES = [
  { key: "rock", label: "Rock tours" },
  { key: "marine", label: "Marine & sea" },
  { key: "combo", label: "Combo tours" },
];

const TOURS_BY_CATEGORY: Record<string, DiagonalCarouselItem[]> = {
  rock: [
    { src: "/images/dest_img_1.png", title: "The rock tour", alt: "Rock of Gibraltar jeep tour" },
    { src: "/images/dest_img_2.png", title: "Summit hike", alt: "Gibraltar summit hiking tour" },
    { src: "/images/dest_img_3.png", title: "History walk", alt: "Gibraltar history walking tour" },
  ],
  marine: [
    { src: "/images/dest_img_2.png", title: "Dolphin watching", alt: "Dolphin watching tour" },
    { src: "/images/dest_img_3.png", title: "Boat cruise", alt: "Gibraltar boat cruise" },
    { src: "/images/dest_img_1.png", title: "Kayak adventure", alt: "Gibraltar kayak tour" },
  ],
  combo: [
    { src: "/images/dest_img_3.png", title: "Rock & sea", alt: "Rock and sea combo tour" },
    { src: "/images/dest_img_1.png", title: "Full day tour", alt: "Gibraltar full day tour" },
    { src: "/images/dest_img_2.png", title: "Best of Gib", alt: "Best of Gibraltar tour" },
  ],
};

export default function ToursSection() {
  const [activeCategory, setActiveCategory] = useState("rock");

  const items = TOURS_BY_CATEGORY[activeCategory] ?? [];

  return (
    <section className="w-full bg-[#fffefa] z-30" style={{ overflowX: "clip" }}>
      {/* Mobile: stack vertical — texto arriba, carousel abajo */}
      {/* Desktop: flex row — texto izquierda, carousel derecha */}
      <div className="flex flex-col h-200 md:flex-row md:items-center gap-0 md:min-h-195">

        {/* ── Columna izquierda — Título + Tabs ── */}
        <div className="flex flex-col gap-6 px-6 pt-12 pb-4 md:px-[clamp(40px,6.7vw,86px)] md:py-[clamp(40px,10vh,120px)] md:flex-[1_0_0] md:min-w-0">
          {/* Eyebrow + Title */}
          <div className="flex flex-col gap-2">
            <p
              className="text-[#4089a4] text-sm font-semibold uppercase tracking-wide"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              ALL GIBRALTAR TOURS
            </p>
            <h2
              className="text-[#0a2749] text-[clamp(28px,3.5vw,40px)] font-extrabold leading-none"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Our Gibraltar tours
            </h2>
          </div>

          {/* Tabs — HeroUI */}
          <Tabs
            selectedKey={activeCategory}
            onSelectionChange={(key) => setActiveCategory(key as string)}
            aria-label="Tour categories"
            classNames={{
              tabList: "bg-[#e5f3f9] rounded-full p-1 gap-0 border-none shadow-none",
              tab: "rounded-full px-4 py-2 text-sm font-medium text-[#71717a] data-[selected=true]:text-[#0a2749] whitespace-nowrap",
              cursor: "bg-white rounded-full shadow-[0px_2px_8px_rgba(0,0,0,0.06)]",
            }}
          >
            {TOUR_CATEGORIES.map((cat) => (
              <Tab key={cat.key} title={cat.label} />
            ))}
          </Tabs>
        </div>

        {/* ── Columna derecha — Diagonal Carousel ── */}
        <div className="relative flex-[1_0_0] min-w-0 h-110 -mt-36 md:mt-0 md:h-[780px] pt-4 md:pt-24">
          <DiagonalCarousel
            key={activeCategory}
            items={items}
            defaultActiveIndex={1}
            loop
            slideSize={260}
            rotationStep={20}
            verticalStep={120}
            inactiveScale={0.62}
            showControls={false}
            labelClassName="text-[#0a2749] font-medium text-2xl"
            imageClassName="rounded-2xl shadow-[0px_14px_28px_rgba(0,0,0,0.12),0px_2px_8px_rgba(0,0,0,0.06)]"
            className="h-full overflow-visible"
            viewportClassName="overflow-visible"
          />
        </div>

      </div>
    </section>
  );
}
