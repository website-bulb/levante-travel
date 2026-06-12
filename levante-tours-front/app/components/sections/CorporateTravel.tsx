import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

export default function CorporateTravel() {
  return (
    <section className="relative w-full overflow-hidden py-10 md:py-20">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />
      <div className="relative z-10 flex flex-col gap-6 px-6 md:px-30">
        {/* Title block */}
        <div className="flex flex-col gap-2">
          <p
            className="text-white text-sm font-semibold uppercase tracking-wide"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            For businesses
          </p>
          <h2
            className="text-white font-extrabold leading-none text-[clamp(28px,3.8vw,36px)]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Corporate travel, properly arranged
          </h2>
        </div>

        {/* Body text */}
        <p
          className="text-white font-medium text-base leading-normal max-w-187"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Executive transfers, group movements and event transport handled with a reliable
          pre-booked service.
        </p>

        {/* CTA Button */}
        <Button
          variant="tertiary"
          size="sm"
          className="self-start rounded-full bg-transparent border border-white text-white px-4 h-10 gap-2"
        >
          Corporate services
          <ArrowRight size={14} />
        </Button>
      </div>
    </section>
  );
}
