import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import bg from "../../../assets/faqbg.png";

const faqData = [
  {
    index: 1,
    question: "Who qualifies to join?",
    answer:
      "CoPT is fast becoming a central resource to find qualified and reputable trainers. Having your profile on The Council of Personal Trainers is a mark of quality that shows you are keeping up with your training and have a passion for Personal Training.",
  },
  {
    index: 2,
    question: "What documentation is required?",
    answer:
      "Intelligent educational assistant, Student-IA is a digital tool that helps students solve problems.",
  },
  {
    index: 3,
    question: "Do you auto-renew?",
    answer:
      "Yes, you can easily edit and personalize the content generated by Student-IA.",
  },
  {
    index: 4,
    question: "Can I cancel?",
    answer:
      "Yes, Student-IA offers a free trial to let you explore its core features.",
  },
  {
    index: 5,
    question: "How do I use course discounts?",
    answer:
      "You can create essays, study notes, summaries, reports, and much more with Student-IA.",
  },
];

export default function FAQSection() {
  return (
    <section
      className=" py-10 md:py-20 overflow-hidden px-4 bg-center bg-cover"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div>
        <h1 className="text-white text-center font-roboto text-2xl md:text-5xl font-bold leading-normal ">
          Frequently Asked Questions
        </h1>
        <p className="text-white text-center mb-10">
          Everything you need to know about CoPT membership
        </p>
      </div>
      <div
        className="relative w-full max-w-3xl mx-auto z-10"
        data-aos="fade-up"
      >
        <Accordion
          type="single"
          collapsible
          defaultValue={`faq-${faqData[0].index}`}
          className="w-full space-y-2"
        >
          {faqData.map((item) => (
            <AccordionItem
              key={`faq-${item.index}`}
              value={`faq-${item.index}`}
              className="border border-[#36393B] rounded-lg bg-gradient-to-br from-[#343333]/30 to-[#343333]/30 backdrop-blur-md"
            >
              <AccordionTrigger className="text-white font-roboto text-[20px] font-semibold leading-normal px-4 py-3 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              {item.answer && (
                <AccordionContent className="text-[#E8E8E8] font-open-sans text-[18px] font-normal leading-normal px-4 pb-4 whitespace-pre-line">
                  <div className="w-[95%] mx-auto border-t border-[#36393B] mb-4" />
                  {item.answer}
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
