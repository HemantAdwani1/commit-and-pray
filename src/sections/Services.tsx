import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/content";

export function Services() {
  return (
    <section
      id="services"
      className="bg-card py-24 dark:bg-card-dark/40 sm:py-32"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to launch, from first sketch to production"
          description="Focused engagements, not open-ended retainers — you'll know the scope and outcome before we start."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <Card className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <service.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-muted-dark">
                  {service.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
