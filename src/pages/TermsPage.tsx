import { PageLayout } from '../components/layout/PageLayout';
import { siteConfig } from '../config/site';

export function TermsPage() {
  return (
    <PageLayout title={`Termos de uso | ${siteConfig.name}`} description="Termos de uso da Gustavo2em1.">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
          <h1 className="text-4xl font-semibold text-slate-900">Termos de uso</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">Ao utilizar este site, você concorda com o uso de informações de contato para fins de comunicação institucional e comercial. Este texto é provisório e deve ser revisado antes da publicação oficial.</p>
          <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
            <p>• O conteúdo do site é informativo e comercial.</p>
            <p>• Os contatos e links de conversão têm o objetivo de direcionar o usuário para uma conversa com a empresa.</p>
            <p>• O site pode ser atualizado a qualquer momento sem aviso prévio.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
