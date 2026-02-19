import { Link } from 'react-router-dom';
import { Layout } from './Layout';

export function TermsPage() {
  return (
    <Layout>
      <main className="legal-wrap">
        <Link className="back-link" to="/">← Back to home</Link>
        <h1>Terms of Service</h1>
        <p><strong>Effective date:</strong> February 18, 2026</p>
        <p>
          By using Leenr, you agree to these terms. Leenr provides fitness and nutrition guidance for informational
          purposes and is not medical advice.
        </p>
        <h2>Use of service</h2>
        <ul>
          <li>You must provide accurate account information.</li>
          <li>You are responsible for activity performed under your account.</li>
          <li>You may not misuse, reverse engineer, or disrupt the service.</li>
        </ul>
      </main>
    </Layout>
  );
}
