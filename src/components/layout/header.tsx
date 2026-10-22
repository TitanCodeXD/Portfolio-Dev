const navigation = [
    { label: 'Projetos', href: '#projetos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
];

export function Header() {
    return (
        <header className="w-full border-b border-border">
            <nav
                className="flex min-h-20 w-full items-center justify-between gap-6 px-8 max-md:px-5"
                aria-label="Navegação principal"
            >
                <a
                    href="#inicio"
                    className="shrink-0 font-display text-xl font-bold tracking-tight text-accent"
                >
                    Wesley.dev
                </a>

                <div className="flex items-center gap-5">
                    {navigation.map((item) => (
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
            </nav>
        </header>
    );
}
