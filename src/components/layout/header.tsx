'use client';

import { useState } from 'react';

const navigation = [
    { label: 'Início', href: '#inicio' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <div className="hidden items-center gap-5 md:flex">
                    {navigation
                        .filter((item) => item.href !== '#inicio')
                        .map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="whitespace-nowrap text-sm text-muted transition-colors hover:text-foreground"
                            >
                                {item.label}
                            </a>
                        ))}

                    <a
                        href="/curriculo.pdf"
                        download
                        className="whitespace-nowrap rounded-button border border-border-strong px-3 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                        Currículo (PDF) ↓
                    </a>

                    <button
                        type="button"
                        aria-label="Idioma atual: português"
                        title="A versão em inglês será implementada posteriormente"
                        disabled
                        className="whitespace-nowrap font-mono text-xs text-muted opacity-70"
                    >
                        PT / EN
                    </button>
                </div>

                {/* Controles mobile */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        type="button"
                        aria-label="Idioma atual: português"
                        title="A versão em inglês será implementada posteriormente"
                        disabled
                        className="font-mono text-xs text-muted opacity-70"
                    >
                        PT / EN
                    </button>

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
                            <p className="mb-3 px-3 font-mono text-xs text-accent">NAVEGAÇÃO</p>

                            {navigation.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="rounded-lg px-3 py-3 text-sm text-secondary transition-colors hover:bg-[#171C22] hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
                                >
                                    {item.label}
                                </a>
                            ))}

                            <div className="my-3 border-t border-border" />

                            <a
                                href="/curriculo.pdf"
                                download
                                onClick={() => setIsMenuOpen(false)}
                                className="flex min-h-12 items-center justify-center gap-2 rounded-button bg-accent px-4 py-3 text-sm font-medium text-[#06120C] transition-colors hover:bg-[#9AEBCB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                            >
                                Currículo (PDF)
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="size-4"
                                >
                                    <path
                                        d="M12 3v12m-5-5 5 5 5-5M5 17v4h14v-4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
