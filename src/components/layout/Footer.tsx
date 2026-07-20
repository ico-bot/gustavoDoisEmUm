import { MessageCircle, MapPin, Clock3, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-4 py-12 text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-7">{siteConfig.description}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Navegação</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Contato</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-center gap-2"><MessageCircle size={16} /> {siteConfig.whatsapp}</li>
            <li className="flex items-center gap-2"><Send size={16} /> Instagram</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> {siteConfig.address}</li>
            <li className="flex items-center gap-2"><Clock3 size={16} /> {siteConfig.openingHours}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Políticas</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {siteConfig.footerLinks.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-slate-800 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {year} {siteConfig.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
