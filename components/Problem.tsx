import { CircleAlert } from 'lucide-react';

export function Problem() {
  return (
    <section className="bg-[#2c241d] px-4 py-20 text-[#fffaf2] sm:py-28">
      <div className="page-shell grid items-start gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-8">
          <p className="eyebrow !text-[#d8b987]">Before You Spend Anything</p>
          <h2 className="font-heading mt-4 text-4xl font-semibold leading-[1.02] sm:text-6xl">Every wedding decorator promises “beautiful decor.”</h2>
        </div>
        <div className="space-y-4">
          {[
            ['No one tells you what it actually costs, or if your venue can even pull it off.', ''],
            ["You've seen weddings that all look the same.", "You don't want yours to be the fourth one this year."],
            ['You have a vision. Your family has another.', "And you're not sure how to make both work."],
            ['On top of that — you have a full-time job, a hundred other decisions, and no time to figure this out alone.', ''],
          ].map(([lead, support]) => (
            <div key={lead} className="rounded-3xl border border-white/10 bg-white/[.045] p-5 sm:p-7">
              <div className="flex items-start gap-4">
                <CircleAlert aria-hidden="true" className="mt-1 size-5 shrink-0 text-[#d8b987]" />
                <div>
                  <p className="font-heading text-2xl font-semibold leading-tight sm:text-3xl">{lead}</p>
                  {support && <p className="mt-2 text-sm leading-6 text-[#d8cec5] sm:text-base">{support}</p>}
                </div>
              </div>
            </div>
          ))}
          <p className="pt-5 text-lg font-semibold leading-8 text-[#f4dfc0] sm:text-xl">This call is where we help you sort through it. Honestly, before you spend anything.</p>
        </div>
      </div>
    </section>
  );
}
