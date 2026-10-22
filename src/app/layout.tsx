import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Portfolio - Wesley Santos',
    description: 'Portfólio de desenvolvimento de software, projetos e experiências profissionais.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang="pt-BR">
            <body
                className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
