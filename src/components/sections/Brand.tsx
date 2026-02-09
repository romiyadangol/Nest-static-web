import Image from "next/image";

export default function Brand() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

          <div className="relative flex items-center justify-center lg:justify-start h-72 sm:h-80 md:h-96 lg:h-auto">
            <Image
              src="/product.png"
              alt="Product showcase - unified files"
              width={560}
              height={420}
              className="object-contain max-w-full drop-shadow-xl"
              priority
            />
          </div>

          <div className="space-y-8 md:space-y-9 lg:space-y-10 text-center lg:text-left">
            <div className="relative pl-5 sm:pl-6 md:pl-7">
              <div className="absolute left-0 top-2 bottom-2 w-1.5 md:w-2 bg-gray-300/85 rounded-full" />
              
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-left">
                Your files, all in one place
              </h2>

            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700 text-left">
                Edit and organize{' '}
                <span className="text-blue-600 font-semibold">Google Docs, Sheets, Slides</span>,<br />
                Microsoft Office files, and PDFs in real-time.<br className="hidden sm:inline" />
                Plus, access over 100 other file types!
              </p>
            </div>

            <div className="space-y-6 sm:space-y-7 pt-2 md:pt-4">
              <div className="relative pl-5 sm:pl-6 md:pl-7 flex items-start">
                <div className="absolute left-0 top-1.5 h-6 w-1.5 bg-gray-300/70 rounded-full" />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl text-gray-900">Annotate PDFs</h3>
                </div>
              </div>

              <div className="relative pl-5 sm:pl-6 md:pl-7 flex items-start">
                <div className="absolute left-0 top-1.5 h-6 w-1.5 bg-gray-300/70 rounded-full" />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl text-gray-900">AI-powered search</h3>
                </div>
              </div>

              <div className="relative pl-5 sm:pl-6 md:pl-7 flex items-start">
                <div className="absolute left-0 top-1.5 h-6 w-1.5 bg-gray-300/70 rounded-full" />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl text-gray-900">Activity view</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}