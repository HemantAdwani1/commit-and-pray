import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PROCESS_STEPS } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="bg-card py-24 dark:bg-card-dark/40 sm:py-32">
      <div className="container-content">
        <SectionHeading
          eyebrow="Process"
          title="Seven steps, the same order, every project"
          description="A predictable process means fewer surprises for you and a tighter timeline for both of us."
        />

        <div className="relative mt-16 max-w-3xl mx-auto">
          <div
            className="absolute left-6 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800 sm:left-8"
            aria-hidden="true"
          />
          <ol className="space-y-10">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={(i % 4) * 0.08} y={16}>
                <li className="relative flex gap-6 sm:gap-8">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-surface font-mono text-sm font-semibold text-accent dark:border-slate-700 dark:bg-surface-dark sm:h-16 sm:w-16 sm:text-base">
                    {step.step}
                  </span>
                  <div className="pt-1.5 sm:pt-3">
                    <h3 className="text-lg font-semibold text-ink dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted dark:text-muted-dark sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
