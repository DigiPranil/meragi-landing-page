import type { Metadata } from 'next';
import { Check, HeartHandshake, MessageCircle, Quote } from 'lucide-react';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: "You're Booked | The Meragi Decor",
  description: 'Your free wedding decor consultation request has been received.',
  robots: { index: false, follow: false },
};

const nextSteps = [
  "We'll message you on WhatsApp within a few hours to confirm a time",
  'The call takes about 15 minutes — at a time that works for you',
  'Come as you are — no need to prepare anything in advance',
];

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#fffaf4]">
      <Header />
      <section className="hero-glow relative overflow-hidden px-4 py-16 sm:py-24">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#2c241d] text-white shadow-lg"><Check aria-hidden="true" className="size-6" /></span>
          <p className="eyebrow mt-6">Consultation Request Received</p>
          <h1 className="font-heading mt-4 text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[.92] tracking-[-.04em]">You&apos;re Booked. <span className="text-primary">We&apos;ll See You Soon.</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Thank you for reaching out — your free consultation request has been received.</p>
        </div>
      </section>
      <section className="px-4 pb-20 sm:pb-28">
        <div className="page-shell grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <article className="relative overflow-hidden rounded-[2rem] border border-[#dfc8aa] bg-[linear-gradient(145deg,#fffdf9_0%,#f8ecdf_100%)] p-7 shadow-[0_22px_70px_rgba(94,64,38,.09)] sm:p-10">
            <Quote aria-hidden="true" className="absolute -right-5 -top-7 size-32 rotate-12 text-[#c7a77d]/15 sm:size-40" />
            <div className="relative">
              <span className="flex size-12 items-center justify-center rounded-full bg-[#2c241d] text-[#f0d4aa] shadow-md">
                <HeartHandshake aria-hidden="true" className="size-5" />
              </span>
              <p className="eyebrow mt-6">A Personal Note</p>
              <h2 className="font-heading mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#2c241d] sm:text-4xl">
                Hi, thank you so much for booking your free consultation with us.
              </h2>
              <div className="mt-7 space-y-5 border-l-2 border-[#c9a777] pl-5 text-sm leading-7 text-[#665446] sm:pl-7 sm:text-base">
                <p>I know planning a wedding comes with a lot of decisions, and honestly, a lot of uncertainty — especially around decor and budget. That&apos;s exactly why we do these calls.</p>
                <p>We&apos;ll reach out to you on WhatsApp shortly to confirm a time that works for you. On the call, we&apos;ll talk through your venue, your ideas, and your budget — no pressure, no obligation.</p>
                <p className="font-semibold text-[#5d3f27]">Looking forward to speaking with you soon.</p>
              </div>
            </div>
          </article>
          <article className="rounded-[2rem] border bg-white p-7 sm:p-10">
            <MessageCircle aria-hidden="true" className="size-8 text-primary" />
            <h2 className="font-heading mt-5 text-4xl font-semibold">What Happens Next</h2>
            <ul className="mt-7 space-y-5">
              {nextSteps.map((step) => <li key={step} className="flex items-start gap-3 text-sm leading-6 text-[#55473c] sm:text-base"><span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#f2e5d6] text-primary"><Check aria-hidden="true" className="size-3" /></span>{step}</li>)}
            </ul>
            <p className="mt-8 border-t pt-6 text-sm font-semibold leading-6 text-[#5e4c3c]">While you wait, feel free to check your WhatsApp — we may already be reaching out.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
