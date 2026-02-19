import { Link } from 'react-router-dom';
import { Layout } from './Layout';

export function TermsPage() {
  return (
    <Layout>
      <main className="legal-wrap">
        <Link className="back-link" to="/">← Back to home</Link>
        <h1>Terms of Service</h1>
        <p><strong>Last updated:</strong> February 19, 2026</p>

        <div className="highlight">
          <strong>Summary:</strong> Leenr provides AI-powered fitness coaching. It's not medical advice. Use responsibly, pay for what you use, and don't do anything illegal.
        </div>

        <h2>1. Acceptance of Terms</h2>
        <p>By downloading, installing, or using Leenr ("the App"), you agree to be bound by these Terms of Service. If you don't agree, don't use the App.</p>

        <h2>2. Description of Service</h2>
        <p>Leenr is an AI-powered fitness application that provides:</p>
        <ul>
          <li>Body composition analysis from photos</li>
          <li>Personalized nutrition and calorie targets</li>
          <li>Meal logging and photo-based macro estimation</li>
          <li>Workout programs and exercise tracking</li>
          <li>Progress tracking and weekly assessments</li>
        </ul>

        <div className="warning">
          <strong>⚠️ Medical Disclaimer:</strong> Leenr is not a medical service. The AI analysis and recommendations are for informational purposes only. Always consult a healthcare professional before starting any diet or exercise program, especially if you have health conditions.
        </div>

        <h2>3. Account Registration</h2>
        <p>To use Leenr, you must:</p>
        <ul>
          <li>Be at least 18 years old</li>
          <li>Create an account with accurate information</li>
          <li>Keep your login credentials secure</li>
          <li>Notify us immediately of any unauthorized access</li>
        </ul>

        <h2>4. Subscription & Payments</h2>

        <h3>Free Features</h3>
        <p>Basic features are available for free, including limited meal logging and step tracking.</p>

        <h3>Premium Subscription</h3>
        <ul>
          <li>Subscriptions are billed weekly, monthly, or annually</li>
          <li>Payment is charged to your Apple ID or Google Play account</li>
          <li>Subscriptions auto-renew unless cancelled 24 hours before the end of the current period</li>
          <li>Manage or cancel subscriptions through your device's app store settings</li>
        </ul>

        <h3>Refunds</h3>
        <p>Refund requests are handled by Apple/Google per their respective policies. We cannot process refunds directly.</p>

        <h2>5. User Content</h2>
        <p>You retain ownership of your photos and data. By uploading content, you grant us a license to:</p>
        <ul>
          <li>Process and analyze your photos using AI</li>
          <li>Store your data to provide the service</li>
          <li>Generate anonymized, aggregated insights (no personal identification)</li>
        </ul>

        <h3>Prohibited Content</h3>
        <p>You may not upload:</p>
        <ul>
          <li>Illegal content</li>
          <li>Content depicting minors</li>
          <li>Content you don't have rights to share</li>
          <li>Malicious files or code</li>
        </ul>

        <h2>6. Acceptable Use</h2>
        <p>You agree NOT to:</p>
        <ul>
          <li>Use the App for any illegal purpose</li>
          <li>Attempt to reverse engineer or hack the App</li>
          <li>Share your account with others</li>
          <li>Use automated tools to access the service</li>
          <li>Harass other users or our team</li>
          <li>Misrepresent yourself or impersonate others</li>
        </ul>

        <h2>7. AI Accuracy</h2>
        <p>Our AI provides estimates and recommendations based on limited information. We do not guarantee:</p>
        <ul>
          <li>100% accuracy of body fat percentage estimates</li>
          <li>Exact calorie counts for meals</li>
          <li>Specific health outcomes from following recommendations</li>
        </ul>
        <p>Use your judgment and consult professionals for medical decisions.</p>

        <h2>8. Intellectual Property</h2>
        <p>The Leenr app, including its code, design, content, and AI models, is owned by us. You may not copy, modify, or distribute any part of the App without permission.</p>

        <h2>9. Termination</h2>
        <p>We may suspend or terminate your account if you:</p>
        <ul>
          <li>Violate these Terms</li>
          <li>Engage in fraudulent activity</li>
          <li>Abuse the service or other users</li>
        </ul>
        <p>You may delete your account at any time through Settings → Delete Account.</p>

        <h2>10. Limitation of Liability</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
        <ul>
          <li>Leenr is provided "as is" without warranties</li>
          <li>We are not liable for any indirect, incidental, or consequential damages</li>
          <li>Our total liability is limited to the amount you paid us in the past 12 months</li>
        </ul>

        <h2>11. Indemnification</h2>
        <p>You agree to indemnify and hold us harmless from any claims arising from your use of the App or violation of these Terms.</p>

        <h2>12. Changes to Terms</h2>
        <p>We may update these Terms from time to time. Continued use after changes constitutes acceptance. We'll notify you of significant changes.</p>

        <h2>13. Governing Law</h2>
        <p>These Terms are governed by the laws of the State of Arizona, United States, without regard to conflict of law principles.</p>

        <h2>14. Dispute Resolution</h2>
        <p>Any disputes will be resolved through binding arbitration in Phoenix, Arizona, except for claims that may be brought in small claims court.</p>

        <h2>15. Contact</h2>
        <p>Questions about these Terms? Contact us at:</p>
        <p>📧 <a href="mailto:legal@leenr.app">legal@leenr.app</a></p>
      </main>
    </Layout>
  );
}
