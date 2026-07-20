import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { createWhatsAppUrl } from '../../lib/whatsapp';

export function WhatsAppButton() {
  return (
    <a
      href={createWhatsAppUrl(siteConfig.whatsappNumber, 'Olá! Quero falar sobre o Projeto MSV.')}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-700 md:bottom-6 md:right-6"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle size={18} />
      Falar no WhatsApp
    </a>
  );
}
