import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CalendarClock, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section, SectionHeading } from "@/components/site/ui-bits";
import { site } from "@/data/site";

const description =
  "Contact K-Tech Solutions in Jos, Plateau State. Call +234 816 338 7101, email kwembetarfaelijah@gmail.com, or send a project enquiry for a free consultation.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Free Consultation — K-Tech Solutions" },
      { name: "description", content: description },
      { property: "og:title", content: "Contact | K-Tech Solutions" },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: "Contact | K-Tech Solutions" },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const projectTypes = [
  "Landing page",
  "Business website",
  "Website redesign",
  "Web application",
  "WordPress site",
  "SEO / digital marketing",
  "Dashboard / reporting",
  "Drone photography",
  "Something else",
];
const budgets = ["Under ₦100k", "₦100k – ₦250k", "₦250k – ₦500k", "₦500k+", "Not sure yet"];
const timelines = ["As soon as possible", "Within a month", "1–3 months", "Just exploring"];

const schema = z.object({
  name: z.string().trim().min(2, "Please tell me your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional(),
  business: z.string().trim().max(120).optional(),
  projectType: z.string().min(1, "Pick the closest option"),
  budget: z.string().min(1, "Pick a range — an estimate is fine"),
  timeline: z.string().min(1, "Let me know your timing"),
  message: z
    .string()
    .trim()
    .min(20, "A sentence or two about the project helps a lot")
    .max(2000, "Please keep this under 2000 characters"),
});

type FormValues = z.infer<typeof schema>;

function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { projectType: "", budget: "", timeline: "" },
  });

  const onSubmit = (values: FormValues) => {
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || "-"}`,
      `Business: ${values.business || "-"}`,
      `Project type: ${values.projectType}`,
      `Budget: ${values.budget}`,
      `Timeline: ${values.timeline}`,
      "",
      values.message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Project enquiry — ${values.name}`,
    )}&body=${encodeURIComponent(body)}`;

    toast.success("Opening your email app with the enquiry ready to send.");
    setSent(true);
    reset();
  };

  const field = "mt-2 bg-background/60";
  const errorClass = "mt-1.5 text-xs text-destructive";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s discuss your <span className="text-gradient-mix">project</span>
          </>
        }
        intro="No sales pressure and no obligation. Tell me a little about your business and I'll come back with honest advice, a clear scope and a fixed price."
      />

      <Section className="pt-6" ariaLabel="Contact details and form">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <Reveal>
              <div className="premium-card p-7">
                <h2 className="text-lg font-semibold">Reach me directly</h2>
                <ul className="mt-6 space-y-5 text-sm">
                  <li>
                    <a href={`tel:${site.phone}`} className="flex items-start gap-3 hover:text-gold">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                      <span>
                        <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                          Phone &amp; WhatsApp
                        </span>
                        <span className="mt-1 block font-semibold">{site.phoneDisplay}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="flex items-start gap-3 hover:text-gold"
                    >
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                          Email
                        </span>
                        <span className="mt-1 block break-all font-semibold">{site.email}</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <span>
                      <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        Location
                      </span>
                      <span className="mt-1 block font-semibold">{site.location}</span>
                    </span>
                  </li>
                </ul>
                <div className="gold-rule my-7" />
                <div className="flex gap-3">
                  {[
                    { href: site.socials.github, label: "GitHub profile", Icon: Github },
                    { href: site.socials.linkedin, label: "LinkedIn profile", Icon: Linkedin },
                  ].map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-border text-muted-foreground hover:border-gold/50 hover:text-gold"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div id="consultation" className="premium-card scroll-mt-24 p-7">
                <CalendarClock className="h-6 w-6 text-gold" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold">Book a free consultation</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A 20-minute call about your business and what your website needs to do. Online
                  scheduling is coming soon — for now, call or message me and we&apos;ll find a time
                  that works.
                </p>
                <Button asChild variant="gold" className="mt-5 w-full">
                  <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer noopener">
                    Message me on WhatsApp
                  </a>
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">
                  Calendly booking widget: reserved for this space.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="premium-card overflow-hidden">
                <div
                  className="grid aspect-[4/3] place-items-center text-center"
                  style={{ background: "var(--gradient-aurora)" }}
                >
                  <div className="px-6">
                    <MapPin className="mx-auto h-7 w-7 text-gold" aria-hidden="true" />
                    <p className="mt-3 font-semibold">{site.location}</p>
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      Map view reserved for this space
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <form
              id="estimator"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="premium-card scroll-mt-24 p-7 sm:p-9"
            >
              <h2 className="text-xl font-bold">Project enquiry &amp; budget estimator</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fields marked with * are required. Everything else just helps me reply usefully.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Your name *</Label>
                  <Input id="name" className={field} autoComplete="name" {...register("name")} />
                  {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email address *</Label>
                  <Input
                    id="email"
                    type="email"
                    className={field}
                    autoComplete="email"
                    {...register("email")}
                  />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" className={field} autoComplete="tel" {...register("phone")} />
                </div>
                <div>
                  <Label htmlFor="business">Business name</Label>
                  <Input
                    id="business"
                    className={field}
                    autoComplete="organization"
                    {...register("business")}
                  />
                </div>
                <div>
                  <Label htmlFor="projectType">Project type *</Label>
                  <select
                    id="projectType"
                    className="mt-2 h-10 w-full rounded-md border border-input bg-background/60 px-3 text-sm text-foreground"
                    {...register("projectType")}
                  >
                    <option value="">Select an option</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && <p className={errorClass}>{errors.projectType.message}</p>}
                </div>
                <div>
                  <Label htmlFor="budget">Budget range *</Label>
                  <select
                    id="budget"
                    className="mt-2 h-10 w-full rounded-md border border-input bg-background/60 px-3 text-sm text-foreground"
                    {...register("budget")}
                  >
                    <option value="">Select a range</option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="timeline">Timeline *</Label>
                  <select
                    id="timeline"
                    className="mt-2 h-10 w-full rounded-md border border-input bg-background/60 px-3 text-sm text-foreground"
                    {...register("timeline")}
                  >
                    <option value="">Select a timeline</option>
                    {timelines.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.timeline && <p className={errorClass}>{errors.timeline.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Tell me about the project *</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    className={field}
                    placeholder="What does your business do, and what would you like the website to achieve?"
                    {...register("message")}
                  />
                  {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                </div>
              </div>

              <Button type="submit" variant="gold" size="lg" className="mt-8 w-full" disabled={isSubmitting}>
                <Send aria-hidden="true" />
                Send my enquiry
              </Button>
              <p aria-live="polite" className="mt-4 text-xs text-muted-foreground">
                {sent
                  ? "Thanks — your email app should now be open with the details filled in. If it didn't open, email or WhatsApp me directly."
                  : "Submitting opens your email app with the details filled in, so nothing is stored on this site."}
              </p>
            </form>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0" ariaLabel="Ways to start">
        <SectionHeading
          eyebrow="No pressure"
          title="Three easy ways to start a conversation"
          intro="Pick whichever feels comfortable — none of them commit you to anything."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Free consultation",
              body: "A short call to talk through your business and what your website should do. Advice given whether or not you hire me.",
            },
            {
              title: "Request a quote",
              body: "Fill in the enquiry form and I'll send back a written scope with a fixed price and a realistic timeline.",
            },
            {
              title: "Just ask a question",
              body: "Not ready for a project? Ask anything about websites, hosting, SEO or tools and I'll answer plainly.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="premium-card h-full p-7">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
