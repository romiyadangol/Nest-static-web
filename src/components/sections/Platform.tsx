import Image from "next/image";
import ContactButton from "../ui/Button";

export default function Platform() {
  return (
    <section className="bg-white px-4 sm:px-5 py-10 sm:py-12 md:py-16 text-center">

      {/* Heading */}
      <p
        className="
          mb-10 sm:mb-12
          font-helvetica-display font-medium
          text-xl sm:text-2xl md:text-3xl lg:text-4xl
          leading-tight tracking-[-0.015em]
          text-gray-900 max-w-4xl mx-auto
        "
      >
        <span className="text-google-blue"> सबै </span>Tools एउटै Platform मा <br className="hidden sm:block" />
        <span className="text-google-gradient"> Google Workspace </span>
      </p>

      {/* Feature Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 font-helvetica-display">

        {/* Card */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-3">
            Premium AI built-in
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs">
            Do your best work faster with the Gemini app, NotebookLM, and Gemini
            in Gmail, Docs, Sheets, and more.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-3">
            Tools born in the Cloud
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs">
            Collaborate in real time, from any device, across tools that are
            always up to date.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-3">
            Enterprise-grade security
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs">
            Protect your emails, files, and meetings with AI-powered security
            and compliance controls.
          </p>
        </div>

      </div>

      {/* CTA */}
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
          mx-auto mt-10
          px-5 py-2
          text-sm sm:text-base md:text-lg
          min-w-[150px] sm:min-w-[170px]
          shadow-sm
          flex items-center justify-center gap-1.5 sm:gap-2
        "
      />

      {/* Includes */}
      <p className="mt-12 sm:mt-16 text-base sm:text-lg md:text-xl font-bold text-gray-900 max-w-3xl mx-auto font-helvetica-display">
        Google Workspace includes:
      </p>

      <Image
        src="/platform.png"
        alt="Google Workspace Platform"
        width={1200}
        height={400}
        className="mx-auto mt-6 sm:mt-10 w-full max-w-5xl"
      />
    </section>
  );
}
