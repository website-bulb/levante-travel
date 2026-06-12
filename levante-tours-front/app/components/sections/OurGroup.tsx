"use client";

import { Button } from "@heroui/react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface GroupCard {
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

const GROUP_CARDS: GroupCard[] = [
  {
    title: "Udaya Beach Club",
    description:
      "A beachside hospitality destination for food, drinks and social experiences on the waterfront.",
    ctaLabel: "Visit Udaya",
    href: "#",
  },
  {
    title: "Dolphin Safari",
    description:
      "Boat-based dolphin-watching and marine experiences in the waters of Gibraltar.",
    ctaLabel: "Visit Dolphin safari",
    href: "https://www.dolphinsafari.gi/",
  },
];

interface OurGroupProps {
  className?: string;
}

export default function OurGroup({ className }: OurGroupProps) {
  return (
    <section
      className={cn(
        "w-full bg-transparent px-6 py-10 md:px-30 md:py-20",
        className
      )}
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-6">
        {/* Left: label + heading */}
        <div className="flex flex-col gap-2 md:flex-[0_0_auto] md:max-w-xs">
          <p
            className="text-sm font-semibold uppercase tracking-wide text-white/70"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Our group
          </p>
          <h2
            className="font-extrabold leading-none text-white text-[clamp(28px,3.8vw,36px)]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Explore more from our group
          </h2>
        </div>

        {/* Right: cards */}
        <div className="flex flex-col gap-4 md:flex-row md:flex-1 md:gap-5">
          {GROUP_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-1 flex-col items-center gap-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 px-5 py-6 text-center"
            >
              <div className="flex flex-col gap-1.5 w-full">
                <h3
                  className="font-semibold text-lg text-white"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm text-white/70 leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {card.description}
                </p>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="mt-1 text-white/90 hover:text-white"
                onPress={() => {
                  if (card.href !== "#") window.open(card.href, "_blank", "noopener,noreferrer");
                }}
              >
                {card.ctaLabel}
                <ArrowDown className="size-4 -rotate-90" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
