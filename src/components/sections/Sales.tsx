import Image from "next/image";
import ContactButton from "../ui/Button";

export default function Sales() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-32 lg:py-10">
      <div className="bg-gray-100 rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 p-8 lg:p-12">

          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <Image
              src="/salesicon.png"
              alt="Sales"
              width={290}
              height={40}
              className="mb-6 mx-auto lg:mx-0"
            />

            <h1 className="text-lg lg:text-3xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl mx-auto lg:mx-0 font-helvetica-display">
              Prefer to talk to sales directly?
            </h1>

            <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              तपाईंको company को unique requirements अनुसार <br /> तयार गरिएको solution सँग efficiency र collaboration <br /> maximize गर्नुहोस्।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <ContactButton variant="pink" iconSrc="/whatsapp-solidpink.png" text="Message on WhatsApp" />

              <div className="w-full h-px sm:h-full sm:w-px bg-gray-900 opacity-40" />

              <p className="text-sm sm:text-base font-medium">
                Call: +977 9864333307
              </p>
            </div>
          </div>

          {/* Desktop Image Section */}
          <div className="hidden lg:flex flex-1 items-center justify-end relative h-96 w-full pr-8 lg:pr-16">
            <div className="absolute inset-0 flex items-center justify-end">
              <div className="absolute w-48 h-48 md:w-56 md:h-56 bg-blue-400 rounded-full opacity-60 blur-xl" style={{ right: '5%', top: '40%' }}></div>
              <div className="absolute w-40 h-40 md:w-48 md:h-48 bg-orange-400 rounded-full opacity-50 blur-lg" style={{ right: '15%', bottom: '10%' }}></div>
            </div>

            <div className="relative z-10">
              <Image
                src="/girl.png"
                alt="Sales representative"
                width={620}
                height={520}
                className="w-140 h-auto max-w-none"
                priority
              />
            </div>
          </div>

          {/* Mobile Image Section */}
          <div className="lg:hidden w-full px-4 pt-8">
            <div className="relative w-full h-64">
              <div className="absolute inset-0">
                <div className="absolute w-24 h-24 bg-blue-400 rounded-full opacity-80 shadow-lg" style={{ right: '10%', top: '50%', transform: 'translateY(-50%)' }}></div>
                <div className="absolute w-20 h-20 bg-orange-400 rounded-full opacity-70 shadow-lg" style={{ right: '0%', bottom: '10px' }}></div>
                <div className="absolute w-16 h-16 bg-green-400 rounded-full opacity-60 shadow-lg" style={{ right: '30%', bottom: '20px' }}></div>
                <div className="absolute w-12 h-12 bg-yellow-300 rounded-full opacity-50 shadow-lg" style={{ right: '20%', top: '10px' }}></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-end pr-4 z-10">
                <Image
                  src="/girl.png"
                  alt="Sales representative"
                  width={680}
                  height={520}
                  className="object-contain w-140 h-70 max-w-none"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
