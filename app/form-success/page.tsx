'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const REDIRECT_DELAY_MS = 1500;

export default function FormSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const redirect = window.setTimeout(() => router.replace('/thanks'), REDIRECT_DELAY_MS);
    return () => window.clearTimeout(redirect);
  }, [router]);

  return (
    <main className="hero-glow flex min-h-screen items-center justify-center bg-[#fffaf4] px-4 text-center">
      <output aria-live="polite">
        <span className="mx-auto block size-10 animate-spin rounded-full border-2 border-[#dcc39e] border-t-[#2c241d]" />
        <p className="mt-5 text-base font-semibold text-[#5e4c3c]">Confirming your consultation request…</p>
      </output>
    </main>
  );
}
