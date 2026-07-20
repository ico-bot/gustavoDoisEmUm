import { testimonials } from '../../data/testimonials';

export function TestimonialsSection() {
  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Depoimentos</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Histórias que mostram a importância do suporte.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-lg leading-8 text-slate-700">“{testimonial.quote}”</p>
              <footer className="mt-6">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
