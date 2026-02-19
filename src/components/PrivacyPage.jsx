import { Link } from 'react-router-dom';
import { Layout } from './Layout';

export function PrivacyPage() {
  return (
    <Layout>
      <main className="legal-wrap">
        <Link className="back-link" to="/">← Back to home</Link>
        <h1>Privacy Policy</h1>
        <p><strong>Effective date:</strong> February 18, 2026</p>
        <p>
          Leenr collects account details, fitness and nutrition inputs, and app usage data to deliver personalized plans,
          progress tracking, and product improvements.
        </p>
        <h2>What we collect</h2>
        <ul>
          <li>Profile data (email, age, height, weight, goals)</li>
          <li>Health and nutrition logs entered by you</li>
          <li>Uploaded photos you choose to provide</li>
          <li>Diagnostic and analytics data for app reliability</li>
        </ul>
      </main>
    </Layout>
  );
}
