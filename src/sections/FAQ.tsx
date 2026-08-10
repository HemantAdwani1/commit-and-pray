import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FAQS } from "@/lib/content";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800">
      <h3>
        <button
          type="button"
          id={`faq-trigger-${id}`}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${id}`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="text-base font-medium text-ink dark:text-white sm:text-lg">
            {question}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
          >
            <Plus size={16} />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${id}`}
            role="region"
            aria-labelledby={`faq-trigger-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 text-sm leading-relaxed text-muted dark:text-muted-dark sm:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading eyebrow="FAQ" title="Common questions" />

        <Reveal className="mx-auto mt-16 max-w-2xl">
          <div>
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                id={String(i)}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
