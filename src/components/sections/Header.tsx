import Image from "next/image";
import Timer from "./Timer";
import ContactButton from "../ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24">

        <div className="flex items-center justify-between h-20 sm:h-24 md:h-32">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Nest Nepal Logo"
              width={160}
              height={40}
              priority
              className="sm:w-[180px] md:w-[200px]"
            />
          </div>

          {/* Timer (desktop only) */}
          <div className="hidden md:flex flex-1 justify-center">
            <Timer />
          </div>

          {/* Contact */}
          <div className="flex-shrink-0">
            <ContactButton variant="green" />
          </div>
        </div>

        {/* Mobile Timer */}
        <div className="md:hidden pb-3 flex justify-center">
          <Timer />
        </div>

      </div>
    </header>
  );
}
