import type { Metadata } from 'next';
import Link from 'next/link';
import ThankYouForm from './ThankYouForm';

export const metadata: Metadata = {
    title: 'AI Thank You Note Generator (Free & Instant)',
    description: 'Generate thoughtful thank you notes instantly using AI. Turn your message into a beautiful scrollable greeting card with CardMakerrr.',
};

export default function ThankYouNotePage() {
    return (
        <div className="container" style={{ paddingTop: 'var(--spacing-2xl)', paddingBottom: 'var(--spacing-3xl)' }}>
            {/* Header */}
            <header className="text-center mb-2xl">
                <h1>
                    AI Thank You Note <span className="highlight">Generator</span>
                </h1>
                <p style={{ fontSize: '1.3rem', maxWidth: '850px', margin: '0 auto', color: 'var(--text-secondary)', fontWeight: 500 }}>
                    Create heartfelt, personalized thank you notes in seconds with AI assistance ✨
                </p>
            </header>

            {/* Intro Section - SEO Content */}
            <section className="mb-2xl">
                <div className="card" style={{ maxWidth: '950px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>What is an AI Thank You Note Generator?</h2>
                    <p>
                        An <strong>AI Thank You Note Generator</strong> is a free, instant tool that helps you craft the perfect thank you message for any occasion. Whether you're thanking a friend for their support, expressing gratitude to your boss for career guidance, appreciating a loyal customer, or honoring a teacher who made a difference – our AI-powered generator creates personalized, thoughtful notes that capture exactly what you want to say.
                    </p>

                    <h3 style={{ fontSize: '1.5rem', marginTop: 'var(--spacing-xl)', color: 'var(--text-primary)' }}>Who is this tool for?</h3>
                    <p>Our AI thank you note generator is perfect for:</p>
                    <ul style={{ marginLeft: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        <li><strong>Friends and Family:</strong> Express appreciation for birthdays, gifts, support during tough times, or just being there</li>
                        <li><strong>Professional Contacts:</strong> Thank your boss, colleagues, or mentors for guidance, opportunities, or recommendations</li>
                        <li><strong>Business Owners:</strong> Show gratitude to customers, clients, and partners for their trust and loyalty</li>
                        <li><strong>Students:</strong> Acknowledge teachers, professors, and educators who've inspired and shaped your journey</li>
                        <li><strong>Personal Relationships:</strong> Thank parents, siblings, partners, neighbors, coaches, and more for their kindness</li>
                    </ul>

                    <h3 style={{ fontSize: '1.5rem', marginTop: 'var(--spacing-xl)', color: 'var(--text-primary)' }}>Why use AI to generate thank you notes?</h3>
                    <p>
                        Sometimes finding the right words to express genuine gratitude can be challenging. That's where AI helps. Our generator combines the warmth of human emotion with the efficiency of artificial intelligence to create messages that feel authentic and personal. You can choose from different tones – formal for professional contexts, warm for close relationships, short for quick messages, or emotional for deeply meaningful occasions. The AI ensures your thank you note strikes the perfect balance between sincerity and appropriateness.
                    </p>

                    <p style={{ marginBottom: '0', fontSize: '1.05rem' }}>
                        Best of all, it's completely <strong style={{ color: 'var(--primary-orange)' }}>free</strong>, <strong style={{ color: 'var(--primary-orange)' }}>instant</strong>, and requires <strong style={{ color: 'var(--primary-orange)' }}>no sign-up</strong>. Simply select your recipient, choose your tone, describe what you're thankful for, and let our AI craft the perfect message in seconds.
                    </p>
                </div>
            </section>

            {/* Tool Form Component */}
            <ThankYouForm />

            {/* Example Thank You Notes - Static SEO Content */}
            <section className="mt-2xl">
                <div className="card" style={{ maxWidth: '950px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: 'var(--spacing-xl)', color: 'var(--text-primary)' }}>
                        📝 Example Thank You Notes
                    </h2>

                    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
                        {/* Example 1 */}
                        <div style={{ padding: 'var(--spacing-lg)', background: 'var(--bg-cream)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-orange)' }}>
                            <h4 style={{ color: 'var(--primary-orange)', marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem', fontWeight: 600 }}>
                                For a Friend (Warm Tone)
                            </h4>
                            <p style={{ fontStyle: 'italic', lineHeight: '1.8', marginBottom: '0', color: 'var(--text-primary)' }}>
                                "Hey! 💙 Just wanted to say a huge thank you for being there when I needed someone to talk to. You always know how to make things better, and I'm so grateful to have you in my life. Your kindness means the world to me!"
                            </p>
                        </div>

                        {/* Example 2 */}
                        <div style={{ padding: 'var(--spacing-lg)', background: 'var(--bg-cream)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-orange-dark)' }}>
                            <h4 style={{ color: 'var(--primary-orange-dark)', marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem', fontWeight: 600 }}>
                                For a Boss (Formal Tone)
                            </h4>
                            <p style={{ fontStyle: 'italic', lineHeight: '1.8', marginBottom: '0', color: 'var(--text-primary)' }}>
                                "Thank you for the opportunity to lead the new project. 🙏 I truly appreciate the opportunity to learn and grow under your leadership. Your guidance has been invaluable to my professional development."
                            </p>
                        </div>

                        {/* Example 3 */}
                        <div style={{ padding: 'var(--spacing-lg)', background: 'var(--bg-cream)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-orange)' }}>
                            <h4 style={{ color: 'var(--primary-orange)', marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem', fontWeight: 600 }}>
                                For a Customer (Warm Tone)
                            </h4>
                            <p style={{ fontStyle: 'italic', lineHeight: '1.8', marginBottom: '0', color: 'var(--text-primary)' }}>
                                "Thank you so much for your continued support and trust in our services! 😊 We're thrilled to have you as a customer, and we really appreciate your support and trust in our services."
                            </p>
                        </div>

                        {/* Example 4 */}
                        <div style={{ padding: 'var(--spacing-lg)', background: 'var(--bg-cream)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-orange-light)' }}>
                            <h4 style={{ color: 'var(--primary-orange-dark)', marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem', fontWeight: 600 }}>
                                For a Teacher (Emotional Tone)
                            </h4>
                            <p style={{ fontStyle: 'italic', lineHeight: '1.8', marginBottom: '0', color: 'var(--text-primary)' }}>
                                "I can't thank you enough for believing in me when I struggled with math. 💕 You've changed the way I see the world and myself. Your belief in me has given me the courage to dream bigger."
                            </p>
                        </div>

                        {/* Example 5 */}
                        <div style={{ padding: 'var(--spacing-lg)', background: 'var(--bg-cream)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-orange)' }}>
                            <h4 style={{ color: 'var(--primary-orange)', marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem', fontWeight: 600 }}>
                                For a Parent (Warm Tone)
                            </h4>
                            <p style={{ fontStyle: 'italic', lineHeight: '1.8', marginBottom: '0', color: 'var(--text-primary)' }}>
                                "Thank you so much for always being there for me! 💝 Your love and support mean everything to me. I'm so lucky to have you as my parent!"
                            </p>
                        </div>

                        {/* Example 6 */}
                        <div style={{ padding: 'var(--spacing-lg)', background: 'var(--bg-cream)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-orange-dark)' }}>
                            <h4 style={{ color: 'var(--primary-orange-dark)', marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem', fontWeight: 600 }}>
                                For a Partner (Emotional Tone)
                            </h4>
                            <p style={{ fontStyle: 'italic', lineHeight: '1.8', marginBottom: '0', color: 'var(--text-primary)' }}>
                                "Thank you from the bottom of my heart for always supporting my dreams. 💖 You're my everything, and I can't imagine life without you. I love you more than words can express."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Link & Footer */}
            <footer className="text-center mt-2xl">
                <div style={{ padding: 'var(--spacing-xl)', background: 'var(--bg-cream)', borderRadius: 'var(--radius-lg)', maxWidth: '600px', margin: '0 auto', border: '2px solid var(--border-color)' }}>
                    <p style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)', fontWeight: 500 }}>
                        Ready to create more amazing content?
                    </p>
                    <Link href="/" className="btn btn-primary">
                        ← Back to CardMakerrr Home
                    </Link>
                </div>

                <p style={{ marginTop: 'var(--spacing-xl)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    © 2026 CardMakerrr. Transform your messages into beautiful greeting cards.
                </p>
            </footer>
        </div>
    );
}
