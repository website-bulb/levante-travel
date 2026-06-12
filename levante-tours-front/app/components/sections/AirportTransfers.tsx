import { Briefcase, Car, Clock } from "lucide-react";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SERVICES: ServiceCard[] = [
  {
    icon: <Briefcase size={16} />,
    title: "Airport runs",
    description:
      "Reliable pre-booked transfers to and from Gibraltar Airport for individuals and groups.",
  },
  {
    icon: <Car size={16} />,
    title: "Hotel transfers",
    description:
      "Convenient pickup and drop-off between Gibraltar's hotels and key points.",
  },
  {
    icon: <Car size={16} />,
    title: "General transfers",
    description:
      "Point-to-point journeys across Gibraltar for any occasion or destination.",
  },
  {
    icon: <Clock size={16} />,
    title: "Private hire",
    description:
      "Flexible 7-seater private driver service for families, groups and custom itineraries.",
  },
];

export default function AirportTransfers() {
  return (
    <section className="w-full bg-[#fffefa] py-20">
      <div className="flex flex-col gap-6 px-6 py-10 md:px-30 md:pt-10">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p
              className="text-[#4089a4] text-sm font-semibold uppercase tracking-wide"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Pre-booked transport
            </p>
            <h2
              className="text-[#0a2749] text-[clamp(28px,3.5vw,36px)] font-extrabold leading-none"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Airport transfers &amp; private hire
            </h2>
          </div>
          <p
            className="text-[#0a2749] font-medium text-base leading-normal"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Pre-booked transport for airport runs, hotel pickups, private journeys and group
            movements across Gibraltar.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex gap-[10px] items-center px-4 py-2 rounded-[8px] transition-[background-color,box-shadow] duration-200 md:cursor-pointer md:hover:bg-white md:hover:shadow-[0px_14px_14px_rgba(0,0,0,0.08),0px_-6px_6px_rgba(0,0,0,0.03),0px_2px_4px_rgba(0,0,0,0.06)]"
            >
              {/* Icon container */}
              <div className="shrink-0 bg-[rgba(84,173,204,0.12)] p-[10px] rounded-[6px] text-[#4089a4]">
                {service.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 py-2 px-2 min-w-0">
                <p
                  className="text-[#0a2749] text-xl font-medium leading-5"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {service.title}
                </p>
                <p
                  className="text-[#71717a] text-xs font-normal leading-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
