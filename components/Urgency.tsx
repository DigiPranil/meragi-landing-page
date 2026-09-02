import { Clock3 } from 'lucide-react';

export function Urgency() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="page-shell overflow-hidden rounded-[2rem] border border-[#dec8aa] bg-[linear-gradient(135deg,#fff8ef,#f3dfca)] p-7 sm:p-12">
        <div className="grid items-center gap-7 md:grid-cols-[auto_1fr_auto]">
          <span className="flex size-14 items-center justify-center rounded-full bg-[#2c241d] text-white"><Clock3 aria-hidden="true" className="size-6" /></span>
          <div>
            <p className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">We take these calls personally, one couple at a time — not through a call center or a bot.</p>
            <p className="mt-3 text-sm leading-6 text-[#6b5847] sm:text-base">That means only a limited number of consultation slots are available each week. If your wedding date is approaching, it&apos;s best to book now rather than wait.</p>
          </div>
          <a href="#consultation" className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#2c241d] px-6 text-sm font-bold text-white transition hover:bg-[#17120f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Book Free Consultation</a>
        </div>
      </div>
    </section>
  );
}
