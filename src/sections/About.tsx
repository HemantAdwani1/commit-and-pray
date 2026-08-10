import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCountUp } from "@/hooks/useCountUp";

const STATS = [
  { label: "Years of experience", value: 6, suffix: "+" },
  { label: "Projects shipped", value: 10, suffix: "+" },
  { label: "Client satisfaction", value: 98, suffix: "%" },
  { label: "Avg. Lighthouse score", value: 95, suffix: "+" },
];

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div>
      <p className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
        <span ref={ref}>{animated}</span>
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted dark:text-muted-dark">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading
          eyebrow="About"
          title="Six years of turning briefs into websites people trust"
          align="center"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-muted dark:text-muted-dark">
              <p>
                I'm a freelance website designer and frontend developer
                working with founders and small teams who need a site that
                looks considered and performs well — not just one that
                exists. My background spans agency work and independent
                client projects across finance, e-commerce, and healthcare.
              </p>
              <p>
                My approach stays close to two ideas: clarity earns trust,
                and speed is a design decision, not an afterthought. Every
                project starts with the content and the user's task, and
                the visual language follows from there — never the other
                way around.
              </p>
              <p>
                Outside of client work, I contribute to a couple of small
                open-source UI libraries and spend an unreasonable amount of
                time tweaking type scales.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-8 rounded-2xl border border-slate-200/70 bg-card p-8 dark:border-slate-800 dark:bg-card-dark sm:gap-10 sm:p-10">
              {STATS.map((stat) => (
                <Stat key={stat.label} {...stat} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
