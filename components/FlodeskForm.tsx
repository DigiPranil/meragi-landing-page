'use client';

import { useEffect, useRef, useState } from 'react';

const EMBED_PATH = '/flodesk-embed.html';

export function FlodeskForm() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const mount = mountRef.current;

    async function loadEmbed() {
      if (!mount) return;

      try {
        const response = await fetch(EMBED_PATH, { signal: controller.signal });
        if (!response.ok) throw new Error(`Unable to load Flodesk form (${response.status})`);

        mount.innerHTML = await response.text();

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
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        setLoadError(true);
      }
    }

    void loadEmbed();

    return () => {
      controller.abort();
      mount?.replaceChildren();
    };
  }, []);

  if (loadError) {
    return (
      <p role="alert" className="px-6 py-12 text-center text-base text-[#5e4c3c]">
        The consultation form could not load. Please refresh the page and try again.
      </p>
    );
  }

  return (
    <div>
      <div ref={mountRef} aria-label="Free consultation booking form" />
      <noscript>
        <p className="px-6 py-12 text-center text-base text-[#5e4c3c]">Please enable JavaScript to load the consultation form.</p>
      </noscript>
    </div>
  );
}
