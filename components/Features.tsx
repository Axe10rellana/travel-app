//next
import Image from "next/image";

//constants
import { FEATURES } from "../constants";

//components
import { FeatureItem } from "./";

const Features = () => {
  return (
    <section
      id="services"
      className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24"
    >
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            className="pointer-events-none feature-phone"
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              className="pointer-events-none absolute left-[-5px] top-[-32px] lg:top-[-36px] w-10 lg:w-[50px]"
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
