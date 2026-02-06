'use client';

import { useState } from 'react';

type Recipient = 'Friend' | 'Boss' | 'Customer' | 'Teacher' | 'Parent' | 'Sibling' | 'Partner' | 'Colleague' | 'Mentor' | 'Neighbor' | 'Coach' | 'Doctor';
type Tone = 'Formal' | 'Warm' | 'Short' | 'Emotional';

interface Template {
    recipient: Recipient;
    tone: Tone;
    templates: string[];
}

// 70+ templates organized by recipient and tone
const TEMPLATES: Template[] = [
    // Friend templates
    {
        recipient: 'Friend',
        tone: 'Warm',
        templates: [
            "Hey! 💙 Just wanted to say a huge thank you for {reason}. You always know how to make things better, and I'm so grateful to have you in my life. Your kindness means the world to me!",
            "Thank you so much for {reason}! 🌟 You're such an amazing friend, and I feel so lucky to have someone like you by my side. Can't wait to catch up soon!",
            "I'm so grateful for you! 💫 Thank you for {reason}. Your friendship is one of my greatest blessings, and I appreciate everything you do for me.",
            "You're the best! 🎉 Thanks for {reason}. I don't know what I'd do without a friend like you. Let's celebrate soon!",
        ]
    },
    {
        recipient: 'Friend',
        tone: 'Short',
        templates: [
            "Thanks a ton for {reason}! 🙏 You're the best!",
            "Really appreciate {reason}. You're amazing! 💙",
            "Thank you for {reason}! Means a lot! ✨",
            "You rock! Thanks for {reason}! 🌟",
        ]
    },
    {
        recipient: 'Friend',
        tone: 'Emotional',
        templates: [
            "I don't even know where to begin... 💕 Thank you so much for {reason}. You've been there for me through thick and thin, and I honestly don't know what I'd do without you. Your friendship has changed my life.",
            "Thank you from the bottom of my heart for {reason}. 🥹 You've shown me what true friendship means, and I'm forever grateful for your presence in my life.",
            "Words can't express how much {reason} meant to me. 💙 You're more than a friend—you're family. Thank you for always being there.",
        ]
    },
    {
        recipient: 'Friend',
        tone: 'Formal',
        templates: [
            "I wanted to express my sincere gratitude for {reason}. Your thoughtfulness and support are deeply appreciated. Thank you for being such a wonderful friend.",
        ]
    },

    // Boss templates
    {
        recipient: 'Boss',
        tone: 'Formal',
        templates: [
            "Thank you for {reason}. 🙏 I truly appreciate the opportunity to learn and grow under your leadership. Your guidance has been invaluable to my professional development.",
            "I wanted to express my sincere gratitude for {reason}. Your mentorship and support have made a significant impact on my career, and I'm honored to be part of your team.",
            "Thank you very much for {reason}. I deeply value your trust and confidence in me, and I'm committed to continuing to deliver excellent results.",
            "I'm grateful for {reason}. Your leadership style inspires me to continuously improve, and I appreciate the opportunities you've provided for my growth.",
        ]
    },
    {
        recipient: 'Boss',
        tone: 'Warm',
        templates: [
            "Thank you so much for {reason}! 😊 I really appreciate your support and encouragement. Working with you has been a fantastic learning experience.",
            "I wanted to say thank you for {reason}. Your guidance means a lot to me, and I'm grateful to have a leader who genuinely cares about their team's success.",
            "Thanks for {reason}! 🌟 Your positive leadership makes coming to work a pleasure, and I'm learning so much from you.",
        ]
    },
    {
        recipient: 'Boss',
        tone: 'Short',
        templates: [
            "Thank you for {reason}. I truly appreciate your support and guidance. 🙏",
            "Thanks for {reason}. Your leadership is greatly valued!",
        ]
    },
    {
        recipient: 'Boss',
        tone: 'Emotional',
        templates: [
            "I want to sincerely thank you for {reason}. 💙 Your belief in me has given me the confidence to push beyond my limits. I'm deeply grateful for your mentorship.",
            "Thank you from the heart for {reason}. You've shaped not just my career, but who I am as a professional. I'll carry your lessons with me always.",
        ]
    },

    // Customer templates
    {
        recipient: 'Customer',
        tone: 'Formal',
        templates: [
            "Thank you for {reason}. 🙏 We truly appreciate your business and the trust you've placed in us. It's clients like you who make our work meaningful.",
            "We wanted to express our sincere gratitude for {reason}. Your support means everything to us, and we're committed to continuing to exceed your expectations.",
            "Thank you very much for {reason}. We value your partnership and look forward to serving you for years to come.",
            "We're grateful for {reason}. Your feedback and loyalty help us improve every day, and we're honored to have you as a customer.",
        ]
    },
    {
        recipient: 'Customer',
        tone: 'Warm',
        templates: [
            "Thank you so much for {reason}! 😊 We're thrilled to have you as a customer, and we really appreciate your support and trust in our services.",
            "We wanted to say a big thank you for {reason}! 🌟 Customers like you make what we do so rewarding. We're here whenever you need us!",
            "Thanks for {reason}! 💙 Your satisfaction is our top priority, and we're so happy we could help you.",
        ]
    },
    {
        recipient: 'Customer',
        tone: 'Short',
        templates: [
            "Thank you for {reason}! We appreciate your business. 🙏",
            "Thanks for {reason}! We're grateful for your support! ✨",
            "We appreciate {reason}. Thank you for choosing us!",
        ]
    },
    {
        recipient: 'Customer',
        tone: 'Emotional',
        templates: [
            "We can't thank you enough for {reason}. 💕 Your trust in us has been the foundation of our growth, and we're deeply grateful for your loyalty and support.",
            "Thank you from all of us for {reason}. You're not just a customer – you're part of our family, and we're honored to serve you.",
        ]
    },

    // Teacher templates
    {
        recipient: 'Teacher',
        tone: 'Formal',
        templates: [
            "Thank you for {reason}. 🙏 Your dedication to teaching and your commitment to your students' success have made a lasting impact on my education and personal growth.",
            "I wanted to express my sincere gratitude for {reason}. Your patience, knowledge, and encouragement have inspired me to reach higher and pursue my goals with confidence.",
            "Thank you very much for {reason}. The lessons I've learned in your class extend far beyond the curriculum, and I'm grateful for your mentorship.",
            "I'm deeply grateful for {reason}. Your passion for teaching is evident in everything you do, and it has motivated me to become a better student and person.",
        ]
    },
    {
        recipient: 'Teacher',
        tone: 'Warm',
        templates: [
            "Thank you so much for {reason}! 😊 You've made learning enjoyable and inspiring. I really appreciate all the effort you put into helping us succeed.",
            "I wanted to say thank you for {reason}. Your classes are always engaging, and you have a gift for making complex topics easy to understand. 🌟",
            "Thanks for {reason}! 💙 You're not just a great teacher but also a wonderful mentor who genuinely cares about your students.",
        ]
    },
    {
        recipient: 'Teacher',
        tone: 'Short',
        templates: [
            "Thank you for {reason}. I really appreciate your guidance! 🙏",
            "Thanks for {reason}. Your teaching makes a difference! ✨",
            "Grateful for {reason}. You're an amazing teacher!",
        ]
    },
    {
        recipient: 'Teacher',
        tone: 'Emotional',
        templates: [
            "I can't thank you enough for {reason}. 💕 You've changed the way I see the world and myself. Your belief in me has given me the courage to dream bigger.",
            "Thank you from the bottom of my heart for {reason}. You're more than a teacher – you're a role model who has shaped who I am today. I'll never forget your impact on my life.",
            "Words can't express how grateful I am for {reason}. 🥹 You saw potential in me when I didn't see it in myself. Thank you for being an extraordinary educator.",
        ]
    },

    // Parent templates
    {
        recipient: 'Parent',
        tone: 'Warm',
        templates: [
            "Thank you so much for {reason}! 💝 Your love and support mean everything to me. I'm so lucky to have you as my parent!",
            "I wanted to say thank you for {reason}. 🌟 You've always been there for me, and I appreciate everything you do more than words can say.",
            "Thanks for {reason}! 💙 Your guidance and encouragement have helped shape who I am today. I love you!",
        ]
    },
    {
        recipient: 'Parent',
        tone: 'Emotional',
        templates: [
            "Thank you from the depths of my heart for {reason}. 💕 Everything I am today is because of your unconditional love and sacrifice. I can never thank you enough.",
            "I don't say it enough, but thank you for {reason}. 🥹 You've given me everything, and your support has been my anchor through all of life's storms. I love you so much.",
        ]
    },
    {
        recipient: 'Parent',
        tone: 'Formal',
        templates: [
            "I wanted to express my heartfelt gratitude for {reason}. Your wisdom and guidance have been invaluable, and I'm grateful for everything you've done for me.",
        ]
    },
    {
        recipient: 'Parent',
        tone: 'Short',
        templates: [
            "Thanks for {reason}! Love you! 💕",
            "Thank you for {reason}. You're the best! 🙏",
        ]
    },

    // Sibling templates
    {
        recipient: 'Sibling',
        tone: 'Warm',
        templates: [
            "Hey! Thanks for {reason}! 😊 You're the best sibling ever, and I'm so glad we have each other. Love you!",
            "Thank you for {reason}! 💙 Growing up with you has been amazing, and I appreciate everything you do for me!",
        ]
    },
    {
        recipient: 'Sibling',
        tone: 'Short',
        templates: [
            "Thanks for {reason}! You rock! 🙌",
            "Appreciate {reason}. Love ya! 💕",
        ]
    },
    {
        recipient: 'Sibling',
        tone: 'Emotional',
        templates: [
            "Thank you so much for {reason}. 💙 You're not just my sibling – you're my best friend. I'm so grateful to have you in my life.",
        ]
    },
    {
        recipient: 'Sibling',
        tone: 'Formal',
        templates: [
            "I wanted to thank you for {reason}. Your support means a great deal to me, and I'm fortunate to have you as my sibling.",
        ]
    },

    // Partner templates
    {
        recipient: 'Partner',
        tone: 'Warm',
        templates: [
            "Thank you for {reason}! 💕 You make every day brighter, and I'm so grateful to have you by my side. I love you!",
            "I just wanted to say thank you for {reason}. 🌟 Your love and support mean the world to me. I'm the luckiest person alive!",
        ]
    },
    {
        recipient: 'Partner',
        tone: 'Emotional',
        templates: [
            "Thank you from the bottom of my heart for {reason}. 💖 You're my everything, and I can't imagine life without you. I love you more than words can express.",
            "Words can't describe how grateful I am for {reason}. 🥹 You complete me in every way, and I'm so blessed to call you mine. I love you endlessly.",
        ]
    },
    {
        recipient: 'Partner',
        tone: 'Short',
        templates: [
            "Thanks for {reason}! Love you! 💕",
            "You're amazing! Thanks for {reason}! 💙",
        ]
    },
    {
        recipient: 'Partner',
        tone: 'Formal',
        templates: [
            "I wanted to express my sincere gratitude for {reason}. Your partnership and support are deeply valued, and I'm grateful for you every day.",
        ]
    },

    // Colleague templates
    {
        recipient: 'Colleague',
        tone: 'Formal',
        templates: [
            "Thank you for {reason}. 🙏 Your professionalism and collaboration have made a significant impact, and I appreciate working with you.",
            "I wanted to express my gratitude for {reason}. Your expertise and teamwork are truly valued.",
        ]
    },
    {
        recipient: 'Colleague',
        tone: 'Warm',
        templates: [
            "Thanks so much for {reason}! 😊 It's great working with someone as talented and supportive as you!",
            "Thank you for {reason}! 🌟 You make the workplace so much better. Really appreciate your help!",
        ]
    },
    {
        recipient: 'Colleague',
        tone: 'Short',
        templates: [
            "Thanks for {reason}! Really appreciate it! 🙏",
            "Appreciate {reason}. You're awesome! ✨",
        ]
    },
    {
        recipient: 'Colleague',
        tone: 'Emotional',
        templates: [
            "Thank you so much for {reason}. 💙 Your support has made such a difference, and I'm grateful to work alongside you.",
        ]
    },

    // Mentor templates
    {
        recipient: 'Mentor',
        tone: 'Formal',
        templates: [
            "Thank you for {reason}. 🙏 Your guidance and wisdom have been instrumental in my growth, and I'm deeply grateful for your mentorship.",
            "I wanted to express my sincere appreciation for {reason}. Your insights and advice have shaped my path in profound ways.",
        ]
    },
    {
        recipient: 'Mentor',
        tone: 'Warm',
        templates: [
            "Thank you so much for {reason}! 😊 Your mentorship means the world to me, and I'm so grateful for your guidance and support!",
        ]
    },
    {
        recipient: 'Mentor',
        tone: 'Emotional',
        templates: [
            "Thank you from the heart for {reason}. 💙 You've believed in me when I didn't believe in myself, and your mentorship has changed my life.",
        ]
    },
    {
        recipient: 'Mentor',
        tone: 'Short',
        templates: [
            "Thanks for {reason}. Your guidance is invaluable! 🙏",
        ]
    },

    // Neighbor templates
    {
        recipient: 'Neighbor',
        tone: 'Warm',
        templates: [
            "Thank you so much for {reason}! 😊 It's wonderful having such kind neighbors like you. Really appreciate your help!",
            "Thanks for {reason}! 🌟 You're an amazing neighbor, and I'm grateful to have you nearby!",
        ]
    },
    {
        recipient: 'Neighbor',
        tone: 'Formal',
        templates: [
            "I wanted to thank you for {reason}. Your kindness and thoughtfulness are greatly appreciated.",
        ]
    },
    {
        recipient: 'Neighbor',
        tone: 'Short',
        templates: [
            "Thanks for {reason}! Much appreciated! 🙏",
        ]
    },
    {
        recipient: 'Neighbor',
        tone: 'Emotional',
        templates: [
            "Thank you so much for {reason}. 💙 Good neighbors are hard to find, and I'm so lucky to have you!",
        ]
    },

    // Coach templates
    {
        recipient: 'Coach',
        tone: 'Formal',
        templates: [
            "Thank you for {reason}. 🙏 Your dedication and expertise have helped me improve tremendously, and I'm grateful for your coaching.",
        ]
    },
    {
        recipient: 'Coach',
        tone: 'Warm',
        templates: [
            "Thank you so much for {reason}! 😊 Your coaching has made such a difference, and I appreciate all your hard work and support!",
            "Thanks for {reason}! 🌟 You're an incredible coach, and I'm so glad to be on your team!",
        ]
    },
    {
        recipient: 'Coach',
        tone: 'Emotional',
        templates: [
            "Thank you for {reason}. 💙 You've pushed me to be my best, and your belief in me has meant everything. I'm so grateful for your coaching.",
        ]
    },
    {
        recipient: 'Coach',
        tone: 'Short',
        templates: [
            "Thanks for {reason}! You're the best! 🙏",
        ]
    },

    // Doctor templates
    {
        recipient: 'Doctor',
        tone: 'Formal',
        templates: [
            "Thank you for {reason}. 🙏 Your professionalism, expertise, and compassionate care are deeply appreciated. I'm grateful to be under your care.",
            "I wanted to express my sincere gratitude for {reason}. Your medical knowledge and dedication to patient well-being have made a significant difference.",
        ]
    },
    {
        recipient: 'Doctor',
        tone: 'Warm',
        templates: [
            "Thank you so much for {reason}! 😊 Your care and expertise have been wonderful, and I really appreciate everything you've done for me.",
        ]
    },
    {
        recipient: 'Doctor',
        tone: 'Emotional',
        templates: [
            "Thank you from the bottom of my heart for {reason}. 💙 Your care has made such a profound impact on my health and well-being. I'm deeply grateful.",
        ]
    },
    {
        recipient: 'Doctor',
        tone: 'Short',
        templates: [
            "Thank you for {reason}. Truly appreciate your care! 🙏",
        ]
    },
];

export default function ThankYouForm() {
    const [recipient, setRecipient] = useState<Recipient>('Friend');
    const [tone, setTone] = useState<Tone>('Warm');
    const [reason, setReason] = useState('');
    const [generatedNotes, setGeneratedNotes] = useState<string[]>([]);

    const generateNote = () => {
        if (!reason.trim()) {
            alert('Please enter a reason for saying thank you');
            return;
        }

        // Find matching templates
        const matchingTemplate = TEMPLATES.find(
            (t) => t.recipient === recipient && t.tone === tone
        );

        if (!matchingTemplate || matchingTemplate.templates.length === 0) {
            setGeneratedNotes(['Thank you for ' + reason + '! 🙏']);
            return;
        }

        // Select 1-2 random templates from the matching set
        const numNotes = Math.random() > 0.5 ? 2 : 1;
        const shuffled = [...matchingTemplate.templates].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, numNotes);

        // Replace {reason} placeholder
        const notes = selected.map((template) =>
            template.replace('{reason}', reason.trim())
        );

        setGeneratedNotes(notes);
    };

    const handleCreateCard = () => {
        if (generatedNotes.length === 0) return;

        const message = generatedNotes.join('\n\n');
        const encodedMessage = encodeURIComponent(message);
        window.location.href = `https://cardmakerrr.vercel.app/?message=${encodedMessage}`;
    };

    return (
        <div>
            {/* Form Section */}
            <div className="card mb-xl">
                <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-lg)', color: 'var(--text-primary)' }}>
                    🎯 Generate Your Thank You Note
                </h2>

                <div className="form-group">
                    <label htmlFor="recipient" className="form-label">
                        Who are you thanking?
                    </label>
                    <select
                        id="recipient"
                        className="form-select"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value as Recipient)}
                    >
                        <option value="Friend">Friend</option>
                        <option value="Boss">Boss</option>
                        <option value="Customer">Customer</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Parent">Parent</option>
                        <option value="Sibling">Sibling</option>
                        <option value="Partner">Partner</option>
                        <option value="Colleague">Colleague</option>
                        <option value="Mentor">Mentor</option>
                        <option value="Neighbor">Neighbor</option>
                        <option value="Coach">Coach</option>
                        <option value="Doctor">Doctor</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="tone" className="form-label">
                        What tone would you like?
                    </label>
                    <select
                        id="tone"
                        className="form-select"
                        value={tone}
                        onChange={(e) => setTone(e.target.value as Tone)}
                    >
                        <option value="Formal">Formal</option>
                        <option value="Warm">Warm</option>
                        <option value="Short">Short</option>
                        <option value="Emotional">Emotional</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="reason" className="form-label">
                        What are you thanking them for?
                    </label>
                    <textarea
                        id="reason"
                        className="form-textarea"
                        placeholder="e.g., helping me with my project, being a great mentor, your continued support..."
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                    />
                </div>

                <button onClick={generateNote} className="btn btn-primary" style={{ width: '100%' }}>
                    ✨ Generate Thank You Note
                </button>
            </div>

            {/* Generated Output Section */}
            {generatedNotes.length > 0 && (
                <div className="fade-in">
                    <div className="card mb-xl" style={{ background: 'var(--bg-orange-soft)', borderColor: 'var(--border-orange)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>
                            💌 Your AI-Generated Thank You {generatedNotes.length > 1 ? 'Notes' : 'Note'}
                        </h3>
                        {generatedNotes.map((note, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: 'var(--spacing-lg)',
                                    background: 'var(--bg-card)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: generatedNotes.length > 1 && index < generatedNotes.length - 1 ? 'var(--spacing-md)' : '0',
                                    whiteSpace: 'pre-wrap',
                                    lineHeight: '1.8',
                                    fontSize: '1.1rem',
                                    color: 'var(--text-primary)',
                                    border: '1px solid var(--border-color)',
                                }}
                            >
                                {note}
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div
                        className="card text-center"
                        style={{
                            background: 'linear-gradient(135deg, var(--bg-orange-soft) 0%, var(--bg-orange-medium) 100%)',
                            borderColor: 'var(--primary-orange)',
                            padding: 'var(--spacing-xl)',
                        }}
                    >
                        <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>
                            ✨ Want to turn this message into a beautiful scrollable greeting card?
                        </h3>
                        <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-lg)', color: 'var(--text-secondary)' }}>
                            Transform your thank you note into a stunning, shareable card with CardMakerrr
                        </p>
                        <button onClick={handleCreateCard} className="btn btn-cta">
                            🎨 Create a Card with CardMakerrr
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
