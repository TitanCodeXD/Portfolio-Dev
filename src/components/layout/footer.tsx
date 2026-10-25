export const Footer = () => {
    return (
        <footer className="border-t border-border">
            <div className="container-site flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1">
                    <a
                        href="#inicio"
                        className="w-fit font-display text-lg font-semibold text-foreground transition-colors duration-200 hover:text-accent"
                    >
                        Wesley Santos<span className="text-accent">.</span>
                    </a>

                    <p className="text-sm text-muted">
                        Desenvolvendo, aprendendo e explorando além do código.
                    </p>
                </div>

                <div className="flex flex-col gap-2 sm:items-end">
                    <a
                        href="#inicio"
                        className="w-fit text-sm text-secondary transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        Voltar ao topo ↑
                    </a>

                    <p className="text-xs text-muted">© 2026 Wesley Santos.</p>
                </div>
            </div>
        </footer>
    );
};
