import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
