'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// Traduções manuais, sem biblioteca externa
import { translations, type Language } from '@/i18n/translations';

const navigation = [
    { label: 'home', href: '#inicio' },
    { label: 'projects', href: '#projetos' },
    { label: 'experience', href: '#experiencia' },
    { label: 'about', href: '#sobre' },
    { label: 'contact', href: '#contato' },
] as const;

const resumeLinks = {
    pt: 'https://drive.google.com/uc?export=download&id=18-_0123-abVLOlczYzshN0DhWkR85YaP',
    en: 'https://drive.google.com/uc?export=download&id=1Qr0mLYaVC-7MbCYhY1pswf9OBIZa9rtN',
};

export const Header = ({ language }: { language: Language }) => {
    const t = translations[language];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathname = usePathname();
    const isEnglish = pathname === '/en';

    const router = useRouter();

    const changeLanguage = (nextLanguage: Language) => {
        const nextPath = nextLanguage === 'en' ? '/en' : '/';

        if (pathname === nextPath) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            router.push(nextPath);
            return;
        }

        document.body.classList.add('language-transition');

        window.setTimeout(() => {
            router.push(nextPath);

            window.setTimeout(() => {
                document.body.classList.remove('language-transition');
            }, 200);
        }, 180);
    };

    const languageSelector = (
        <div
            className="inline-flex items-center rounded-lg border border-border-strong bg-surface p-1"
            aria-label="Selecionar idioma"
        >
            <button
                type="button"
                aria-label="Mudar idioma para português"
                aria-current={!isEnglish ? 'page' : undefined}
                onClick={() => changeLanguage('pt')}
                className={`rounded-md px-2.5 py-1.5 font-mono text-xs font-semibold transition-all duration-200 ${
                    !isEnglish ? 'bg-accent text-[#06120C]' : 'text-muted hover:text-foreground'
                }`}
            >
                PT
            </button>

            <button
                type="button"
                aria-label="Switch language to English"
                aria-current={isEnglish ? 'page' : undefined}
                onClick={() => changeLanguage('en')}
                className={`rounded-md px-2.5 py-1.5 font-mono text-xs font-semibold transition-all duration-200 ${
                    isEnglish ? 'bg-accent text-[#06120C]' : 'text-muted hover:text-foreground'
                }`}
            >
                EN
            </button>
        </div>
    );

    const resumeButtons = (
        <>
            <a
                href={resumeLinks.pt}
                className="inline-flex min-h-10 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-button border border-border-strong px-2.5 py-2 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
                CV (PT) <span aria-hidden="true">↓</span>
            </a>

            <a
                href={resumeLinks.en}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-button border border-border-strong px-2.5 py-2 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
                Resume (EN) <span aria-hidden="true">↗</span>
            </a>
        </>
    );

    return (
        <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <nav
                className="container-site relative flex min-h-20 items-center justify-between gap-4"
                aria-label="Navegação principal"
            >
                <a
                    href="#inicio"
                    className="shrink-0 font-display text-xl font-bold tracking-tight"
                    onClick={() => setIsMenuOpen(false)}
                >
                    wesley<span className="text-accent">.dev</span>
                </a>

                {/* Navegação desktop */}
                <div className="hidden items-center gap-4 md:flex">
                    {navigation
                        .filter((item) => item.href !== '#inicio')
                        .map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="whitespace-nowrap text-sm text-muted transition-colors hover:text-foreground"
                            >
                                {t.navigation[item.label]}
                            </a>
                        ))}

                    {resumeButtons}

                    {languageSelector}
                </div>

                {/* Controles mobile */}
                <div className="flex items-center gap-4 md:hidden">
                    {languageSelector}

                    <button
                        type="button"
                        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="flex size-10 items-center justify-center rounded-button border border-border text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        {isMenuOpen ? (
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                className="size-5"
                            >
                                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                className="size-5"
                            >
                                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Menu mobile */}
                {isMenuOpen && (
                    <div
                        id="mobile-navigation"
                        className="absolute inset-x-0 top-full mt-3 rounded-2xl border border-border bg-[#12161B] p-4 shadow-xl md:hidden"
                        onKeyDown={(event) => {
                            if (event.key === 'Escape') {
                                setIsMenuOpen(false);
                            }
                        }}
                    >
                        <div className="flex flex-col">
                            <p className="mb-3 px-3 font-mono text-xs text-accent">
                                {t.navigation.navigation}
                            </p>

                            {navigation.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="rounded-lg px-3 py-3 text-sm text-secondary transition-colors hover:bg-[#171C22] hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
                                >
                                    {t.navigation[item.label]}
                                </a>
                            ))}

                            <div className="my-3 border-t border-border" />

                            <p className="mb-3 px-3 font-mono text-xs text-accent">
                                {isEnglish ? 'RESUMES' : 'CURRÍCULOS'}
                            </p>

                            <div className="flex flex-col gap-2">
                                <a
                                    href={resumeLinks.pt}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex min-h-12 items-center justify-center gap-2 rounded-button border border-border-strong px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                                >
                                    CV em Português (PDF)
                                    <span aria-hidden="true">↓</span>
                                </a>

                                <a
                                    href={resumeLinks.en}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex min-h-12 items-center justify-center gap-2 rounded-button bg-accent px-4 py-3 text-sm font-medium text-[#06120C] transition-colors hover:bg-[#9AEBCB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                                >
                                    Resume in English
                                    <span aria-hidden="true">↗</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};
