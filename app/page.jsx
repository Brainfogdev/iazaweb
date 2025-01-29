import { AccreditationSection } from "@/components/Accreditation";
import { OurClients } from "@/components/OurClient";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <section className="mx-20 my-32">
        <h3 className="text-4xl font-semibold text-center text-blue-600">
          
        </h3>
        <div className="flex w-full my-10">
          <div className="flex-1">
            <h3 className="text-justify">
              <span className="text-blue-600 font-medium">
                Welcome to IAZA,
              </span>{" "}
              IAZA is your trusted partner in accessing top-notch
              pharmaceutical solutions. As a leading exporter globally, our core
              focus is ensuring quality healthcare access for the poor and needy
              communities. We blend innovation and adaptability in our
              operations to meet evolving health care demands worldwide.{" "}
              <p className="mt-5">
                IAZA, founded in 2012 and based in
                Mumbai, India, leads in global pharmaceutical exports. Under the
                helm of Mr. Aamir Farooqui, with over a decade's experience, we
                dedicate ourselves to integrity, affordability, and authenticity
                healthcare. Our aim is to make the procedure as simple as
                possible for our patients and to offer treatment no matter where
                they are — in person or at their convenience.
              </p>
            </h3>
          </div>
          <div className="flex-1 flex justify-end w-full">
            <div className="h-[400px] w-[500px] border">
              <Image
                className="rounded-xl"
                src="/about-amitsir.jpg"
                alt="about"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
};

export default HomePage;
