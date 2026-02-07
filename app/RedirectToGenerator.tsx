'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectToGenerator() {
    const router = useRouter();

    useEffect(() => {
        // Only redirect if JavaScript is enabled
        router.push('/ai-thank-you-note-generator');
    }, [router]);

    return null;
}
