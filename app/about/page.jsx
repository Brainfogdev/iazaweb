import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="mx-20 px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-12">About Us</h1>

      {/* Main content section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 mb-16">
        {/* Text content (Left) */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold mb-10">Who We Are</h2>
          <p className="text-lg text-justify">
            IAZA 
            is a professionally managed by young and dynamic Professionals.
            
            We are multinational business conglomerate-having
            subsidiaries and marketing association in various countries and
            offices are in Dubai and Burundi. Our primary range of products include
            variety of Pharmaceutical formulations in addition to our vast range
            of Hospital related products.
          </p>
        </div>

        {/* Image (Right) */}
        <div className="lg:w-1/2">
          <Image
            src="/believes.jpeg"
            alt="Our Team"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Vision and Mission sections */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Vision Section */}
        <section className="md:w-1/2 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg">
            Our vision is to create a world where technology empowers every
            individual and organization to achieve more. We envision a future
            where our innovations bridge gaps, solve complex problems, and open
            new possibilities for people around the globe.
          </p>
        </section>

        {/* Mission Section */}
        <section className="md:w-1/2 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            Our mission is to deliver cutting-edge solutions that transform the
            way people work, communicate, and interact with technology. We are
            committed to fostering a culture of innovation, providing
            exceptional value to our customers, and making a positive impact on
            society through our work.
          </p>
        </section>

        
      </div>
      <section className="">
        <div className="flex flex-col items-center gap-8">
          <h3 className="text-6xl text-blue-600 text-center capitalize mt-10 font-medium">
            Groups of companies
          </h3>
        </div>
        <div className="flex w-full gap-5 justify-between my-10">
          <div className="p-10 rounded-xl bg-blue-200 flex-1">
            <h2 className="text-3xl text-center font-semibold mb-8">
              Iaza Pharma Private Limited
            </h2>
            <div id="details" className="grid grid-cols-2 gap-5">
              <div className="p-2">
                <h3 className="font-medium text-xl">
                  Charitable Organisations
                </h3>
                <p className="text-sm font-medium mt-3">
                  We deliver medical supplies and medicines with quality,
                  affordability, and reliability for healthcare providers.
                </p>
              </div>
              <div className="p-2">
                <h3 className="font-medium text-xl">Packing Materials</h3>
                <p className="text-sm font-medium mt-3">
                  We provide all types of Primary and Secondary packing
                  materials for formulations.
                </p>
              </div>
              <div className="p-2">
                <h3 className="font-medium text-xl">Hospital Supplies</h3>
                <p className="text-sm font-medium mt-3">
                  We provide critical medical supplies, ensuring quality,
                  affordability, and reliability for healthcare providers.
                </p>
              </div>
              <div className="p-2">
                <h3 className="font-medium text-xl">Government Supplies</h3>
                <p className="text-sm font-medium mt-3">
                  We partner with government institutions to deliver quality
                  medicines and supplies, supporting community well-being.
                </p>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-xl">Bulk Pharma Exports</h3>
                <p className="text-sm font-medium mt-3">
                  Our efficient procurement processes and competitive pricing
                  enable us to deliver large-scale shipments to customers around
                  the world,
                </p>
              </div>
            </div>
          </div>
          <div className="p-10 rounded-xl bg-emerald-200 w-[350px]">
            <h2 className="text-3xl font-semibold mb-5">
              Iaza HealthCare Private Limited
            </h2>
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="font-medium text-xl">
                  Third-Party Manufacturing
                </h3>
                <p className="text-sm font-medium mt-3">
                  As a trusted partner, we offer custom manufacturing services
                  to meet the unique needs of our clients.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-xl">
                  Research &amp; Development
                </h3>
                <p className="text-sm font-medium mt-3">
                  We provide facilities for Research and Development facilities
                  and collaborate in development of new medicines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
