import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is Google Workspace compatible with my current email client?',
  },
  {
    question: 'Can I transfer my current Google Workspace account to Nest Nepal?',
  },
  {
    question: 'Are there any fees for transferring a domain to Nest Nepal?',
  },
  {
    question: 'Are there any hidden charges for Nest Nepal Customers?',
  },
  {
    question: 'What all does Gsuite productivity suite include?',
  },
]

interface FAQItemProps {
  question: string
}

function FAQItem({ question }: FAQItemProps) {
  return (
    <div className="rounded-lg overflow-hidden">
      {/* Top underline */}
      <div className="w-11/12 mx-auto h-[1.5px] bg-gray-300 rounded" />

      <button className="w-full px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <span className="text-left font-medium text-gray-900 text-sm sm:text-base">
          {question}
        </span>

        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
      </button>

    </div>
  )
}


export default function Faq() {
  return (
    <section className="py-10 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl text-gray-900 font-medium mb-10">
          Frequently Asked Questions
          <span className="text-google-blue"> (FAQs)</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} />
          ))}
        </div>
      </div>
    </section>
  )
}
