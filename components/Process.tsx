const steps = [
  'Fill out the form below with your wedding date and details.',
  'We confirm a time that works for you.',
  'We talk through your venue, budget, and ideas — honestly, with no pressure.',
];

export function Process() {
  return (
    <section className="bg-[#f8f1e8] px-4 py-20 sm:py-28">
      <div className="page-shell">
        <div className="text-center">
          <p className="eyebrow">How It Works</p>
          <h2 className="font-heading mt-4 text-4xl font-semibold sm:text-6xl">Consultation Process</h2>
        </div>
        <ol className="relative mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step} className="relative rounded-[2rem] border border-[#e4d3bd] bg-[#fffdf9] p-7 sm:p-8">
              <span className="font-heading text-5xl font-semibold leading-none text-[#c8a779]">0{index + 1}</span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[.18em] text-primary">Step {index + 1}</p>
              <p className="mt-3 text-base font-semibold leading-7 text-[#43372e]">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
