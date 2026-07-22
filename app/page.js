import Image from 'next/image';
import Link from 'next/link';
import Brand, { FlaskIcon } from '@/components/Brand';
import { Icon } from '@/components/Icons';

const features = [
  ['Concept Clarity', 'Strong foundations for Classes 9–12'],
  ['NCERT Based', 'Complete chapter-wise coverage'],
  ['Regular Tests', 'Practice, marks and automatic ranks'],
  ['Personal Guidance', 'Doubt support from your teacher']
];

export default function HomePage() {
  return (
    <main className="landing-page">
      <header className="landing-nav shell-width">
        <Brand />
        <nav>
          <a href="#features">Features</a>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
        </nav>
        <div className="nav-actions">
          <Link href="/login?mode=student" className="button button-ghost">Student Login</Link>
          <Link href="/login?mode=admin" className="button button-gold">Admin Login</Link>
        </div>
      </header>

      <section className="hero shell-width">
        <div className="hero-copy">
          <span className="eyebrow">YOUR SUCCESS, OUR PASSION</span>
          <h1>Master Chemistry with <em>The Apex</em></h1>
          <p>Structured chemistry learning for Classes 9 to 12, JEE and NEET—with notes, tests, doubt support and transparent progress.</p>
          <div className="hero-actions">
            <Link href="/login?mode=student" className="button button-gold button-lg">Student Login <span>→</span></Link>
            <a href="#courses" className="button button-outline button-lg">Explore Courses</a>
          </div>
          <div className="hero-badges">
            <span><Icon name="check" size={15} /> Classes 9–12</span>
            <span><Icon name="check" size={15} /> JEE & NEET</span>
            <span><Icon name="check" size={15} /> Personal Mentorship</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="chem-orbit orbit-one" />
          <div className="chem-orbit orbit-two" />
          <div className="hero-image-frame">
            <Image src="/assets/teacher.jpg" alt="The Apex Chemistry teacher" fill priority sizes="(max-width: 900px) 90vw, 45vw" />
          </div>
          <div className="hero-floating-card">
            <span className="floating-icon"><FlaskIcon size={30} /></span>
            <div><strong>Focused Learning</strong><small>Learn • Practise • Excel</small></div>
          </div>
        </div>
      </section>

      <section id="features" className="feature-strip shell-width">
        {features.map(([title, body], index) => (
          <article key={title}>
            <span className="feature-index">0{index + 1}</span>
            <div><h3>{title}</h3><p>{body}</p></div>
          </article>
        ))}
      </section>

      <section id="courses" className="landing-section shell-width">
        <div className="section-title"><span>COURSES</span><h2>Built for every important chemistry milestone</h2></div>
        <div className="course-grid">
          {[
            ['Classes 9–10', 'Build clear fundamentals and confidence for school examinations.'],
            ['Classes 11–12', 'Deep conceptual learning with NCERT-based preparation.'],
            ['JEE Chemistry', 'Exam-oriented practice, testing and performance tracking.'],
            ['NEET Chemistry', 'Focused preparation across Physical, Organic and Inorganic Chemistry.']
          ].map(([title, text]) => <article className="course-card" key={title}><FlaskIcon size={32}/><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="about" className="about-band">
        <div className="shell-width about-inner">
          <div><span className="eyebrow">THE APEX CHEMISTRY</span><h2>A single, secure portal for learning and administration.</h2></div>
          <p>Students receive their own ID and password from the institute. All batches, fees, notes, tests, ranks and doubts are shown only after authenticated login.</p>
        </div>
      </section>

      <footer className="landing-footer shell-width">
        <Brand compact />
        <p>© {new Date().getFullYear()} The Apex Chemistry. All rights reserved.</p>
      </footer>
    </main>
  );
}
