import { Menu, X } from 'lucide-react';
import { useState, type MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import { createWhatsAppUrl } from '../../lib/whatsapp';

export function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSectionNavigation = (event: MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    if (!sectionId) {
      return;
    }

    event.preventDefault();

    if (window.location.pathname === '/') {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', `/#${sectionId}`);
        return;
      }
    }

    navigate(`/#${sectionId}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label={`Ir para a página inicial de ${siteConfig.name}`}>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-lg font-semibold text-white">
            G
          </div>
          <div>
            <p className="text-base font-semibold text-slate-900">{siteConfig.name}</p>
            <p className="text-sm text-slate-500">Emagrecimento personalizado</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegação principal">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.sectionId ? `#${item.sectionId}` : item.href}
              onClick={(event) => handleSectionNavigation(event, item.sectionId)}
              className="text-sm font-medium text-slate-600 transition hover:text-emerald-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={createWhatsAppUrl(siteConfig.whatsappNumber, 'Olá! Gostaria de saber mais sobre o Projeto MSV.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            {siteConfig.primaryAction}
          </a>
        </div>

        <button
          type="button"
          className="rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Abrir menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Menu mobile">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.sectionId ? `#${item.sectionId}` : item.href}
                onClick={(event) => {
                  handleSectionNavigation(event, item.sectionId);
                  setOpen(false);
                }}
                className="text-sm font-medium text-slate-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href={createWhatsAppUrl(siteConfig.whatsappNumber, 'Olá! Gostaria de saber mais sobre o Projeto MSV.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white"
            >
              {siteConfig.primaryAction}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
