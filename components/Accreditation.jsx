import Image from "next/image";

const logos = [
  { src: "/images/image1.png", alt: "Accreditation 1" },
  { src: "/images/image2.png", alt: "Accreditation 1" },
  { src: "/images/image3.png", alt: "Accreditation 1" },
  { src: "/images/image4.png", alt: "Accreditation 1" },
  { src: "/images/image5.png", alt: "Accreditation 1" },
  { src: "/images/image6.png", alt: "Accreditation 1" },
  { src: "/images/image7.png", alt: "Accreditation 1" },
];

export function AccreditationSection() {
  return (
    <section className="py-16 mx-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Accreditation</h2>
        <div className="flex flex-col gap-5">
          {/* First row with 4 logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center justify-items-center">
            {logos.slice(0, 4).map((logo, index) => (
              <div
                key={index}
                className={`w-52 border rounded-md h-52 flex items-center justify-center ${
                  index === 0 ? "w-60 h-60" : ""
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={index === 0 ? 180 : 100}
                  height={index === 0 ? 180 : 100}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
          {/* Second row with 3 logos */}
          <div className="grid grid-cols-3 items-center justify-items-center">
            {logos.slice(4).map((logo, index) => (
              <div
                key={index}
                className={`w-52 border h-52 flex items-center justify-center ${
                  index === 1 ? "w-60 h-60" : ""
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={index === 1 ? 180 : 150}
                  height={index === 1 ? 180 : 150}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
