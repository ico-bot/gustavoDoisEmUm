import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { PrivacyPolicyPage } from '../pages/PrivacyPolicyPage';
import { TermsPage } from '../pages/TermsPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/produtos" element={<ProductsPage />} />
      <Route path="/produto/:slug" element={<ProductDetailsPage />} />
      <Route path="/sobre" element={<AboutPage />} />
      <Route path="/contato" element={<ContactPage />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
      <Route path="/termos-de-uso" element={<TermsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
