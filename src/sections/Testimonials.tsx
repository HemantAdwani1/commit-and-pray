import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say after launch"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={(i % 2) * 0.1}>
              <Card className="flex h-full flex-col" hover={false}>
                <Quote className="text-accent/30" size={32} />
                <div className="mt-3 flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-base leading-relaxed text-ink dark:text-slate-200">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={`${t.name} headshot`}
                    loading="lazy"
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink dark:text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted dark:text-muted-dark">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
