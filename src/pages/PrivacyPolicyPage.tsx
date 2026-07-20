import { PageLayout } from '../components/layout/PageLayout';
import { siteConfig } from '../config/site';

export function PrivacyPolicyPage() {
  return (
    <PageLayout title={`Política de privacidade | ${siteConfig.name}`} description="Política de privacidade da Gustavo2em1.">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
          <h1 className="text-4xl font-semibold text-slate-900">Política de privacidade</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">Esta política descreve como os dados fornecidos por meio do site podem ser tratados e armazenados. O conteúdo abaixo é provisório e deve ser revisado por um profissional jurídico antes da publicação.</p>
          <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
            <p>• Os dados coletados via formulário de contato serão usados apenas para responder sua mensagem.</p>
            <p>• Não compartilhamos suas informações com terceiros sem autorização explícita.</p>
            <p>• Você pode solicitar a remoção dos seus dados entrando em contato por WhatsApp ou e-mail.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
