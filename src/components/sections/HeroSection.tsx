import Image from "next/image";
import ContactButton from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-white px-4 sm:px-5 py-10 sm:py-12 md:py-16 text-center">

      {/* Title */}
      <h1
        className="
          font-helvetica-display font-medium
          text-3xl sm:text-4xl md:text-[52px]
          leading-tight md:leading-none
          tracking-[-0.02em]
          text-google-blue
        "
      >
        Google Workspace
      </h1>

      {/* Workspace icon */}
      <Image
        src="/icon.png"
        alt="Google Workspace Icon"
        width={246}
        height={36}
        className="mx-auto mt-4 sm:mt-5 mb-6 w-[180px] sm:w-[210px] md:w-[246px]"
      />

      {/* Main headline */}
      <p
        className="
          mt-8 sm:mt-10 md:mt-12
          font-helvetica-display font-medium
          text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
          leading-snug
          tracking-[-0.015em]
          text-gray-900
          max-w-5xl mx-auto
        "
      >
        <span className="text-google-blue">किन केही </span>Businesses efficiently
        <span className="text-google-blue"> चल्छन्, र केही </span>daily operations मा struggle
        <span className="text-google-blue"> गर्छन्</span>?
      </p>

      {/* Sub text */}
      <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gray-900 max-w-3xl mx-auto font-helvetica-display">
        Reason luck, ads वा team size होइन. Reason हो right partner with right tools.
      </p>

      {/* Discount ticket */}
      <div className="mt-8 sm:mt-10 inline-block">
        <Image
          src="/discount.png"
          alt="Special Discount Ticket"
          width={250}
          height={80}
          className="w-[200px] sm:w-[230px] md:w-[250px] drop-shadow-md"
          priority
        />
      </div>

      {/* Description */}
      <p className="mt-8 sm:mt-10 text-base sm:text-lg md:text-xl text-gray-900 max-w-3xl mx-auto font-helvetica-display">
        Everything Your Business Needs to Work Smarter. A complete Google
        Workspace setup done right by Nest Nepal.
      </p>

      {/* Buttons */}
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 md:gap-7">

        <ContactButton
          variant="solidPink"
          size="pill"
          text="15 min - Free Demo"
          iconSrc={null}
          className="
            px-5 py-2
            text-sm sm:text-base md:text-lg
            min-w-[150px] sm:min-w-[170px]
            shadow-sm
          "
        />

        <ContactButton
          variant="default"
          size="pill"
          iconSrc={null}
          text={
            <>
              Get a quotation{" "}
              <span
                className="
                  inline-block
                  text-sm sm:text-base md:text-lg
                  font-light
                  rotate-[28deg]
                  translate-y-[-1px]
                  leading-none
                "
              >
                ↑
              </span>
            </>
          }
          className="
            px-5 py-2
            text-sm sm:text-base md:text-lg
            min-w-[150px] sm:min-w-[170px]
            shadow-sm
            flex items-center justify-center gap-1.5 sm:gap-2
          "
        />

      </div>
    </section>
  );
}
