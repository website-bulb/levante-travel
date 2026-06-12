"use client";

import { Button, Card } from "@heroui/react";

const COMING_SOON_DESTINATIONS = [
  {
    id: "spain",
    image: "/images/coming_soon_img_1.png",
    title: "Spain",
    description: "Private transport and day tour across southern Spain.",
  },
  {
    id: "morocco",
    image: "/images/coming_soon_img_2.png",
    title: "Morocco",
    description:
      "Cross-border tours and family-friendly day trips, including Tangier, launching soon.",
  },
];

export default function ComingSoon() {
  return (
    <section className="w-full bg-[#fffefa] px-6 pb-12 md:px-[clamp(40px,6.7vw,86px)] md:pb-12">
      {/* Section header */}

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-[85%] mx-auto">
        {COMING_SOON_DESTINATIONS.map((dest) => (
          <Card
            key={dest.id}
            className="relative h-[337px] overflow-hidden rounded-[24px] border-none p-4 flex flex-col justify-between"
          >
            {/* Background image */}
            <img
              src={dest.image}
              alt={dest.title}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            />

            {/* COMING SOON badge */}
            <div className="relative z-10">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-[#fffefa] text-xs font-bold uppercase tracking-wide"
                style={{
                  fontFamily: "var(--font-inter)",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                COMING SOON
              </span>
            </div>

            {/* Progressive blur overlay at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[140px] rounded-b-[24px]"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,39,73,0.72) 0%, rgba(10,39,73,0.3) 60%, transparent 100%)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                maskImage:
                  "linear-gradient(to top, black 0%, black 50%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, black 0%, black 50%, transparent 100%)",
              }}
            />

            {/* Footer: title + description + button */}
            <div className="relative z-10 flex items-end justify-between gap-4">
              <div className="flex flex-col gap-1 flex-1 min-w-0 pr-2">
                <p
                  className="text-[#fffefa] text-xl font-medium leading-tight"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {dest.title}
                </p>
                <p
                  className="text-[#fffefa] text-xs font-normal leading-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {dest.description}
                </p>
              </div>
              <Button
                className="shrink-0 bg-[#fffefa] text-[#0a2749] text-sm font-medium rounded-full px-4 h-9 min-w-fit"
                size="sm"
              >
                Register interest
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
