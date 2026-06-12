import Hero from "./components/sections/Hero";
import ToursSection from "./components/sections/ToursSection";
import WhyGibraltar from "./components/sections/WhyGibraltar";
import AirportTransfers from "./components/sections/AirportTransfers";
import CorporateTravel from "./components/sections/CorporateTravel";
import ComingSoon from "./components/sections/ComingSoon";
import FutureFlagship from "./components/sections/FutureFlagship";
import ReadyToBook from "./components/sections/ReadyToBook";
import OurGroup from "./components/sections/OurGroup";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Las secciones siguientes scrollean sobre el fondo fijo del Hero */}
      <div className="relative z-[3]">
        <ToursSection />
        <WhyGibraltar />
        <AirportTransfers />
        <ComingSoon />
        <CorporateTravel />
        <FutureFlagship />
        <OurGroup/>
        <ReadyToBook />
      </div>
    </>
  );
}
