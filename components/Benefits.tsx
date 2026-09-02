import { BadgeCheck, Banknote, Building2, ListOrdered, Route } from 'lucide-react';

const benefits = [
  { icon: BadgeCheck, text: "Get an honest opinion on a quote or plan you've already received" },
  { icon: Banknote, text: "Understand what's realistic for your budget before you commit to anything" },
  { icon: Building2, text: "Get clarity on your specific venue — what works, what doesn't" },
  { icon: ListOrdered, text: 'Learn the right order to plan your decor so nothing gets rushed later' },
  { icon: Route, text: "Walk away with a clear next step, even if it's not with us" },
];

export function Benefits() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="page-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">How You Benefit From This Consultation</p>
          <h2 className="font-heading mt-4 text-4xl font-semibold leading-none sm:text-6xl">How You Benefit From This Consultation</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {benefits.map(({ icon: Icon, text }, index) => (
            <article key={text} className={`rounded-3xl border bg-white p-6 shadow-[0_12px_45px_rgba(90,62,40,.06)] ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
              <span className="flex size-11 items-center justify-center rounded-full bg-[#f4e9dc] text-primary"><Icon aria-hidden="true" className="size-5" /></span>
              <p className="mt-5 text-sm font-semibold leading-6 text-[#40352c] sm:text-base">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#consultation" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#b9986b] px-6 text-sm font-bold text-[#5d4329] transition hover:bg-[#f3e7d8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Book Free Consultation</a>
        </div>
      </div>
    </section>
  );
}
