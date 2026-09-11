'use client';

import { useEffect, useRef } from 'react';
import { FLODESK_EMBED_HTML } from '@/components/flodeskEmbedHtml';

export function FlodeskForm() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    mount.innerHTML = FLODESK_EMBED_HTML;

    // Scripts added through innerHTML do not execute. Replacing each script node
    // runs Flodesk's supplied loader and form:handle configuration unchanged.
    mount.querySelectorAll('script').forEach((embeddedScript) => {
      const executableScript = document.createElement('script');
      for (const attribute of embeddedScript.attributes) {
        executableScript.setAttribute(attribute.name, attribute.value);
      }
      executableScript.textContent = embeddedScript.textContent;
      embeddedScript.replaceWith(executableScript);
    });

    return () => {
      mount.replaceChildren();
    };
  }, []);

  return (
    <div>
      <div ref={mountRef} aria-label="Free consultation booking form" />
      <noscript>
        <p className="px-6 py-12 text-center text-base text-[#5e4c3c]">Please enable JavaScript to load the consultation form.</p>
      </noscript>
    </div>
  );
}
