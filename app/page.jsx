import { AccreditationSection } from "@/components/Accreditation";
import { OurClients } from "@/components/OurClient";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <main className="mt-5">
        <h3 className="text-2xl sm:text-4xl font-semibold text-center text-blue-600">
          Chairman's Message
        </h3>
      <section className="sm:mx-20 mx-5 h-full">
        <div className="flex w-full my-10">
          <div className="flex-1 flex items-center flex-col justify-center">
            <h3 className="text-justify sm:w-[60ch]">
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
            <div className="mt-12 text-center">
              <h1 className="text-lg font-medium">Mr. Aamir Farooqui</h1>
              <p>Head Of Legal And Complainence</p>
            </div>
          </div>
          
        </div>
      </section>
      
    </main>
  );
};

export default HomePage;
