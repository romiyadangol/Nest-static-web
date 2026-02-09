import Image from "next/image";

export default function Solution() {
  return (
    <section className="bg-white px-4 sm:px-5 py-10 sm:py-12 md:py-16 text-center font-helvetica-display">

      {/* Heading */}
      <p className="mb-10 sm:mb-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-[-0.015em] text-gray-900 max-w-4xl mx-auto">
        Solutions for businesses,
        <br className="hidden sm:block" />
        <span className="text-google-blue"> साना देखि ठूला सबैका लागि </span>
        <br />
        <span className="mt-3 block text-sm sm:text-base md:text-lg text-gray-900">
          No matter the size, Google Workspace ले तपाईंको business
          <br className="hidden sm:block" /> को सबै needs पूरा गर्छ
        </span>
      </p>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">

        {/* Card */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/sol1.png"
            alt="For enterprise"
            width={370}
            height={40}
            className="w-[220px] sm:w-[280px] md:w-[340px]"
          />
          <h3 className="mt-4 text-lg sm:text-xl font-medium text-gray-900">
            For enterprise
          </h3>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs">
            Secure collaboration
            <span className="text-google-blue"> tools for enterprise</span> with
            premium AI and enterprise-grade security built in for all the ways
            work is changing.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src="/sol2.png"
            alt="For small business"
            width={370}
            height={40}
            className="w-[220px] sm:w-[280px] md:w-[340px]"
          />
          <h3 className="mt-4 text-lg sm:text-xl font-medium text-gray-900">
            For small business
          </h3>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs">
            Tools for
            <span className="text-google-blue"> small businesses</span> that help
            teams and individuals with everyday tasks like scheduling
            appointments and email marketing.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src="/sol3.png"
            alt="For new business"
            width={370}
            height={40}
            className="w-[220px] sm:w-[280px] md:w-[340px]"
          />
          <h3 className="mt-4 text-lg sm:text-xl font-medium text-gray-900">
            For new business
          </h3>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs">
            Essentials tools for
            <span className="text-google-blue"> new businesses</span> and
            startups, including business email domains, online file sharing and
            storage, and more.
          </p>
        </div>

      </div>
    </section>
  );
}
