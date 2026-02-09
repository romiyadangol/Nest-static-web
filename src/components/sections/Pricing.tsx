import Image from "next/image";
import ContactButton from "../ui/Button";

export default function Pricing() {
  const storageItems = [
    { text: "30GB Storage per user", icon: "/drive.png" },
  ];

  const communicateItems = [
    { text: "Secured & Personalized Gmail", icon: "/gmail.png" },
    { text: "Always-on Track with Schedule", icon: "/google calendar.png" },
    { text: "HD Video Calls (100 Users)", icon: "/google meet.png" },
    { text: "Gossip Secretly in your Group", icon: "/google chat.png" },
  ];

  const collaborateItems = [
    { text: "Documents with Google Docs", icon: "/google docs.png" },
    { text: "Data Insights with Google Sheets", icon: "/google sheets.png" },
    { text: "Present with Google Slides", icon: "/google slides.png" },
    { text: "Surveys, To-dos and Many More", icon: "/google surveys.png" },
  ];

  const controlItems = [
    { text: "Basic Security & Admin Controls", icon: "/google admin.png" },
    { text: "Standard Endpoint Management", icon: "/google endpoint.png" },
    { text: "Smart SEARCH with Workspace", icon: "/smart search.png" },
    { text: "Vault for eDiscovery", icon: "/vault.png" },
    { text: "Backup options for Drive and Gmail", icon: "/drive.png" },
  ];

  return (
    <section className="bg-white px-4 sm:px-5 py-10 sm:py-12 md:py-16 text-center">

      {/* Heading */}
      <p
        className="
          font-helvetica-display font-medium
          text-xl sm:text-2xl md:text-3xl lg:text-4xl
          leading-tight tracking-[-0.015em]
          text-gray-900 max-w-4xl mx-auto
        "
      >
        के <span className="text-google-gradient">Google Workspace</span> तपाईंको <br className="hidden sm:block" />
        business growth <span className="text-google-blue">को लागि</span> best fit
        <span className="text-google-blue"> हो</span>?
      </p>

      <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-900 max-w-3xl mx-auto font-helvetica-display">
        Tailored Plans तपाईंको Online Presence को हरेक पहलुलाई <br className="hidden sm:block" />
        Elevate र Empower गर्न।
      </p>

      <Image
        src="/icon.png"
        alt="Google Workspace Icon"
        width={198}
        height={24}
        className="mx-auto mt-6 mb-10 w-[150px] sm:w-[180px]"
      />

      {/* Pricing Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 font-helvetica-display text-left">

        {/* Plan Card */}
        <div className="bg-white p-6 sm:p-8 rounded-xl text-center flex flex-col items-center md:border-r border-gray-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Starter
          </h3>

          <div className="mb-6 pb-6 border-b w-full">
            <div className="flex items-baseline justify-center gap-3">
              <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                ₹ 499
              </span>
              <div className="relative inline-block">
                <span className="text-xl sm:text-2xl text-gray-400">₹ 560</span>
                <span className="absolute left-0 top-1/2 w-full h-[2px] bg-red-500 rotate-[-8deg] -translate-y-1/2" />
              </div>
            </div>

            <p className="mt-2 text-sm text-gray-600">
              per user / month
            </p>
            <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
              1 year commitment
              <span className="text-blue-500 font-bold">ⓘ</span>
            </p>
          </div>

          <ContactButton
            variant="pink"
            iconSrc="/whatsapp-solidpink.png"
          />
        </div>

        {/* Features Column 1 */}
        <div className="bg-white p-6 sm:p-8 rounded-xl">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Storage</h3>
          <ul className="space-y-3 mb-6">
            {storageItems.map((item, index) => (
              <li key={index} className="flex gap-3 text-sm">
                <Image src={item.icon} alt="" width={20} height={20} />
                <span className="text-gray-900">{item.text}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold text-gray-900 mb-3">Communicate</h3>
          <ul className="space-y-3">
            {communicateItems.map((item, index) => (
              <li key={index} className="flex gap-3 text-sm">
                <Image src={item.icon} alt="" width={20} height={20} />
                <span className="text-gray-900">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Features Column 2 */}
        <div className="bg-white p-6 sm:p-8 rounded-xl">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Collaborate</h3>
          <ul className="space-y-3 mb-6">
            {collaborateItems.map((item, index) => (
              <li key={index} className="flex gap-3 text-sm">
                <Image src={item.icon} alt="" width={20} height={20} />
                <span className="text-gray-900">{item.text}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold text-gray-900 mb-3">Control</h3>
          <ul className="space-y-3">
            {controlItems.map((item, index) => (
              <li key={index} className="flex gap-3 text-sm">
                <Image src={item.icon} alt="" width={20} height={20} />
                <span className="text-gray-900">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
