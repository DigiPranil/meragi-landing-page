import { LockKeyhole } from 'lucide-react';
import { FlodeskForm } from '@/components/FlodeskForm';

export function CTAForm() {
  return (
    <section id="consultation" className="scroll-mt-4 bg-[#2c241d] px-4 py-20 sm:py-28">
      <div className="page-shell grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:gap-16">
        <div className="pt-2 text-[#fffaf2] lg:sticky lg:top-8">
          <p className="eyebrow !text-[#d8b987]">Book the Call</p>
          <h2 className="font-heading mt-4 text-5xl font-semibold leading-[.95] sm:text-7xl">One-to-One Consultation</h2>
          <p className="mt-5 text-lg font-semibold text-[#efd9bb]">Customized Advice for Your Wedding</p>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#d1c6bc]">No pressure. No sales pitch. Just honest guidance for your specific venue, date, and budget.</p>
        </div>

        <div className="flodesk-shell overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,.18)]">
          <FlodeskForm />
          <p className="flex items-center justify-center gap-2 border-t border-[#eadfd3] px-5 py-4 text-center text-sm text-[#76695e]">
            <LockKeyhole aria-hidden="true" className="size-4" /> We respect your privacy. No spam.
          </p>
        </div>
      </div>
    </section>
  );
}
