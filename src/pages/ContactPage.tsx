import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { siteConfig } from '../config/site';

export function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = event.target.type === 'checkbox' ? (event.target as HTMLInputElement).checked : event.target.value;
    setFormState((current) => ({ ...current, [event.target.name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout title={`Contato | ${siteConfig.name}`} description="Entre em contato pelo WhatsApp ou preencha o formulário para receber mais informações.">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Contato</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">Fale com a equipe.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              O formulário abaixo está preparado para futura integração com um serviço de envio. Por enquanto, ele apenas confirma o envio na interface.
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-600">
              <p><strong>WhatsApp:</strong> {siteConfig.whatsapp}</p>
              <p><strong>E-mail:</strong> {siteConfig.email}</p>
              <p><strong>Instagram:</strong> {siteConfig.instagram}</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">Nome</label>
                <input id="name" name="name" value={formState.name} onChange={handleChange} required className="w-full rounded-full border border-slate-200 px-4 py-3 outline-none" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">Telefone</label>
                <input id="phone" name="phone" value={formState.phone} onChange={handleChange} required className="w-full rounded-full border border-slate-200 px-4 py-3 outline-none" />
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">E-mail</label>
                <input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required className="w-full rounded-full border border-slate-200 px-4 py-3 outline-none" />
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-slate-700">Assunto</label>
                <select id="subject" name="subject" value={formState.subject} onChange={handleChange} required className="w-full rounded-full border border-slate-200 px-4 py-3 outline-none">
                  <option value="">Selecione</option>
                  <option value="Informações do projeto">Informações do projeto</option>
                  <option value="Quero entrar em contato">Quero entrar em contato</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">Mensagem</label>
              <textarea id="message" name="message" rows={5} value={formState.message} onChange={handleChange} required className="w-full rounded-[24px] border border-slate-200 px-4 py-3 outline-none" />
            </div>
            <label className="mt-4 flex items-start gap-3 text-sm text-slate-600">
              <input type="checkbox" name="consent" checked={formState.consent} onChange={handleChange} className="mt-1 h-4 w-4" />
              <span>Confirmo que li e concordo com a política de privacidade e aceito que esta mensagem seja encaminhada para a equipe.</span>
            </label>
            <button type="submit" className="mt-6 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
              Enviar mensagem
            </button>
            {submitted ? <p className="mt-4 text-sm font-medium text-emerald-700">Mensagem recebida. A integração com o serviço de envio pode ser feita no futuro.</p> : null}
          </form>
        </div>
      </section>
    </PageLayout>
  );
}
