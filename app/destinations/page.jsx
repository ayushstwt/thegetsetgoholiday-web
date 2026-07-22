import Image from "next/image";
import { destinations } from "../../lib/data";
import DestinationsFilter from "../../components/DestinationsFilter";

export const metadata = {
  title: "Destinations",
  description:
    "Explore international and domestic travel destinations with The Get Set Go Holidays.",
};

export default function DestinationsPage({ searchParams }) {
  const type = searchParams?.type || "all";

  return (
    <>
      <section className="relative flex h-[40vh] min-h-[320px] items-end overflow-hidden">
        <Image
          src="/uploads/2026/04/switzerland.jpg"
          alt="Destinations"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="container-page relative z-10 pb-10 text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Destinations</h1>
          <p className="mt-2 max-w-2xl text-white/90">
            Handpicked places across India and the world, planned with care.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-page">
          <DestinationsFilter destinations={destinations} type={type} />
        </div>
      </section>
    </>
  );
}
