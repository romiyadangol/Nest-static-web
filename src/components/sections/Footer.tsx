import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white">  
      <div className="relative mx-auto max-w-8xl px-6 py-16 md:py-20 lg:py-10">
        <div className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-950 text-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.035]">
            <h2 className="text-[10rem] md:text-[14rem] lg:text-[16rem] font-black tracking-widest text-white/40 whitespace-nowrap">
              NEST NEPAL
            </h2>
          </div>

          <div className="relative z-10 px-8 py-12 md:px-12 md:py-16 lg:px-10 lg:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-24">
              <div className="flex flex-col items-start text-left">
                <Image
                  src="/nest-logo.png"
                  alt="Nest Nepal Logo"
                  width={200}
                  height={200}
                  className="object-contain mb-8 md:mb-12"
                  priority
                />
                <div className="mt-auto">
                  <p className="text-blue-200/90 text-lg md:text-xl f">
                    Google Workspace
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end text-left md:text-left">
                <div className="space-y-3 text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
                  <p >
                    Nepal
                    <br />
                    Kupondole, Lalitpur-1174
                    <br />
                    Call us: +977 986-160-1174
                    <br />
                    <a
                      href="mailto:support@nestnepal.com"
                    >
                      support@nestnepal.com
                    </a>
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-start md:justify-end gap-x-6 md:gap-x-10 lg:gap-x-12 text-base md:text-lg font-medium">
                  <Link
                    href="/why-google-workspace"
                    className="hover:text-white transition-colors hover:underline whitespace-nowrap"
                  >
                    Why Google Workspace?
                  </Link>
                  <Link
                    href="/pricing"
                    className="hover:text-white transition-colors hover:underline whitespace-nowrap"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/get-quotation"
                    className="hover:text-white transition-colors hover:underline whitespace-nowrap"
                  >
                    Get A Quotation 
                    {' '}
                        <span
                        className="
                            inline-block
                            text-base md:text-lg lg:text-xl
                            font-light
                            rotate-[28deg]             
                            translate-y-[-1px]         
                            leading-none
                        "
                        >
                        ↑
                        </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </footer>
  );
}