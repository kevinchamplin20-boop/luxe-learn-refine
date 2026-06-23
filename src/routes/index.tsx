import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import educationHeroAvif from "../assets/education-hero.jpg?w=480;800;1200&format=avif&as=srcset";
import educationHeroWebp from "../assets/education-hero.jpg?w=480;800;1200&format=webp&as=srcset";
import educationHeroFallback from "../assets/education-hero.jpg?w=800&format=jpg";
import educationHeroPreload from "../assets/education-hero.jpg?w=800&format=webp";
import logoAsset from "../assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Edu Store — Premium Educational Bundle" },
      {
        name: "description",
        content:
          "1-Year Coursera Plus for LKR 3,000. Includes bonus Canva Edu Pro and LinkedIn Career Premium. Legitimate accounts, instant delivery.",
      },
      { property: "og:title", content: "Digital Edu Store — Premium Educational Bundle" },
      {
        property: "og:description",
        content: "1-Year Coursera Plus for LKR 3,000. Bonus Canva Edu Pro + LinkedIn Career Premium.",
      },
    ],
    links: [
      { rel: "preload", as: "image", href: educationHeroPreload, type: "image/webp", fetchpriority: "high" } as never,
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/94786904949?text=Hi!%20I%27m%20interested%20in%20the%20Premium%20Educational%20Bundle%20for%20LKR%203000.%20Can%20you%20provide%20more%20details%3F";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <Categories />
      <Bonus />
      <Pricing />
      <Steps />
      <ContactCTA />
      <FAQ />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:flex sm:justify-between sm:px-6 sm:py-5">
        <a href="#" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img src={logoAsset.url} alt="Digital Edu Store Logo" className="h-7 w-7 shrink-0 rounded-lg shadow-sm sm:h-8 sm:w-8" />
          <span className="truncate font-display text-xl tracking-tight sm:text-2xl">Digital Edu Store</span>
          <span className="hidden shrink-0 text-xs text-muted-foreground sm:inline">— Colombo</span>
        </a>
        <nav className="hidden items-center gap-9 text-sm text-muted-foreground sm:flex">
          <a href="#features" className="transition hover:text-foreground">Features</a>
          <a href="#bonus" className="transition hover:text-foreground">Bonus</a>
          <a href="#pricing" className="transition hover:text-foreground">Pricing</a>
          <a href="#faq" className="transition hover:text-foreground">FAQ</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition hover:bg-foreground/90 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Get access
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-8">Premium Educational Bundle · 2026 Edition</p>
            <h1 className="display-xl text-balance">
              A year of <em className="italic text-primary">world-class</em>
              <br />
              learning, in one paper-thin price.
            </h1>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              1-Year Coursera Plus access — 10,000+ courses from Stanford, Yale, Google and IBM —
              delivered to your personal account in minutes. Includes two premium bonuses worth
              LKR 27,000.
            </p>

            <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition hover:bg-foreground/90"
              >
                Start on WhatsApp
                <span className="transition group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                See what's included
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Instant delivery · LKR 3,000 one-time
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-2xl transition-transform duration-500 hover:scale-[1.02] sm:aspect-square">
              <picture>
                <source type="image/avif" srcSet={educationHeroAvif} sizes="(min-width: 1024px) 40vw, (min-width: 640px) 80vw, 100vw" />
                <source type="image/webp" srcSet={educationHeroWebp} sizes="(min-width: 1024px) 40vw, (min-width: 640px) 80vw, 100vw" />
                <img
                  src={educationHeroFallback}
                  alt="Premium modern workspace representing world-class educational learning"
                  className="h-full w-full object-cover object-center"
                  width={1024}
                  height={1024}
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="pointer-events-none absolute -right-4 -bottom-4 -z-10 hidden h-full w-full rounded-2xl border border-border/40 bg-surface/40 backdrop-blur-sm sm:block" />
          </div>
        </div>


        <div className="mt-24 grid grid-cols-2 gap-x-10 gap-y-6 border-t border-border pt-10 sm:grid-cols-4 sm:gap-x-16">
          <Stat n="10,000+" label="Courses & specializations" />
          <Stat n="250+" label="Top universities" />
          <Stat n="LKR 33,000" label="Total bundle value" />
          <Stat n="90%" label="You save today" />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl tracking-tight sm:text-4xl">{n}</div>
      <div className="mt-1.5 text-xs text-muted-foreground sm:text-sm">{label}</div>
    </div>
  );
}

function Marquee() {
  const items = ["Stanford", "MIT", "Harvard", "Yale", "Google", "IBM", "Duke", "Wharton", "Princeton", "Imperial"];
  return (
    <div className="border-y border-border bg-surface/60">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-10 gap-y-4 px-6 py-6">
        <span className="eyebrow">Learn from</span>
        <div className="flex flex-1 flex-wrap items-center justify-end gap-x-10 gap-y-3 font-display text-xl text-foreground/70">
          {items.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    k: "01",
    title: "10,000+ courses",
    body: "An expansive catalogue across data, business, design, engineering, and the humanities — refreshed every week.",
  },
  {
    k: "02",
    title: "Professional certificates",
    body: "Industry-recognised credentials from Google, IBM, Meta, and dozens more — shareable directly to LinkedIn.",
  },
  {
    k: "03",
    title: "University-grade material",
    body: "Lectures and assignments from Stanford, MIT, Yale, Imperial and other top-tier institutions.",
  },
  {
    k: "04",
    title: "Learn anywhere",
    body: "Native mobile apps with offline download. Pick up exactly where you left off, on any device.",
  },
  {
    k: "05",
    title: "Unlimited access",
    body: "No course caps. No timers. A full year to learn at the pace your life actually allows.",
  },
  {
    k: "06",
    title: "Career support",
    body: "Resume reviews, interview prep, and guided career paths to translate learning into outcomes.",
  },
];

function Features() {
  return (
    <section id="features" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">What you get</p>
            <h2 className="display-lg mt-5">
              Everything to <em className="italic text-primary">advance</em> your career.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              A single subscription that replaces a stack of expensive platforms. Designed for
              students and working professionals across Sri Lanka.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.k} className="bg-background p-8">
                  <div className="font-display text-sm text-muted-foreground">{f.k}</div>
                  <div className="mt-3 font-display text-2xl tracking-tight">{f.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CATS = [
  { title: "Data Science", body: "Machine Learning · AI · Analytics", n: "1,200+ courses" },
  { title: "Technology", body: "Web · Mobile · Cloud · Cybersecurity", n: "2,400+ courses" },
  { title: "Business", body: "Marketing · Finance · Management", n: "1,800+ courses" },
  { title: "Personal growth", body: "Leadership · Productivity · Communication", n: "900+ courses" },
];

function Categories() {
  return (
    <section className="section-pad border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Popular categories</p>
            <h2 className="display-lg mt-5 max-w-2xl">
              Pick a path. <em className="italic text-muted-foreground">Or four.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Your subscription unlocks every category, every level. Start where it matters most today.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATS.map((c, i) => (
            <div
              key={c.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-background p-7 transition hover:border-foreground/30"
            >
              <div className="font-display text-xs text-muted-foreground">0{i + 1}</div>
              <div className="mt-20">
                <div className="font-display text-3xl tracking-tight">{c.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                <div className="mt-6 hairline pt-4 text-xs text-muted-foreground">{c.n}</div>
              </div>
              <span className="absolute right-6 top-6 h-2 w-2 rounded-full bg-primary opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BONUSES = [
  {
    name: "Canva Edu Pro",
    duration: "1 Year access",
    value: "LKR 15,000",
    body: "Full Canva Pro on an education licence — premium templates, brand kits, background remover, and Magic Studio.",
    tag: "Design",
  },
  {
    name: "LinkedIn Career Premium",
    duration: "3 Months access",
    value: "LKR 12,000",
    body: "Featured applicant on every job, InMail credits, salary insights, and full LinkedIn Learning library.",
    tag: "Career",
  },
];

function Bonus() {
  return (
    <section id="bonus" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="eyebrow">Included free</p>
          <h2 className="display-lg mt-5">
            Two bonuses, <em className="italic text-primary">no upsell.</em>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Both bonuses are bundled at no extra cost — together worth LKR 27,000 and delivered
            alongside your Coursera Plus access.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {BONUSES.map((b) => (
            <article
              key={b.name}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-background p-10"
            >
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {b.tag}
                </span>
                <span className="font-display text-sm text-muted-foreground">Bonus</span>
              </div>
              <div className="mt-24">
                <h3 className="font-display text-4xl tracking-tight sm:text-5xl">{b.name}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {b.body}
                </p>
              </div>
              <div className="mt-10 flex items-end justify-between border-t border-border pt-5">
                <div>
                  <div className="eyebrow">Duration</div>
                  <div className="mt-1 text-sm">{b.duration}</div>
                </div>
                <div className="text-right">
                  <div className="eyebrow">Retail value</div>
                  <div className="mt-1 font-display text-2xl text-primary">{b.value}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface/60 px-8 py-6 text-sm">
          <span className="text-muted-foreground">Total bonus value</span>
          <span className="font-display text-2xl tracking-tight">LKR 27,000 — included free</span>
        </div>
      </div>
    </section>
  );
}

const INCLUDES = [
  "1 Year Coursera Plus, activated on your own email",
  "10,000+ courses & specializations from top institutions",
  "Industry-recognised, shareable certificates",
  "Private account — no shared logins",
  "Cheapest legitimate price in the market",
];

function Pricing() {
  return (
    <section id="pricing" className="section-pad border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Pricing</p>
            <h2 className="display-lg mt-5 text-background">
              One price. <em className="italic" style={{ color: "var(--color-primary)" }}>One year.</em>
            </h2>
            <p className="mt-6 max-w-sm text-background/70">
              No subscriptions, no renewals. A single one-time payment unlocks the full bundle and
              both bonuses for the entire year.
            </p>

            <div className="mt-10 space-y-3 text-sm text-background/80">
              <Row label="Coursera Plus retail" value="LKR 48,000 / yr" />
              <Row label="Canva Edu Pro retail" value="LKR 15,000 / yr" />
              <Row label="LinkedIn Premium retail" value="LKR 12,000 / 3mo" />
              <Row label="Your price today" value="LKR 3,000" strong />
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-3xl bg-background p-10 text-foreground sm:p-12">
              <div className="flex items-baseline justify-between border-b border-border pb-6">
                <div>
                  <div className="eyebrow">Premium Bundle</div>
                  <div className="mt-2 font-display text-2xl">Coursera Plus + Bonuses</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-5xl tracking-tight sm:text-6xl">LKR 3,000</div>
                  <div className="text-xs text-muted-foreground">One-time · 1 year access</div>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {INCLUDES.map((i) => (
                  <li key={i} className="flex gap-4 text-sm">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl bg-surface/70 p-5">
                <div className="eyebrow">Free bonuses included</div>
                <div className="mt-3 grid gap-2 text-sm">
                  <div className="flex justify-between"><span>Canva Edu Pro</span><span className="text-muted-foreground">1 Year</span></div>
                  <div className="flex justify-between"><span>LinkedIn Career Premium</span><span className="text-muted-foreground">3 Months</span></div>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center justify-center gap-3 rounded-full bg-foreground py-4 text-sm font-medium text-background transition hover:bg-foreground/90"
              >
                Claim this bundle on WhatsApp →
              </a>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                100% legitimate · Instant access · Secure payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex items-center justify-between border-b border-background/15 py-3 ${strong ? "text-background" : ""}`}>
      <span className="text-background/60">{label}</span>
      <span className={strong ? "font-display text-xl text-background" : ""}>{value}</span>
    </div>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Message us on WhatsApp",
    body: "Tap the button, send a quick hello. Our team replies within minutes, 24/7.",
  },
  {
    n: "02",
    title: "Complete a one-time payment",
    body: "Bank transfer, mobile wallet, or other secure methods — LKR 3,000, no recurring charges.",
  },
  {
    n: "03",
    title: "Receive instant access",
    body: "Coursera Plus is activated on your own email. Bonus credentials are delivered immediately.",
  },
];

function Steps() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="eyebrow">How it works</p>
          <h2 className="display-lg mt-5">
            From message to <em className="italic text-primary">first lecture</em> in under ten minutes.
          </h2>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-background p-10">
              <div className="font-display text-5xl text-primary">{s.n}</div>
              <div className="mt-8 font-display text-2xl tracking-tight">{s.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="section-pad border-t border-border bg-surface/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Talk to us</p>
            <h2 className="display-lg mt-5">
              We reply <em className="italic text-primary">in minutes.</em>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Real humans on the other end — happy to walk you through the bundle, answer questions
              about your studies, or process your purchase end-to-end on WhatsApp.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-background p-10">
            <div className="eyebrow">WhatsApp</div>
            <div className="mt-3 font-display text-4xl tracking-tight">+94 78 690 4949</div>
            <div className="mt-2 text-sm text-muted-foreground">Available 24 / 7 — Colombo, Sri Lanka</div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary py-4 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Start a chat →
            </a>
            <div className="mt-5 flex justify-between text-xs text-muted-foreground">
              <span>Fast response</span>
              <span>Friendly support</span>
              <span>Secure purchase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "Are these accounts legitimate?",
    a: "Yes. We provide fully legitimate educational accounts activated on your own email, with the same access you'd get buying directly from the platform.",
  },
  {
    q: "How quickly will I get access?",
    a: "Access is instant. Once payment is confirmed on WhatsApp, your Coursera Plus activation and bonus credentials are delivered within minutes.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Sri Lankan bank transfers, mobile wallets, and other secure local payment methods. We'll share full instructions on WhatsApp.",
  },
  {
    q: "Will I receive actual certificates?",
    a: "Yes — every course you complete issues a verifiable, shareable certificate directly from Coursera under your name.",
  },
  {
    q: "Can I share the account with friends?",
    a: "The account is yours alone — it's activated on your personal email for a private, uninterrupted experience.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="display-lg mt-5">Questions, answered.</h2>
            <p className="mt-6 text-sm text-muted-foreground">
              Can't find what you need?{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-4">
                Message us on WhatsApp
              </a>
              .
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="border-t border-border">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q} className="border-b border-border">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-start justify-between gap-6 py-7 text-left"
                    >
                      <span className="font-display text-xl tracking-tight sm:text-2xl">{f.q}</span>
                      <span className="mt-2 font-display text-2xl text-muted-foreground">
                        {isOpen ? "–" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="-mt-2 max-w-2xl pb-7 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {f.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="Digital Edu Store Logo" className="h-8 w-8 rounded-lg shadow-sm" />
              <div className="font-display text-3xl tracking-tight">Digital Edu Store</div>
            </div>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              Premium learning access for Sri Lankan students and professionals.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#bonus" className="hover:text-foreground">Bonus</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Digital Edu Store. All rights reserved.</span>
          <span>Colombo, Sri Lanka · +94 78 690 4949</span>
        </div>
      </div>
    </footer>
  );
}
