import type { Metadata } from 'next';
import Link from 'next/link';
import RedirectToGenerator from './RedirectToGenerator';

export const metadata: Metadata = {
    title: 'AI Thank You Note Generator - Free & Instant Online Tool',
    description: 'Generate personalized thank you notes instantly with AI. Free tool for creating heartfelt messages for friends, family, colleagues, and more. No sign-up required.',
};

export default function HomePage() {
    return (
        <>
            <RedirectToGenerator />

            <div className="container" style={{ paddingTop: 'var(--spacing-2xl)', paddingBottom: 'var(--spacing-3xl)' }}>
                <header className="text-center mb-2xl">
                    <h1>
                        AI Thank You Note <span className="highlight">Generator</span>
                    </h1>
                    <p style={{ fontSize: '1.3rem', maxWidth: '850px', margin: '0 auto', color: 'var(--text-secondary)', fontWeight: 500 }}>
                        Create heartfelt, personalized thank you notes in seconds with AI assistance ✨
                    </p>
                </header>

                <section className="mb-2xl">
                    <div className="card" style={{ maxWidth: '950px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>Free AI-Powered Thank You Note Generator</h2>
                        <p>
                            Our <strong>AI Thank You Note Generator</strong> helps you create perfect thank you messages instantly. Whether you're expressing gratitude to friends, family, colleagues, bosses, customers, teachers, or loved ones – our free tool generates personalized, heartfelt notes that capture your appreciation.
                        </p>

                        <p>
                            Choose from 12 different recipient types and 4 tone options (Formal, Warm, Short, Emotional) to generate the perfect message. With over 70+ pre-written templates, you'll always find the right words to express your gratitude.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', marginTop: 'var(--spacing-xl)', color: 'var(--text-primary)' }}>Features</h3>
                        <ul style={{ marginLeft: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            <li><strong>100% Free</strong> – No sign-up, no payment, no hidden costs</li>
                            <li><strong>Instant Results</strong> – Generate notes in seconds</li>
                            <li><strong>12 Recipient Types</strong> – Friend, Boss, Customer, Teacher, Parent, Sibling, Partner, Colleague, Mentor, Neighbor, Coach, Doctor</li>
                            <li><strong>4 Tone Options</strong> – Formal, Warm, Short, Emotional</li>
                            <li><strong>70+ Templates</strong> – AI-powered with emoji formatting</li>
                            <li><strong>Create Beautiful Cards</strong> – Turn your message into a scrollable greeting card with CardMakerrr</li>
                        </ul>

                        <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
                            <Link href="/ai-thank-you-note-generator" className="btn btn-cta">
                                🎨 Start Generating Thank You Notes
                            </Link>
                        </div>

                        <p style={{ marginTop: 'var(--spacing-xl)', fontSize: '1.05rem' }}>
                            Perfect for expressing gratitude in any situation – birthdays, gifts, support, mentorship, business relationships, personal favors, or just saying thanks. Our AI ensures your message strikes the perfect balance between sincerity and appropriateness.
                        </p>
                    </div>
                </section>

                <footer className="text-center" style={{ marginTop: 'var(--spacing-2xl)', color: 'var(--text-muted)' }}>
                    <p>© 2026 CardMakerrr. Transform your messages into beautiful greeting cards.</p>
                </footer>
            </div>
        </>
    );
}
