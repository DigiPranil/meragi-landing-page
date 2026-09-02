'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, LockKeyhole } from 'lucide-react';

type FormFields = 'fullName' | 'email' | 'whatsapp' | 'weddingDate';
type Errors = Partial<Record<FormFields, string>>;
type FormSubmitEvent = { preventDefault: () => void; currentTarget: HTMLFormElement };

function getText(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export function CTAForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({});

  function validate(form: FormData): Errors {
    const next: Errors = {};
    const fullName = getText(form, 'fullName');
    const email = getText(form, 'email');
    const whatsapp = getText(form, 'whatsapp');
    const weddingDate = getText(form, 'weddingDate');
    if (fullName.length < 2) next.fullName = 'Please enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = 'Please enter a valid active email.';
    if (whatsapp.replace(/\D/g, '').length < 7) next.whatsapp = 'Please enter a valid WhatsApp number.';
    if (!weddingDate) next.weddingDate = 'Please select your wedding date.';
    return next;
  }

  function handleSubmit(event: FormSubmitEvent) {
    event.preventDefault();
    const nextErrors = validate(new FormData(event.currentTarget));
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) router.push('/thank-you');
  }

  const inputClass = 'h-13 w-full rounded-xl border border-[#d9c8b4] bg-[#fffdf9] px-4 text-base outline-none placeholder:text-[#9a8d80] focus-visible:border-[#a77e4c] focus-visible:ring-3 focus-visible:ring-[#a77e4c]/20';

  return (
    <section id="consultation" className="scroll-mt-4 bg-[#2c241d] px-4 py-20 sm:py-28">
      <div className="page-shell grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:gap-16">
        <div className="pt-2 text-[#fffaf2] lg:sticky lg:top-8">
          <p className="eyebrow !text-[#d8b987]">Book the Call</p>
          <h2 className="font-heading mt-4 text-5xl font-semibold leading-[.95] sm:text-7xl">One-to-One Consultation</h2>
          <p className="mt-5 text-lg font-semibold text-[#efd9bb]">Customized Advice for Your Wedding</p>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#d1c6bc] sm:text-base">No pressure. No sales pitch. Just honest guidance for your specific venue, date, and budget.</p>
        </div>
        <form noValidate onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 shadow-[0_25px_80px_rgba(0,0,0,.18)] sm:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-sm font-bold">Full Name <span aria-hidden="true" className="text-destructive">*</span></label>
              <input id="fullName" name="fullName" autoComplete="name" placeholder="Your full name" aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? 'fullName-error' : undefined} className={inputClass} />
              {errors.fullName && <p id="fullName-error" role="alert" className="text-sm text-destructive">{errors.fullName}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold">Active Email <span aria-hidden="true" className="text-destructive">*</span></label>
              <input id="email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="you@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} className={inputClass} />
              {errors.email && <p id="email-error" role="alert" className="text-sm text-destructive">{errors.email}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="whatsapp" className="text-sm font-bold">WhatsApp Number <span aria-hidden="true" className="text-destructive">*</span></label>
              <input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" inputMode="tel" placeholder="+977 98XXXXXXXX" aria-invalid={Boolean(errors.whatsapp)} aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined} className={inputClass} />
              {errors.whatsapp && <p id="whatsapp-error" role="alert" className="text-sm text-destructive">{errors.whatsapp}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="weddingDate" className="text-sm font-bold">Wedding Date <span aria-hidden="true" className="text-destructive">*</span></label>
              <input id="weddingDate" name="weddingDate" type="date" aria-invalid={Boolean(errors.weddingDate)} aria-describedby={errors.weddingDate ? 'weddingDate-error' : undefined} className={inputClass} />
              {errors.weddingDate && <p id="weddingDate-error" role="alert" className="text-sm text-destructive">{errors.weddingDate}</p>}
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="venueName" className="text-sm font-bold">Venue Name <span className="font-normal text-muted-foreground">(if confirmed)</span></label>
              <input id="venueName" name="venueName" placeholder="Your venue name" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="message" className="text-sm font-bold">Anything You Want to Say</label>
              <textarea id="message" name="message" placeholder="Tell us about your ideas, questions, or budget range" className="min-h-32 rounded-xl border border-[#d9c8b4] bg-[#fffdf9] p-4 text-base outline-none placeholder:text-[#9a8d80] focus-visible:border-[#a77e4c] focus-visible:ring-3 focus-visible:ring-[#a77e4c]/20" />
            </div>
          </div>
          <button type="submit" className="mt-7 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#2c241d] px-6 text-base font-bold text-white transition hover:bg-[#17120f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a77e4c]">Book Free Consultation <ArrowRight aria-hidden="true" className="size-4" /></button>
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground"><LockKeyhole aria-hidden="true" className="size-3.5" /> We respect your privacy. No spam.</p>
        </form>
      </div>
    </section>
  );
}
