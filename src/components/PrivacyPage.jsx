import { Link } from 'react-router-dom';
import { Layout } from './Layout';

export function PrivacyPage() {
  return (
    <Layout>
      <main className="legal-wrap">
        <Link className="back-link" to="/">← Back to home</Link>
        <h1>Privacy Policy</h1>
        <p><strong>Last updated:</strong> February 19, 2026</p>

        <div className="highlight">
          <strong>Summary:</strong> We collect only what's necessary to provide the service. Your photos and health data stay private. You can delete your account and all data at any time.
        </div>

        <h2>1. Information We Collect</h2>

        <h3>Account Information</h3>
        <ul>
          <li>Email address (for account authentication)</li>
          <li>Name (optional, for personalization)</li>
        </ul>

        <h3>Profile & Health Data</h3>
        <ul>
          <li>Age, sex, height, and weight</li>
          <li>Fitness goals and activity level</li>
          <li>Dietary preferences and restrictions</li>
          <li>Step counts (if Health integration is enabled)</li>
          <li>Sleep data (if Health integration is enabled)</li>
        </ul>

        <h3>Photos</h3>
        <ul>
          <li>Progress photos (front, side, back views)</li>
          <li>Meal photos for nutrition analysis</li>
        </ul>

        <h3>Usage Data</h3>
        <ul>
          <li>Meals logged and macros tracked</li>
          <li>Workouts completed</li>
          <li>App interactions for improving the service</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li><strong>AI Analysis:</strong> Photos are sent to OpenAI for body composition and meal analysis. OpenAI does not store your images.</li>
          <li><strong>Personalization:</strong> Your data is used to calculate targets, generate meal plans, and provide coaching.</li>
          <li><strong>Notifications:</strong> We send reminders and alerts based on your preferences.</li>
          <li><strong>Improvements:</strong> Aggregated, anonymized data helps us improve the app.</li>
        </ul>

        <h2>3. Data Storage & Security</h2>
        <p>Your data is stored securely using industry-standard encryption:</p>
        <ul>
          <li><strong>Database:</strong> Convex (encrypted at rest and in transit)</li>
          <li><strong>Authentication:</strong> Clerk (SOC 2 compliant)</li>
          <li><strong>Photos:</strong> Stored in encrypted cloud storage</li>
        </ul>

        <h2>4. Third-Party Services</h2>
        <p>We use the following services to provide Leenr:</p>
        <ul>
          <li><strong>Clerk</strong> — Authentication</li>
          <li><strong>Convex</strong> — Database and backend</li>
          <li><strong>OpenAI</strong> — AI analysis (photos are not stored by OpenAI)</li>
          <li><strong>RevenueCat</strong> — Subscription management</li>
          <li><strong>Expo</strong> — Push notifications</li>
          <li><strong>Apple Health / Google Fit</strong> — Health data sync (optional)</li>
        </ul>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li><strong>Access</strong> your data at any time through the app</li>
          <li><strong>Delete</strong> your account and all associated data (Settings → Delete Account)</li>
          <li><strong>Opt out</strong> of notifications</li>
          <li><strong>Disable</strong> Health integration</li>
        </ul>

        <h2>6. Data Retention</h2>
        <p>We retain your data while your account is active. When you delete your account:</p>
        <ul>
          <li>All personal data is permanently deleted within 30 days</li>
          <li>Photos are deleted immediately</li>
          <li>Subscription data is handled by RevenueCat per their policy</li>
        </ul>

        <h2>7. Children's Privacy</h2>
        <p>Leenr is not intended for users under 18 years of age. We do not knowingly collect data from children.</p>

        <h2>8. Changes to This Policy</h2>
        <p>We may update this policy from time to time. We'll notify you of significant changes via email or in-app notification.</p>

        <h2>9. Contact Us</h2>
        <p>Questions about privacy? Contact us at:</p>
        <p>📧 <a href="mailto:privacy@leenr.app">privacy@leenr.app</a></p>
      </main>
    </Layout>
  );
}
