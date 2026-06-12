const STATS = [
  { value: "15", label: "Experiences available" },
  { value: "3", label: "Destinations expanding" },
  { value: "4", label: "Transfer services" },
];

export default function WhyGibraltar() {
  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Dark overlay over the fixed hero background for contrast */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 px-6 py-10 md:px-[120px] md:py-10 md:pb-[60px]">
        {/* Title block */}
        <div className="flex flex-col gap-2">
          <p
            className="text-white text-sm font-semibold uppercase tracking-wide"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            WHY GIBRALTAR
          </p>
          <h2
            className="text-white font-extrabold leading-none text-[clamp(28px,3.8vw,36px)]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Travel made simple in Gibraltar
          </h2>
        </div>

        {/* Body text */}
        <p
          className="text-white font-medium text-base leading-normal max-w-[748px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Levante Tours brings together Gibraltar&apos;s top tours, pre-booked transport and local
          experiences in one easy booking platform. Whether you&apos;re a cruise passenger, day
          visitor or long-stay traveller, we have the right format for your visit.
        </p>

        {/* Stats cards */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 sm:w-[200px]"
            >
              <span
                className="text-white font-extrabold leading-none text-[36px] shrink-0"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-white text-xs font-normal leading-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
