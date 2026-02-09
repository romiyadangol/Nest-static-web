import Image from "next/image";

export default function Testimonals() {
  return (
    <section className="bg-white px-4 sm:px-5 py-8 sm:py-10 md:py-14 text-center">

      {/* Video Preview */}
      <div className="max-w-6xl mx-auto relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-200">
        <Image
          src="/video.png"
          alt="Google Workspace demo preview"
          width={1280}
          height={720}
          className="w-full aspect-video object-cover"
          priority
        />

        {/* Play Overlay */}
        <button
          className="
            absolute inset-0
            flex items-center justify-center
            bg-black/20 hover:bg-black/40
            transition-colors duration-300
            group
          "
        >
          <div
            className="
              bg-white/90
              p-4 sm:p-5 md:p-6
              rounded-full
              shadow-2xl
              transform group-hover:scale-110
              transition-transform duration-300
            "
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-google-blue"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      </div>

      {/* Caption */}
      <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-900">
        Get a Free 30-Min Demo – See Our AI-Powered Solutions
      </p>

      {/* Trust Text */}
      <p className="mt-10 sm:mt-14 md:mt-20 text-base sm:text-lg md:text-xl text-gray-900 max-w-3xl mx-auto font-helvetica-display">
        Trusted by 1,000+ Nepali businesses on their <br className="hidden sm:block" />
        growth journey.
        <span className="text-google-blue"> अब तपाईंको team तयार छ?</span>
      </p>

      {/* Testimonials Image */}
      <Image
        src="/testimonal.png"
        alt="Customer Testimonials"
        width={1200}
        height={400}
        className="mx-auto mt-8 sm:mt-10 w-full max-w-5xl"
      />
    </section>
  );
}
