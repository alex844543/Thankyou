import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'CardMakerrr - AI-Powered Greeting Cards',
    description: 'Create beautiful, personalized greeting cards with AI',
    icons: {
        icon: '/logo.png',
        apple: '/logo.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta name="google-site-verification" content="UybRvzelbL14ELO4qnOIFTNhLUn7t_K7delVlY6kfT8" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
