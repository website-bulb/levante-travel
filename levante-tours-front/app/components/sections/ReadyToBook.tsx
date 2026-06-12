"use client";

import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

export default function ReadyToBook() {
  const router = useRouter();

  return (
    <section className="relative w-full bg-white px-6 py-14 md:px-[clamp(40px,6.7vw,86px)] md:py-[60px]">
      <div className="absolute inset-0 bg-[#4089A4]/7 pointer-events-none" />
      <div className="flex flex-col items-center gap-6 text-center">

        {/* Title */}
        <h2
          className="text-[#0a2749] font-extrabold leading-none text-[clamp(28px,3.5vw,36px)]"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Ready to book?
        </h2>

        {/* Subtitle */}
        <p
          className="text-[#0a2749] font-medium text-base leading-normal max-w-sm md:max-w-md"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Choose your experience, pick your date and book instantly online.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            onPress={() => router.push("/book")}
            className="bg-[#0a2749] text-white font-medium rounded-full px-5 h-10 gap-2 text-sm"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Book &amp; buy
            <ArrowRight size={14} />
          </Button>
          <Button
            onPress={() => router.push("/contact")}
            className="bg-white text-[#0a2749] font-medium rounded-full px-5 h-10 text-sm"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Contact us
          </Button>
        </div>

      </div>
    </section>
  );
}
