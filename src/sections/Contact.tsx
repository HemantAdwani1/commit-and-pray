import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/content";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import {
  contactFormSchema,
  PROJECT_TYPES,
  BUDGET_RANGES,
  TIMELINES,
  type ContactFormValues,
} from "@/lib/schema";
import {
  sanitizeText,
  getSubmissionCooldownRemaining,
  markSubmissionTimestamp,
} from "@/lib/utils";
import type { SubmissionState } from "@/types";

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus-visible:outline-none dark:border-slate-700 dark:bg-surface-dark dark:text-white";

const labelClasses = "mb-1.5 block text-sm font-medium text-ink dark:text-white";
const errorClasses = "mt-1.5 text-xs text-red-500";

export function Contact() {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
      terms: false,
      website: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setErrorMessage("");

    // Honeypot: bots fill every field, including hidden ones.
    if (values.website) {
      setStatus("success"); // fail silently and pretend success to the bot
      reset();
      return;
    }

    const cooldown = getSubmissionCooldownRemaining();
    if (cooldown > 0) {
      setStatus("error");
      setErrorMessage(
        `Please wait ${Math.ceil(cooldown / 1000)}s before sending another message.`
      );
      return;
    }

    if (!isSupabaseConfigured || !supabase) {
      setStatus("error");
      setErrorMessage(
        "The contact form isn't connected yet. Please email me directly instead."
      );
      return;
    }

    setStatus("submitting");

    const { error } = await supabase.from("contact_requests").insert({
      name: sanitizeText(values.name),
      email: values.email.trim().toLowerCase(),
      phone: values.phone ? sanitizeText(values.phone) : null,
      company: values.company ? sanitizeText(values.company) : null,
      project_type: values.projectType,
      budget: values.budget,
      timeline: values.timeline,
      message: sanitizeText(values.message),
      status: "new",
    });

    if (error) {
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your message. Please try again or email me directly."
      );
      return;
    }

    markSubmissionTimestamp();
    setStatus("success");
    reset();
  }

  return (
    <section id="contact" className="bg-card py-24 dark:bg-card-dark/40 sm:py-32">
      <div className="container-content">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something worth launching"
          description="Tell me about your project and I'll reply within one business day."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink dark:text-white">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm text-muted transition-colors hover:text-accent dark:text-muted-dark"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink dark:text-white">
                    Location
                  </p>
                  <p className="text-sm text-muted dark:text-muted-dark">
                    {SITE.location}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-2xl border border-slate-200/70 bg-surface p-6 shadow-soft dark:border-slate-800 dark:bg-surface-dark sm:p-8"
            >
              {/* Honeypot field — hidden from sighted users and screen readers */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("website")}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Full name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    className={inputClasses}
                    placeholder="Ankit Singhania"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                  {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={inputClasses}
                    placeholder="ankitsinghania@gmail.com"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className={inputClasses}
                    placeholder="+917879******"
                    aria-invalid={!!errors.phone}
                    {...register("phone")}
                  />
                  {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
                </div>

                <div>
                  <label htmlFor="company" className={labelClasses}>
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    autoComplete="organization"
                    className={inputClasses}
                    placeholder="Ankit Bakers"
                    aria-invalid={!!errors.company}
                    {...register("company")}
                  />
                  {errors.company && (
                    <p className={errorClasses}>{errors.company.message}</p>
                  )}
                </div>

                {/* <div>
                  <label htmlFor="projectType" className={labelClasses}>
                    Project type *
                  </label>
                  <select
                    id="projectType"
                    className={inputClasses}
                    defaultValue=""
                    aria-invalid={!!errors.projectType}
                    {...register("projectType")}
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className={errorClasses}>{errors.projectType.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="budget" className={labelClasses}>
                    Budget *
                  </label>
                  <select
                    id="budget"
                    className={inputClasses}
                    defaultValue=""
                    aria-invalid={!!errors.budget}
                    {...register("budget")}
                  >
                    <option value="" disabled>
                      Select a budget range
                    </option>
                    {BUDGET_RANGES.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.budget && <p className={errorClasses}>{errors.budget.message}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="timeline" className={labelClasses}>
                    Timeline *
                  </label>
                  <select
                    id="timeline"
                    className={inputClasses}
                    defaultValue=""
                    aria-invalid={!!errors.timeline}
                    {...register("timeline")}
                  >
                    <option value="" disabled>
                      Select a timeline
                    </option>
                    {TIMELINES.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                  {errors.timeline && (
                    <p className={errorClasses}>{errors.timeline.message}</p>
                  )}
                </div> */}

                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClasses}>
                    Project details *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={inputClasses}
                    placeholder="What are you building, and what does success look like?"
                    aria-invalid={!!errors.message}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className={errorClasses}>{errors.message.message}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 text-sm text-muted dark:text-muted-dark">
                    <input
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-accent focus-visible:outline-accent"
                      aria-invalid={!!errors.terms}
                      {...register("terms")}
                    />
                    <span>
                      I agree to be contacted about my project and understand
                      my information will be handled per the privacy notice. *
                    </span>
                  </label>
                  {errors.terms && <p className={errorClasses}>{errors.terms.message}</p>}
                </div>
              </div>

              <div className="mt-7">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || status === "submitting"}
                  className="w-full sm:w-auto"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={16} />
                    </>
                  )}
                </Button>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                  >
                    <CheckCircle2 size={18} />
                    Thanks — your message is on its way. I'll reply within one
                    business day.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-5 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-400"
                  >
                    <AlertCircle size={18} />
                    {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
