import Image from "next/image";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

export default function FutureFlagship() {
  return (
    <section
      className="w-full px-6 py-14 md:px-[clamp(40px,6.7vw,86px)] md:py-25 bg-white"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-16 max-w-[85%] mx-auto md:max-w-none">

        {/* Image */}
        <div className="relative w-full md:w-[35%] md:aspect-auto md:h-72 rounded-4xl overflow-hidden shrink-0">
          <Image
            src="/images/future_flagship_img.png"
            alt="Family trip to Tangier — Moroccan desert landscape"
            fill
            className="object-cover"
            sizes="(max-width: 200px) 100vw, 45vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 flex-1">

          {/* Title block */}
          <div className="flex flex-col gap-2">
            <p
              className="text-[#4089a4] text-sm font-semibold uppercase tracking-wide"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Future flagship
            </p>
            <h2
              className="text-[#0a2749] font-extrabold leading-none text-[clamp(28px,3.5vw,36px)]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Family trip to Tangier
            </h2>
          </div>

          {/* Body text */}
          <p
            className="text-[#0a2749] font-medium text-base leading-normal"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            A future flagship experience designed for families and small groups looking for a
            simple, memorable Morocco day trip from Gibraltar. Cross the Strait and discover
            North Africa — fully pre-booked, expertly arranged.
          </p>

          {/* CTA */}
          <Button
            size="sm"
            className="self-start bg-[#0a2749] text-white rounded-full px-4 h-10 gap-2 font-medium text-sm"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Join waitlist
            <ArrowRight size={14} />
          </Button>
        </div>

      </div>
    </section>
  );
}
