import type { Metadata } from 'next';
import { Check, HeartHandshake, MessageCircle, Quote } from 'lucide-react';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: "You're Booked | The Meragi Decor",
  description: 'Your free wedding decor consultation request has been received.',
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    label: 'Step 1',
    title: 'Check your email',
    description: 'Look for an email from The Meragi Decor with your consultation booking link.',
  },
  {
    label: 'Step 2',
    title: 'Choose your appointment',
    description: 'Select a date and time that works for you and choose WhatsApp Call or WhatsApp Message.',
  },
  {
    label: 'Step 3',
    title: 'Talk with us on WhatsApp',
    description: 'At your selected time, we’ll contact you on the WhatsApp number you provided.',
  },
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
        <div className="page-shell">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <article className="relative overflow-hidden rounded-[2rem] border border-[#dfc8aa] bg-[linear-gradient(145deg,#fffdf9_0%,#f8ecdf_100%)] p-7 shadow-[0_22px_70px_rgba(94,64,38,.09)] sm:p-10">
            <Quote aria-hidden="true" className="absolute -right-5 -top-7 size-32 rotate-12 text-[#c7a77d]/15 sm:size-40" />
            <div className="relative">
              <span className="flex size-12 items-center justify-center rounded-full bg-[#2c241d] text-[#f0d4aa] shadow-md">
                <HeartHandshake aria-hidden="true" className="size-5" />
              </span>
              <p className="eyebrow mt-6">A Personal Note</p>
              <h2 className="font-heading mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#2c241d] sm:text-4xl">
                Hi, thank you for requesting your free wedding decor consultation.
              </h2>
              <div className="mt-7 space-y-5 border-l-2 border-[#c9a777] pl-5 text-sm leading-7 text-[#665446] sm:pl-7 sm:text-base">
                <p>Planning wedding decor can feel confusing — especially when you’re trying to balance your venue, ideas, and budget.</p>
                <p>That’s exactly why we offer these consultations.</p>
                <p>We’ve just sent you an email with your appointment booking link. Choose a time that works for you and let us know whether you’d prefer a WhatsApp Call or WhatsApp Message.</p>
                <p>During your consultation, we can talk through your venue, ideas, budget, or any questions you have — no pressure and no obligation to book with us.</p>
                <p className="font-semibold text-[#5d3f27]">Looking forward to helping you plan with more clarity.</p>
              </div>
            </div>
            </article>
            <article className="rounded-[2rem] border bg-white p-7 sm:p-10">
            <MessageCircle aria-hidden="true" className="size-8 text-primary" />
            <h2 className="font-heading mt-5 text-4xl font-semibold">What Happens Next</h2>
            <ul className="mt-7 space-y-5">
              {nextSteps.map((step) => (
                <li key={step.label} className="flex items-start gap-3 text-[#55473c]">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#f2e5d6] text-primary">
                    <Check aria-hidden="true" className="size-3" />
                  </span>
                  <div>
                    <p className="text-[.7rem] font-bold uppercase tracking-[.18em] text-primary">{step.label}</p>
                    <h3 className="mt-1 text-base font-bold text-[#2c241d] sm:text-lg">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 sm:text-base">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-[#eadbc9] pt-6 text-[#5e4c3c]">
              <p className="font-bold text-[#2c241d]">Can’t find our email?</p>
              <p className="mt-2 text-sm leading-6 sm:text-base">Check your Promotions folder. If it’s there, move it to Primary and select “Yes” when Gmail asks if future messages from us should go there.</p>
            </div>
            </article>
          </div>

          <section className="mt-6 rounded-[2rem] border border-[#dfc8aa] bg-white p-5 shadow-[0_22px_70px_rgba(94,64,38,.09)] sm:p-8 lg:p-10" aria-labelledby="video-heading">
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="video-heading" className="font-heading text-3xl font-semibold leading-tight text-[#2c241d] sm:text-4xl">
                Before You Go, Do This 👇
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#665446] sm:text-base">
                Watch this quick video so you don’t miss your appointment link or our future emails.
              </p>
            </div>
            <div className="mx-auto mt-7 aspect-video max-w-4xl overflow-hidden rounded-[1.5rem] border border-[#dfc8aa] bg-[#2c241d] shadow-[0_18px_50px_rgba(44,36,29,.14)] sm:mt-8 sm:rounded-[1.75rem]">
              <iframe
                className="size-full"
                src="https://www.youtube-nocookie.com/embed/e-LpcAdrHZw"
                title="How to find The Meragi Decor consultation email"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>

          <section className="mt-6 overflow-hidden rounded-[2rem] bg-[#2c241d] px-6 py-10 text-center text-white shadow-[0_22px_70px_rgba(44,36,29,.16)] sm:px-10 sm:py-12" aria-labelledby="whatsapp-heading">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#f0d4aa] text-[#2c241d]">
              <MessageCircle aria-hidden="true" className="size-5" />
            </span>
            <p className="mt-5 text-xs font-bold uppercase tracking-[.2em] text-[#e6c99e]">We&apos;re Here to Help</p>
            <h2 id="whatsapp-heading" className="font-heading mx-auto mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
              Want to speak with us right away?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#e9ded3] sm:text-base">
              Send us a message on WhatsApp and our team will get back to you as soon as possible.
            </p>
            <a
              href="https://api.whatsapp.com/message/HB7ZW3VMKTYGH1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#f0d4aa] px-7 py-4 text-sm font-bold text-[#2c241d] shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2c241d] sm:w-auto sm:text-base"
            >
              <MessageCircle aria-hidden="true" className="size-5" />
              Chat on WhatsApp
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}
