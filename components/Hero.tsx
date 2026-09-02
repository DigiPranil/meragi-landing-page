import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden px-4 pb-20 pt-16 text-center sm:pb-28 sm:pt-24">
      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="eyebrow mb-6">Free Wedding Decor Consultation</p>
        <h1 className="font-heading text-[clamp(2.8rem,8vw,6.4rem)] font-semibold leading-[.92] tracking-[-.04em] text-[#2b2119]">
          Not Sure What Your Wedding Decor Should Actually Cost or Look Like?{' '}
          <span className="text-primary">Get Real Answers, Free.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base font-semibold leading-7 text-[#594a3e] sm:text-lg">
          No pressure. No sales pitch. Just honest guidance for your specific venue, date, and budget.
        </p>
        <div className="mx-auto mt-5 max-w-2xl space-y-1 text-sm leading-6 text-muted-foreground sm:text-base">
          <p>This free call is for Kathmandu couples planning their wedding decor and unsure where to start.</p>
          <p>Talk through your venue, budget, and ideas with someone who actually knows this space.</p>
          <p>No obligation to book anything after.</p>
        </div>
        <a
          href="#consultation"
          className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#2d241d] px-7 text-sm font-bold text-white shadow-[0_14px_35px_rgba(53,39,27,.2)] transition hover:-translate-y-0.5 hover:bg-[#17120f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:px-9 sm:text-base"
        >
          Book Free Consultation <ArrowDown aria-hidden="true" className="size-4" />
        </a>
      </div>
    </section>
  );
}
