import { Layout } from './Layout';

const proofItems = ['Daily action tracking', 'AI meal + workout planning', 'Progress-first UX', 'Built for consistency'];

const featureCards = [
  {
    title: 'Adaptive Workouts',
    copy: 'Programs update based on your progress, available equipment, and training frequency.',
    size: 'wide',
  },
  {
    title: 'Precision Nutrition',
    copy: 'Calorie and macro targets stay aligned with your goal and body data.',
  },
  {
    title: 'Fast Logging',
    copy: 'Scan labels, search foods, and save repeat meals in seconds.',
  },
  {
    title: 'Hydration + Recovery',
    copy: 'Track water and recovery habits inside your daily dashboard.',
  },
  {
    title: 'Progress Intelligence',
    copy: 'Visual trends for workouts, body metrics, and adherence across weeks.',
    size: 'wide',
  },
  {
    title: 'One Unified System',
    copy: 'No more disconnected apps for workouts, nutrition, and tracking.',
  },
];

const faqs = [
  {
    q: 'Who is Leenr for?',
    a: 'Anyone focused on fat loss, muscle gain, or building consistency with a structured plan.',
  },
  {
    q: 'Do I need to track every detail?',
    a: 'No. Leenr supports quick logging and saved meals so staying on plan is realistic.',
  },
  {
    q: 'Can I adjust my plan?',
    a: 'Yes. Workout and meal structures are editable and can be regenerated as your needs change.',
  },
];

export function HomePage() {
  return (
    <Layout>
      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">THE FITNESS APP BUILT TO DRIVE RESULTS</p>
            <h1>Stop guessing. Start executing.</h1>
            <p className="subhead">
              Leenr gives you a complete fitness operating system: personalized training, meal plans,
              hydration tracking, and daily accountability in one focused mobile app.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#download">Download Our Mobile App</a>
              <a className="btn btn-ghost" href="#features">View Product</a>
            </div>
            <div className="mini-proof">
              {proofItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="hero-preview" aria-label="App preview">
            <div className="preview-header">
              <strong>Today Dashboard</strong>
              <span>Execution Mode</span>
            </div>
            <div className="preview-grid">
              <article>
                <label>Calories</label>
                <p>2,180</p>
                <small>Goal crushed</small>
              </article>
              <article>
                <label>Hydration</label>
                <p>78%</p>
                <small>2.7L / 3.5L daily</small>
              </article>
              <article>
                <label>Workout</label>
                <p>Push A</p>
                <small>5 / 6 exercises done</small>
              </article>
              <article>
                <label>Protein</label>
                <p>171g</p>
                <small>On target</small>
              </article>
            </div>
            <div className="preview-progress">
              <div className="preview-progress-row">
                <label>Daily adherence</label>
                <strong>82%</strong>
              </div>
              <div className="progress-track">
                <span className="progress-fill" />
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Brand message">
          <p>Designed to improve adherence, simplify planning, and increase consistency every week.</p>
        </section>

        <section className="section split">
          <div>
            <p className="section-kicker">The Problem</p>
            <h2>Most people fail because their fitness stack is fragmented.</h2>
            <p>
              Workouts in one app. Meals in another. Progress notes somewhere else. That creates friction,
              and friction kills consistency.
            </p>
          </div>
          <div>
            <p className="section-kicker">The Leenr Solution</p>
            <h2>One plan. One dashboard. One daily execution loop.</h2>
            <p>
              Your training, nutrition, and recovery are connected so each daily decision supports your goal.
            </p>
          </div>
        </section>

        <section id="features" className="section">
          <div className="section-head">
            <p className="section-kicker">Features</p>
            <h2>Everything needed to transform, without the noise.</h2>
          </div>
          <div className="bento-grid">
            {featureCards.map((card) => (
              <article key={card.title} className={`bento-card ${card.size ?? ''}`.trim()}>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section how">
          <div className="section-head">
            <p className="section-kicker">How It Works</p>
            <h2>Three steps to daily momentum.</h2>
          </div>
          <div className="steps-3">
            <article>
              <span>01</span>
              <h3>Set your goal</h3>
              <p>Complete onboarding with your body data, objective, and preferences.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Get your system</h3>
              <p>Leenr builds your workout and nutrition plan with clear daily targets.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Execute and adapt</h3>
              <p>Log actions quickly and refine your plan as your body and routine evolve.</p>
            </article>
          </div>
        </section>

        <section className="section testimonials">
          <div className="section-head">
            <p className="section-kicker">Why Users Stick</p>
            <h2>Built for real-world consistency.</h2>
          </div>
          <div className="quote-row">
            <blockquote>
              “Leenr made my fitness process simple. I know exactly what to do each day.”
            </blockquote>
            <blockquote>
              “My workouts and meals finally match. That alone changed my results.”
            </blockquote>
            <blockquote>
              “Best UX I’ve used for daily health tracking and adherence.”
            </blockquote>
          </div>
        </section>

        <section className="section faq">
          <div className="section-head">
            <p className="section-kicker">FAQ</p>
            <h2>Answers before you download.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <article key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="download" className="section final-cta">
          <h2>Ready to build a leaner body with structure?</h2>
          <p>Download the mobile app and start your personalized system today.</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="mailto:support@leenr.app?subject=Leenr%20App%20Download">
              Download Our Mobile App
            </a>
            <a className="btn btn-ghost" href="mailto:support@leenr.app?subject=Leenr%20Sales%20Questions">
              Talk to Team
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
