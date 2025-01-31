import Image from "next/image";

const clients = [
  { name: "TechCorp", logo: "/client-1.png" },
  { name: "GreenEnergy", logo: "/client-2.png" },
  { name: "BuildRight", logo: "/client-3.jpeg" },
];

export function OurClients() {
  return (
    <section id="clients" className="py-16 mx-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-blue-600 font-bold text-center mb-12">
          Our Trusted Clients
        </h2>
        <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-8">
          <div className="flex flex-col hover:bg-slate-100 items-center p-4 bg-white rounded-lg  transition-all duration-300">
            <div className="relative w-44 h-44 mb-4">
              <Image
                src={"/client-1.png"}
                alt={`client-1.png logo`}
                fill
                sizes="(max-width: 96px) 100vw, 96px"
                className="object-contain"
              />
            </div>
            <p className="text-center text-gray-700 font-medium">Life Pharma</p>
          </div>
          <div className="flex flex-col hover:bg-slate-100 items-center p-4 bg-white rounded-lg  transition-all duration-300">
            <div className="relative w-44 h-44 mb-4">
              <Image
                src={"/client-2.png"}
                alt={`client-2.png logo`}
                fill
                sizes="(max-width: 96px) 100vw, 96px"
                className="object-contain"
              />
            </div>
            <p className="text-center text-gray-700 font-medium">Siphar S.P.R.L</p>
          </div>
          <div className="flex flex-col hover:bg-slate-100 items-center p-4 bg-white rounded-lg  transition-all duration-300">
            <div className="relative w-36 h-36 mb-4">
              <Image
                src={"/client-3.jpeg"}
                alt={`/client-3.png logo`}
                fill
                sizes="(max-width: 96px) 100vw, 96px"
                className="object-contain"
              />
            </div>
            <p className="text-center text-gray-700 font-medium">Afrobiz Fze</p>
          </div>
        </div>
      </div>
    </section>
  );
}
